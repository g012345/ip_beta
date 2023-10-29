schedule_data = []
current_group = None

with open('расписание2kortom1stlb.txt', 'r', encoding='utf-8') as file:
    for line in file:
        line = line.strip()
        if line:
            schedule_data.append(line)

group_schedules = {}
for item in schedule_data:
    if "-" in item:
        current_group = item
        group_schedules[current_group] = []
    else:
        group_schedules[current_group].append(item)

