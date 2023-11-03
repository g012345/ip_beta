import requests
from bs4 import BeautifulSoup

<<<<<<< HEAD
url = "https://rsp.chemk.org/2korp/tomorrow.htm"
response = requests.get(url)

if response.status_code == 200:
    response.encoding = "cp1251"
    soup = BeautifulSoup(response.text, "html.parser")
=======
url = "https://rsp.chemk.org/4korp/today.htm"

response = requests.get(url)

if response.status_code == 200:
    response.encoding = "cp1251" 

    soup = BeautifulSoup(response.text, "html.parser")

>>>>>>> c9d2eab4562ec31b572d152e7cf31504dbb6fdf2
    tr_elements = soup.find_all("tr")

    with open("расписание2kortom1stlb.txt", "w", encoding="utf-8") as file:
        for tr in tr_elements[2:]:
<<<<<<< HEAD
            td_elements = tr.find_all("td")
            if len(td_elements) >= 6:
                file.write(td_elements[0].get_text(strip=True) + "\n")
                file.write(td_elements[1].get_text(strip=True) + "\n")
                file.write(td_elements[2].get_text(strip=True) + "\n")
else:
    print("Ошибка при получении страницы. Код состояния:", response.status_code)

with open('расписание2kortom1stlb.txt', 'r', encoding='utf-8') as file:
    lines = file.readlines()
    non_empty_lines = [line for line in lines if line.strip()]

with open('расписание2kortom1stlb.txt', 'w', encoding='utf-8') as file:
    file.writelines(non_empty_lines)
=======
            td_elements = tr.find_all("td")  
            if len(td_elements) >= 0:
                file.write(td_elements[0].get_text(strip=True) + "\n")
else:
    print("Ошибка при получении страницы. Код состояния:", response.status_code)
>>>>>>> c9d2eab4562ec31b572d152e7cf31504dbb6fdf2
