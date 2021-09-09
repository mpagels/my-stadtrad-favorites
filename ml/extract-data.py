import requests
import json


def save_to_file(data):
    with open("data.json", "w", encoding="utf-8") as f:
        f.write(json.dumps(data, ensure_ascii=False))


def fetch_data(start_url):

    extract_url = start_url

    data = []
    is_next_link = True

    while is_next_link:
        r = requests.get(extract_url).json()
        print(extract_url)
        for result in r["value"]:
            data.append(result)
        if "@iot.nextLink" not in r.keys():
            is_next_link = False
        else:
            extract_url = r["@iot.nextLink"]

    return data


ALL_LOCATIONS = "https://iot.hamburg.de/v1.0/Things?$filter=Datastreams/properties/serviceName%20eq%20%27HH_STA_StadtRad%27&$orderby=id&$count=true&$expand=Locations"

LIST_OF_ALL_LOCATIONS = fetch_data(ALL_LOCATIONS)

# save_to_file(LIST_OF_ALL_LOCATIONS)

for location in LIST_OF_ALL_LOCATIONS[0:1]:
    description = location["description"]
    thing_id = location["@iot.id"]
    location_geometry = location["Locations"][0]["location"]["geometry"]["coordinates"]
    get_datastream_url = f"https://iot.hamburg.de/v1.0/Things({thing_id})/Datastreams"

    r = requests.get(get_datastream_url).json()
    data_stream_obj = r["value"][0]
    data_stream_id = data_stream_obj["@iot.id"]

    extract_url = f"https://iot.hamburg.de/v1.0/Datastreams({data_stream_id})/Observations?$select=phenomenonTime,result&$orderby=phenomenonTime+desc"

    historical_data = fetch_data(extract_url)

    obj_to_save = {
        "description": description,
        "thing_id": thing_id,
        "location_geometry": location_geometry,
        "data_stream_id": data_stream_id,
        "get_datastream_url": get_datastream_url,
        "historical_data": historical_data,
    }
    save_to_file(obj_to_save)
