### flow-statistic

# >>> deprecated

Please, use the `dsm` node instead: [Flow statistics](Replacement for [node-red-contrib-flow-statistics](https://github.com/cflurin/node-red-contrib-flow-statistics)

![statistic](https://user-images.githubusercontent.com/5056710/47963853-e7191480-e031-11e8-942a-a0bd164ed2ca.png)

### Configuration

```
{
    "currentState": "step1",
    "states": {
        "step1": {
            "evaluate": "step2"
        },
        "step2": {
            "sort": "step1"
        }
    },
    "methods": {
        "evaluate": [
            "sm.flow_stat = {};",
            "sm.flow_stat.Total = 0;",
            "RED.nodes.eachNode(function(n) {",
            "   if (typeof sm.flow_stat[n.type] === 'undefined') {",
            "       sm.flow_stat[n.type] = 1;",
            "   } else {",
            "       sm.flow_stat[n.type]++;",
            "   }",
            "   if (n.type !== 'tab') {",
            "       sm.flow_stat.Total++;",
            "   }",
            "});",
            "resume('sort', msg);",
            "output = false;"
        ],
        "sort": [
            "const sorted = {};",
            "Object.keys(sm.flow_stat).sort().forEach(function(key) {",
            "   sorted[key] = sm.flow_stat[key];",
            "});",
            "msg.payload = sorted;"
        ],        
        "status": {
            "fill": "blue",
            "shape": "dot",
            "text": {
                "get": "'Total ' + sm.flow_stat.Total;"
            }
        }
    }
}

```

### Flow

```
[{"id":"686c4721.8bf198","type":"inject","z":"85cbcdb3.ef251","name":"evaluate","topic":"evaluate","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":100,"y":1180,"wires":[["cc449163.c20dc"]]},{"id":"cc449163.c20dc","type":"dsm","z":"85cbcdb3.ef251","name":"statistic","sm_config":"{\n    \"currentState\": \"step1\",\n    \"states\": {\n        \"step1\": {\n            \"evaluate\": \"step2\"\n        },\n        \"step2\": {\n            \"sort\": \"step1\"\n        }\n    },\n    \"methods\": {\n        \"evaluate\": [\n            \"sm.flow_stat = {};\",\n            \"sm.flow_stat.Total = 0;\",\n            \"RED.nodes.eachNode(function(n) {\",\n            \"   if (typeof sm.flow_stat[n.type] === 'undefined') {\",\n            \"       sm.flow_stat[n.type] = 1;\",\n            \"   } else {\",\n            \"       sm.flow_stat[n.type]++;\",\n            \"   }\",\n            \"   if (n.type !== 'tab') {\",\n            \"       sm.flow_stat.Total++;\",\n            \"   }\",\n            \"});\",\n            \"resume('sort', msg);\",\n            \"output = false;\"\n        ],\n        \"sort\": [\n            \"const sorted = {};\",\n            \"Object.keys(sm.flow_stat).sort().forEach(function(key) {\",\n            \"   sorted[key] = sm.flow_stat[key];\",\n            \"});\",\n            \"msg.payload = sorted;\"\n        ],        \n        \"status\": {\n            \"fill\": \"blue\",\n            \"shape\": \"dot\",\n            \"text\": {\n                \"get\": \"'Total ' + sm.flow_stat.Total;\"\n            }\n        }\n    }\n}\n","x":250,"y":1180,"wires":[["657d81fb.05084"]]},{"id":"657d81fb.05084","type":"debug","z":"85cbcdb3.ef251","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","x":410,"y":1180,"wires":[]}]
```)

A simple node that outputs flow-statistics:

* node-types
* node-quantity

###  Example

![fow-statistics](https://user-images.githubusercontent.com/5056710/29739495-b004a160-8a3f-11e7-9cd2-3fbfc1ff942d.jpeg)

You can import the corresponding flow:
```
[
    {
        "id": "2a8bb9bd.7806f6",
        "type": "flow-statistics",
        "z": "eb273ea8.d5d53",
        "name": "",
        "x": 300,
        "y": 60,
        "wires": [
            [
                "f8c7193.19d86e8"
            ]
        ]
    },
    {
        "id": "f8c7193.19d86e8",
        "type": "debug",
        "z": "eb273ea8.d5d53",
        "name": "",
        "active": true,
        "console": "false",
        "complete": "false",
        "x": 530,
        "y": 60,
        "wires": []
    },
    {
        "id": "ea41b5ea.44d918",
        "type": "inject",
        "z": "eb273ea8.d5d53",
        "name": "",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "",
        "crontab": "",
        "once": false,
        "x": 100,
        "y": 60,
        "wires": [
            [
                "2a8bb9bd.7806f6"
            ]
        ]
    }
]
```
A JavaScript object is displayed in the sidebar debug tab.

```sh
{
	"Total": 590,
	"catch": 8,
	"change": 16,
	"comment": 33,
	"debug": 65,
	"delay": 3,
	"e-mail": 1,
	"exec": 1,
	"file": 2,
	"file in": 1,
	"flow-statistics": 1,
	"function": 62,
	"http in": 2,
	"http request": 4,
	"http response": 2,
	"hue-bridge": 1,
	"hue-set": 5,
	"hue-state": 1,
	"inject": 79,
	"join": 1,
	"json": 12,
	"link in": 32,
	"link out": 45,
	"mqtt in": 22,
	"mqtt out": 22,
	"mqtt-broker": 7,
	"netatmo-config-node": 1,
	"netatmo-dashboard": 1,
	"profile": 5,
	"ramp-thermostat": 7,
	"rbe": 12,
	"rpi-dht22": 1,
	"rpi-ds18b20": 1,
	"schedex": 3,
	"subflow": 3,
	"subflow:12064036.6833f": 32,
	"subflow:c72ea31a.28c6e": 5,
	"subflow:db8d1db3.23b4e": 3,
	"switch": 19,
	"tab": 7,
	"template": 17,
	"time-range-switch": 4,
	"trigger": 6,
	"ui_chart": 10,
	"ui_group": 4,
	"ui_slider": 2,
	"ui_switch": 4,
	"ui_tab": 2,
	"ui_text": 16,
	"wunderground": 1,
	"zwave-controller": 1,
	"zwave-in": 1,
	"zwave-out": 1
}
```
