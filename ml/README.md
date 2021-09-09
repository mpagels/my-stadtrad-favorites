# iot.hamburg.de scrapper

This script extract historical data from every StadtRAD station from iot.hamburg.de

## Get started

- add a virtual environment to the project

```bash
python -m venv venv
```

- activate it (linux command)

```bash
source venv/bin/activate
```

- install requirements (when in root of project)

```
pip install -r ml/requirements.txt
```

- cd into `ml` folder
- run the script

```
python extract-data.py
```

- right now the script extracts just one station and saves the data into `data.json` in the `ml` folder
