import requests
import json

def save_to_file(data):
    with open('data.json', 'w', encoding='utf-8') as f:
        f.write(json.dumps(data, ensure_ascii=False))

ALL_LOCATIONS_1 = 'https://iot.hamburg.de/v1.0/Things?$filter=Datastreams/properties/serviceName%20eq%20%27HH_STA_StadtRad%27&$orderby=id&$count=true&$expand=Locations' 
ALL_LOCATIONS_2 = 'https://iot.hamburg.de/v1.0/Things?$skip=100&$filter=%28Datastreams%2Fproperties%2FserviceName+eq+%27HH_STA_StadtRad%27%29&$expand=Locations&$orderby=id+asc&$count=true'
ALL_LOCATIONS_3 = 'https://iot.hamburg.de/v1.0/Things?$skip=200&$filter=%28Datastreams%2Fproperties%2FserviceName+eq+%27HH_STA_StadtRad%27%29&$expand=Locations&$orderby=id+asc&$count=true'

LIST_OF_URLS = [ALL_LOCATIONS_1, ALL_LOCATIONS_2, ALL_LOCATIONS_3]

LIST_OF_ALL_LOCATIONS = []

for url in LIST_OF_URLS:
    r = requests.get(url).json()
    values = r["value"]
    for location in values:
        LIST_OF_ALL_LOCATIONS.append(location)

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

    historical_data = []    
    isNextLink = True

    while(isNextLink):
        r = requests.get(extract_url).json()
        print(extract_url)
        for result in r["value"]:
            historical_data.append(result)
        if "@iot.nextLink" not in r.keys():
            isNextLink = False
        else:
            extract_url = r["@iot.nextLink"]

    obj_to_save = {
        "description" : description,
"thing_id" : thing_id,
"location_geometry" : location_geometry,
"data_stream_id" : data_stream_id,
"get_datastream_url" : get_datastream_url,
"historical_data" : historical_data
    }
    save_to_file(obj_to_save)







""" 
description
thing_id
location
dataStream_id
url_to_start_scrap : https://iot.hamburg.de/v1.0/Datastreams(5)/Observations?$skip=100&$select=phenomenonTime,result&$orderby=phenomenonTime+desc
if "@iot.nextLink" go next
"""