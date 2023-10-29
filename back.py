with open('расписание2kortom1stlb.txt', 'r', encoding='utf-8') as file:
    lines = file.readlines()
    non_empty_lines = [line for line in lines if line.strip()]

with open('расписание2kortom1stlb.txt', 'w', encoding='utf-8') as file:
    file.writelines(non_empty_lines)

print("Пустые строки удалены из файла 'расписание.txt'.")
