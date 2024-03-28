# EVA ICS Plugin for Visual Studio Code

The extension is used to generate code for [EVA ICS](https://www.eva-ics.com/).

## Requirements

* EVA ICS with [HMI
  service](https://info.bma.ai/en/actual/eva4/svc/eva-hmi.html) deployed

* For [Data Objects](https://info.bma.ai/en/actual/eva4/dobj.html): API key
  with admin or developer permissions

## Features supported

* Structure generation from data objects (Rust/C/C++)

* Hook generation for [EVA ICS WebEngine
  React](https://info.bma.ai/en/actual/eva-webengine-react/index.html)
  (JSX/TSX)

## Configuring

* Open Preferences (JSON): `Ctrl+Shift+P` -> `Preferences: Open Settings (JSON)`

* Add the following configuration:

```json
"evaics.apiUrl": "http://host:port",
"evaics.apiKey": "secretkey",
"evaics.DO_rustGeneratorConfig": {
  "binrw": "native",
  "box_arrays": 100,
  "derive_clone": true,
  "derive_copy": true,
  "derive_debug": true
}
```
Where:

* `evaics.apiUrl` - EVA ICS HMI URL (with no `/ui/` suffix)

* `evaics.apiKey` - API key with [admin or developer
  permissions](https://info.bma.ai/en/actual/eva4/aaa.html#access-control-list)

* `evaics.DO_rustGeneratorConfig` - [Rust generator
  configuration for Data
  Objects](https://info.bma.ai/en/actual/eva4/dobj.html#rust)

## Usage

Open the command palette: `Ctrl+Shift+P`

* Type `EVA ICS DO:` for data object functions

* Type `EVA ICS WER:` for EVA ICS WebEngine React functions

