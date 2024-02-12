GENIUS_API_TOKEN= '5Qg_zPgLisV5RxzdW4kysZTTcr4s9wFcuo4NA9cNConFVdJCheHOkZDhdIRoTys9'
import requests
from bs4 import BeautifulSoup
import json

from lyricsgenius import Genius

genius = Genius(GENIUS_API_TOKEN)
songTitles = []
artist=genius.search_artist("Beyonce",max_songs=20,get_full_info=False)
for song in artist.songs:
    
    songTitles.append(song.title)
    
with open("data.json","w") as json_file:
    json.dump(songTitles,json_file)


