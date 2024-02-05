import requests
from bs4 import BeautifulSoup
import sqlite3
import pandas as pd

def fetch_html_content(url):
    response = requests.get(url)
    if response.status_code == 200:
        return response.text
    else:
        print(f"Failed to retrieve the webpage. Status code: {response.status_code}")
        return None

def parse_html(html_content):
    output_data = ""

    soup = BeautifulSoup(html_content, 'html.parser')
    div_containers = soup.find_all('figure', class_='')

    for div_container in div_containers:
        print(div_container)
        # table = div_container.find('table')
        # if table:
        #     rows = table.find_all('tr')
            
        #     for row in rows:
        #         #Extract the first cell (column) of each row
                
        #         first_cell = row.find('td')  # Assuming the first cell is a <td> tag
        #         if first_cell:
        #             #Extract the link from the <a> tag within the first cell
        #             link = first_cell.find('a')
        #             if link:
        #                 href = link.get('href')
        #                 output_data+= href+"^"
        # else:
        #     print("No table found")

    return output_data

def main():
    url = 'https://graciousquotes.com/beyonce/'
    html_content = fetch_html_content(url)

    # if html_content:
    #     links = parse_html(html_content)
    #     output_list = links.split("^")
        
    #     df = pd.DataFrame(output_list,columns=['spellLink'])
        
    #     df.drop(df.index[-1], inplace=True)
    #     conn = sqlite3.connect('DND.db')
        
    #     df.to_sql('SpellLinks',conn,index=False,if_exists='append')

    #     # Commit the changes to the database
    #     conn.commit()

    #     # Close the connection to the database
    #     conn.close()


if __name__ == "__main__":
    main()
