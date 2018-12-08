### flow-statistic

# >>> deprecated

Please, use the `dsm` node instead: [Flow statistics](https://github.com/cflurin/node-red-contrib-dsm/wiki/Flow-statistics)

A simple node that outputs flow-statistics:

* node-types
* node-quantity

###  Example

![fow-statistics](https://user-images.githubusercontent.com/5056710/29739495-b004a160-8a3f-11e7-9cd2-3fbfc1ff942d.jpeg)

You can import the corresponding flow:
```
[{"id":"ce227c1f.85a53","type":"flow-statistics","z":"44d3f52b.35d17c","name":"","x":360,"y":100,"wires":[["8052547b.4205d8"]]},{"id":"8052547b.4205d8","type":"debug","z":"44d3f52b.35d17c","name":"","active":true,"console":"false","complete":"false","x":590,"y":100,"wires":[]},{"id":"c33dc1e8.5f447","type":"inject","z":"44d3f52b.35d17c","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":160,"y":100,"wires":[["ce227c1f.85a53"]]}]
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
