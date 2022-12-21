org 0x7C00
bits 16

GDT_DATA equ GDT.Data - GDT
GDT_CODE equ GDT.Code - GDT

SECTORS equ 40 ; A constant, read 40 sectors, should be enough
KERNEL_OFFSET equ 0x7E00 ; Store our other half kernel just after the bootsect

jmp 0:_start

_start:
    mov [DRIVE], dl       ; Saves the boot drive number
    mov ah, 0x02          ; Function number
    mov al, SECTORS       ; Saves the boot drive number
    mov ch, 0x00          ; Cylinder 0
    mov cl, 0x02          ; Start reading from sector 2, sector 1 is out boot sector
    mov dh, 0x00          ; Head 0
    mov bx, KERNEL_OFFSET ; Put the read sectors here
    int 0x13              ; Call

    jc disk_error         ; Jump to disk error if carry bit is set

    cmp al, SECTORS       ; Check if the right amount of sectors is read
    jne sectors_error     ; Jump if not equal

    ; Enable A20 line
    in al, 0x92
    test al, 2
    jnz .after
    or al, 2
    and al, 0xFE
    out 0x92, al
.after:
    cli ; Clear interrupts
    lgdt [GDT.Pointer] ; load gdt
    mov eax, cr0
    or eax, 1 ; Set protected mode enable bit
    mov cr0, eax
    jmp GDT_CODE:init_pm ; Far jump - automatically sets cs to the segment it's jumping to

disk_error:
    mov di, DISK_ERROR
    call puts
    jmp $

sectors_error:
    mov di, SECTORS_ERROR
    call puts
    jmp $

puts: ; Our print function
    push eax ; Store the registers
    push di
    mov ah, 0x0E
.loop:
    mov al, [di] ; Store the stuff in memory position edi to al
    cmp al, 0
    je end ; If al is equal to 0, goto end
    int 0x10
    inc di
    jmp .loop
end:
    pop di
    pop eax
    ret

bits 32
init_pm:
    mov ax, GDT_DATA ; Load all segments except cs with data segment
    mov ds, ax
    mov ss, ax
    mov es, ax
    mov fs, ax
    mov gs, ax

    jmp $


GDT:
    .Null:
        dq 0
    .Code:
        dw 0xffff    ; segment limit, bits 0-15
        dw 0x0000    ; segment base, bits 0-15
        db 0x00      ; segment base, bits 16-23
        db 10011010b ; flags (8 bits)
        db 11001111b ; flags (4 bits) + limit, bits 16-19
        db 0x00      ; segment base, bits 24-31
    .Data:
        dw 0xffff
        dw 0x0000
        db 0x00
        db 10010010b
        db 11001111b
        db 0x00
    .Pointer:
        dw GDT.Pointer - GDT - 1
        dd GDT


DRIVE: db 0
DISK_ERROR: db "Disk read error", 0
SECTORS_ERROR: db "Incorrect number of sectors read", 0

times 510 - ($ - $$) db 0 ; Fill with 510 zeros minus the size of the previous code
dw 0xaa55 ; The magic number