import json

import json

# Open the JSON file
with open('output.json', 'r') as file:
    # Read the JSON data
    data = json.load(file)

# Close the file (automatically done by the 'with' statement)

# Now you can use the 'data' variable, which contains the JSON data as a Python object
songs = []
for track in data['items']:
    name = track["track"]['name']
    id = track['track']['id']
    song = [name]
    songs.append(name)

print(songs)

    