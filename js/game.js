var player = {
    money: 10,
    firstDem: 0,
    firstPrice: 10,
    firstPow: 2,
    firstMulti: 1
};

function updateMoney() {
    document.getElementById("money").innerHTML = "Money: " + player.money;
};

function updateMulti() {
    document.getElementById("firstMulti").innerHTML = "Multiplyer: " + player.firstMulti + "x"
};

function updateDemension() {
    document.getElementById("first").innerHTML = player.firstDem;
};

function updatePrice() {
    document.getElementById("firstPrice").innerHTML = "Price: " + player.firstPrice;
};

function updateAll() {
    updateDemension();
    updateMoney();
    updatePrice();
    updateMulti();
};

function buyDim(dim) {
    if (dim = 1 && player.firstPrice <= player.money) {
        player.firstDem += 1;
        player.money -= player.firstPrice;
        if (player.fistDem % 10 == 0) {
            player.firstPrice *= player.firstPow;
            player.firstMulti *= 2
        };
    };
    updateAll();
};

function buyMax(dim) {
    if (dim = 1) {
        buy = 10 - player.firstDem % 10;
        if (!(buy * player.firstPrice >= player.money)) {
            player.firstDem += buy;
            player.money -= player.firstPrice * buy;
            player.firstPrice *= player.firstPow;
            player.firstMulti *= 2
        };
    };
    updateAll();
};

setInterval(function() {
    player.money += player.firstDem * player.firstMulti;
    updateAll();
}, 1000);
