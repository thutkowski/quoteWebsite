import requests

import base64
import requests

client_id = 'ec0109873c214fd6abbe5ae7c70fd755'
client_secret = 'ab9a0ecc1b38434182571c64644a4690'

# Encode client_id and client_secret to base64
encoded_auth = base64.b64encode(f"{client_id}:{client_secret}".encode()).decode()

auth_options = {
    'url': 'https://accounts.spotify.com/api/token',
    'headers': {
        'Authorization': f'Basic {encoded_auth}'
    },
    'data': {
        'grant_type': 'client_credentials'
    }
}

# Send POST request
response = requests.post(**auth_options)

# Check if the request was successful (status code 200)
if response.status_code == 200:
    # Extract the access token from the response body
    token = response.json()['access_token']
    print(token)
else:
    # Handle errors
    print(f"Error: {response.status_code}, {response.text}")
