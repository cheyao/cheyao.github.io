var APP_DATA = {
  "scenes": [
    {
      "id": "0-street",
      "name": "Street",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 1.3207005553944295,
        "pitch": 0.1487890724323293,
        "fov": 1.5469375240865706
      },
      "linkHotspots": [
        {
          "yaw": 0.8086333277362616,
          "pitch": 0.14917534932003917,
          "rotation": 0,
          "target": "2-pavement-front"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-terrase-down",
      "name": "Terrase down",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5323637075783223,
          "pitch": 0.05429042425014785,
          "rotation": 0,
          "target": "3-pavement-back"
        },
        {
          "yaw": -3.0704567239402483,
          "pitch": 0.005912558145112712,
          "rotation": 0,
          "target": "28-corridor-down-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-pavement-front",
      "name": "Pavement front",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.5034399811414438,
        "pitch": 0.06083462173374343,
        "fov": 1.5469375240865706
      },
      "linkHotspots": [
        {
          "yaw": -2.688717562140658,
          "pitch": 0.11980873327839525,
          "rotation": 0,
          "target": "0-street"
        },
        {
          "yaw": 0.49265156304531743,
          "pitch": 0.15012938017792443,
          "rotation": 0,
          "target": "3-pavement-back"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-pavement-back",
      "name": "Pavement back",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.06846180577968042,
          "pitch": 0.04102196480767262,
          "rotation": 0,
          "target": "1-terrase-down"
        },
        {
          "yaw": -0.9614994442407294,
          "pitch": -0.21837234153274387,
          "rotation": 0,
          "target": "21-stairs"
        },
        {
          "yaw": 1,
          "pitch": 0.4,
          "rotation": 0,
          "target": "4-yard-front"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-yard-front",
      "name": "Yard front",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3,
          "pitch": -0.2,
          "rotation": 0,
          "target": "3-pavement-back"
        },
        {
          "yaw": 0,
          "pitch": 0.2,
          "rotation": 0,
          "target": "5-yard-back"
        },
        {
          "yaw": 3.85,
          "pitch": 0,
          "rotation": 0,
          "target": "6-basemeent-corridor"
        }
        ],
      "infoHotspots": []
    },
    {
      "id": "5-yard-back",
      "name": "Yard back",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.5,
          "pitch": 0.1,
          "rotation": 0,
          "target": "4-yard-front"
        }
        ],
      "infoHotspots": []
    },
    {
      "id": "6-basemeent-corridor",
      "name": "Basement corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3,
          "pitch": 0.1,
          "rotation": 0,
          "target": "4-yard-front"
        },
        {
          "yaw": 1,
          "pitch": 0.1,
          "rotation": 0,
          "target": "7-basement-out"
        }
        ],
      "infoHotspots": []
    },
    {
      "id": "7-basement-out",
      "name": "Basement out",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.8,
          "pitch": 0.1,
          "rotation": 0,
          "target": "6-basemeent-corridor"
        },
        {
          "yaw": -0.8,
          "pitch": 0.1,
          "rotation": 0,
          "target": "8-basement-mid"
        }
        ],
      "infoHotspots": []
    },
    {
      "id": "8-basement-mid",
      "name": "Basement mid",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.5,
          "pitch": 0.1,
          "rotation": 0,
          "target": "7-basement-out"
        },
        {
          "yaw": 0.7,
          "pitch": 0.1,
          "rotation": 0,
          "target": "9-basement-in"
        }
        ],
      "infoHotspots": []
    },
    {
      "id": "9-basement-in",
      "name": "Basement in",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3,
          "pitch": 0.1,
          "rotation": 0,
          "target": "8-basement-mid"
        }
        ],
      "infoHotspots": []
    },
    {
      "id": "10-attic",
      "name": "Attic",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.17616040491849283,
          "pitch": 1.1449133416167836,
          "rotation": 0,
          "target": "14-side-up-2"
        },
        {
          "yaw": -1.9268825126230986,
          "pitch": -0.4666485019599076,
          "rotation": 0,
          "target": "11-attic-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-attic-2",
      "name": "Attic 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7745357148187662,
          "pitch": 0.8842568667000599,
          "rotation": 0,
          "target": "10-attic"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-salon-up",
      "name": "Salon up",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.29518814267450466,
          "pitch": 0.1909989875752398,
          "rotation": 0,
          "target": "20-terrase-up"
        },
        {
          "yaw": 3.122129814011645,
          "pitch": 0.16863882212384596,
          "rotation": 0,
          "target": "13-salon-up-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-salon-up-2",
      "name": "Salon up 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.6378205662716114,
          "pitch": 0.0884439926314986,
          "rotation": 0,
          "target": "12-salon-up"
        },
        {
          "yaw": -0.9018301985049391,
          "pitch": 0.17666344364478803,
          "rotation": 0,
          "target": "18-bedroom-up"
        },
        {
          "yaw": 0.29094873278661204,
          "pitch": 0.17508918282275054,
          "rotation": 0,
          "target": "19-corridor-up"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-side-up-2",
      "name": "Side up 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.315423201104103,
          "pitch": 0.11560500980206179,
          "rotation": 0,
          "target": "15-side-up"
        },
        {
          "yaw": 2.474124031506313,
          "pitch": -1.2564136925933447,
          "rotation": 0,
          "target": "10-attic"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-side-up",
      "name": "Side up",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "19-corridor-up"
        },
        {
          "yaw": 3.032706883904325,
          "pitch": 0.17173230961878794,
          "rotation": 0,
          "target": "14-side-up-2"
        },
        {
          "yaw": 3.113862869015625,
          "pitch": -0.49459497849905354,
          "rotation": 0,
          "target": "10-attic"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-shower-up",
      "name": "Shower up",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.26366494163144694,
          "pitch": 0.17815853507738666,
          "rotation": 0,
          "target": "19-corridor-up"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-bedroom-up-2",
      "name": "Bedroom up 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.5447634803529304,
        "pitch": 0.12294093670613115,
        "fov": 1.5469375240865706
      },
      "linkHotspots": [
        {
          "yaw": 0.06791262367927509,
          "pitch": 0.21286527901308006,
          "rotation": 0,
          "target": "19-corridor-up"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-bedroom-up",
      "name": "Bedroom up",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7814274748535368,
          "pitch": 0.14920914766503657,
          "rotation": 0,
          "target": "13-salon-up-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-corridor-up",
      "name": "Corridor up",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.034637784766403,
          "pitch": 0.2286869766784161,
          "rotation": 0,
          "target": "13-salon-up-2"
        },
        {
          "yaw": 2.985111937608039,
          "pitch": 0.18723125072347102,
          "rotation": 0,
          "target": "17-bedroom-up-2"
        },
        {
          "yaw": -2.0811909380096925,
          "pitch": 0.11045649690901627,
          "rotation": 0,
          "target": "16-shower-up"
        },
        {
          "yaw": -1.0894121671981232,
          "pitch": 0.12439855864146665,
          "rotation": 0,
          "target": "15-side-up"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-terrase-up",
      "name": "Terrase up",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.06350132917326867,
          "pitch": 0.718450514717448,
          "rotation": 0,
          "target": "21-stairs"
        },
        {
          "yaw": -2.0410784539133875,
          "pitch": 0.08816827744578859,
          "rotation": 0,
          "target": "12-salon-up"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-stairs",
      "name": "Stairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.3262764419035822,
          "pitch": 0.6005036207016321,
          "rotation": 0,
          "target": "3-pavement-back"
        },
        {
          "yaw": 3.1251134260695306,
          "pitch": -0.4253585720140691,
          "rotation": 0,
          "target": "20-terrase-up"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-corridor-down",
      "name": "Corridor down",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7842922735740903,
          "pitch": 0.20391415768657772,
          "rotation": 0,
          "target": "29-salon-down"
        },
        {
          "yaw": 0.14070238238901212,
          "pitch": 0.1747072196022721,
          "rotation": 0,
          "target": "25-bedroom-down"
        },
        {
          "yaw": -1.533235663974871,
          "pitch": 0.23409686875916869,
          "rotation": 0,
          "target": "24-salon-2-down"
        },
        {
          "yaw": 2.6702139623644836,
          "pitch": 0.137581214057505,
          "rotation": 0,
          "target": "23-shower-down"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-shower-down",
      "name": "Shower down",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.03837974920744891,
          "pitch": 0.20535965900044673,
          "rotation": 0,
          "target": "22-corridor-down"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-salon-2-down",
      "name": "Salon 2 down",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.16577291948446593,
          "pitch": 0.20016978864479462,
          "rotation": 0,
          "target": "22-corridor-down"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-bedroom-down",
      "name": "Bedroom down",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 2.4955776521395414,
        "pitch": -0.003946986061928115,
        "fov": 1.5469375240865706
      },
      "linkHotspots": [
        {
          "yaw": 2.8866708834409014,
          "pitch": 0.11408840129762865,
          "rotation": 0,
          "target": "22-corridor-down"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-wc-down",
      "name": "WC down",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.004271620526514752,
          "pitch": 0.09906650141932971,
          "rotation": 0,
          "target": "28-corridor-down-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-kitchen-down",
      "name": "Kitchen down",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7320897926219025,
          "pitch": 0.21701398467745037,
          "rotation": 0,
          "target": "30-bedroom-2-down"
        },
        {
          "yaw": 0.1857262481932196,
          "pitch": 0.01303599037151848,
          "rotation": 0,
          "target": "29-salon-down"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-corridor-down-2",
      "name": "Corridor down 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6803447903568038,
          "pitch": 0.00822530084268891,
          "rotation": 0,
          "target": "29-salon-down"
        },
        {
          "yaw": 2.388439559736767,
          "pitch": 0.12682088731181906,
          "rotation": 0,
          "target": "1-terrase-down"
        },
        {
          "yaw": 1.0211879096468248,
          "pitch": 0.3115996527459437,
          "rotation": 0,
          "target": "26-wc-down"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-salon-down",
      "name": "Salon down",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.653608220342136,
          "pitch": 0.011407607490871996,
          "rotation": 0,
          "target": "28-corridor-down-2"
        },
        {
          "yaw": 2.0623264561644543,
          "pitch": 0.11705645605557713,
          "rotation": 0,
          "target": "27-kitchen-down"
        },
        {
          "yaw": -0.7426988314680028,
          "pitch": 0.17833304334556388,
          "rotation": 0,
          "target": "22-corridor-down"
        },
        {
          "yaw": -0.06572638418143484,
          "pitch": 0.11249849934663203,
          "rotation": 0,
          "target": "25-bedroom-down"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-bedroom-2-down",
      "name": "Bedroom 2 down",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.019155221823876,
          "pitch": 0.079155950042896,
          "rotation": 0,
          "target": "27-kitchen-down"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Prague House",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
