import json

with open("output1.json","r") as file:
    data = json.load(file)
songs = []
for track in data["items"]:
    name=track['track']['name']
    albumImgLink = track["track"]["album"]["images"][1]['url']
    songAndLink = [name,albumImgLink]
    songs.append(songAndLink)

print(songs)
with open("songAndImg.json","w") as json_file:
    json.dump(songs,json_file)