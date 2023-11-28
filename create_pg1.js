let storedLinkText = localStorage.getItem('linkText');
let nextlink = localStorage.getItem('nextContent');
console.log(storedLinkText)
console.log(nextlink)
const loadSchedule=()=>{
    fetch('../rasp1.txt')
      .then(response => response.text())
      .then(data => {
        const filteredData = filterScheduleData(data, storedLinkText, nextlink);
        parseSchedule(filteredData);
      })
      .catch(error => console.error('Произошла ошибка:', error));
  }
  
const filterScheduleData = (data, startGroup, endGroup)=>{
    const lines = data.split('\n');
    let filteredData = '';
    let isGroupData = false;
  
    for (let line of lines) {
      if (line.trim() === startGroup) {
        isGroupData = true;
      }
  
      if (isGroupData) {
        if (line.trim() === endGroup) {
          isGroupData = false;
        } else {
          filteredData += line + '\n';
        }
      }
    }
  
    return filteredData;
  }
  
const parseSchedule=(data)=>{
  const scheduleDiv = document.getElementById('schedule');
  const lines = data.split('\n');

  let paragraphCount = 0;

  for (let line of lines) {
    if (line.trim() === '') {
      scheduleDiv.appendChild(document.createElement('br'));
      paragraphCount = 0; 
    } else {
      const p = document.createElement('p');
      paragraphCount++;
      p.textContent = line;
      p.id = `paragraph-${paragraphCount}`; 
      scheduleDiv.appendChild(p);
    }
  }
}
  
  window.onload = loadSchedule;