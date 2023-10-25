import requests
from bs4 import BeautifulSoup

url = "https://rsp.chemk.org/4korp/today.htm"

response = requests.get(url)

if response.status_code == 200:
    response.encoding = "cp1251" 

    soup = BeautifulSoup(response.text, "html.parser")

    tr_elements = soup.find_all("tr")

    with open("расписание2kortom1stlb.txt", "w", encoding="utf-8") as file:
        for tr in tr_elements[2:]:
            td_elements = tr.find_all("td")  
            if len(td_elements) >= 0:
                file.write(td_elements[0].get_text(strip=True) + "\n")
else:
    print("Ошибка при получении страницы. Код состояния:", response.status_code)