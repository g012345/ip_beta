let storedLinkText = localStorage.getItem('linkText');
let nextlink = localStorage.getItem('nextContent');
console.log(storedLinkText)
console.log(nextlink)
function loadSchedule() {
    fetch('../rasp.txt')
      .then(response => response.text())
      .then(data => {
        const filteredData = filterScheduleData(data, storedLinkText, nextlink);
        parseSchedule(filteredData);
      })
      .catch(error => console.error('Произошла ошибка:', error));
  }
  
  function filterScheduleData(data, startGroup, endGroup) {
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
  
  function parseSchedule(data) {
    const scheduleDiv = document.getElementById('schedule');
    const lines = data.split('\n');
  
    for (let line of lines) {
      if (line.trim() === '') {
        scheduleDiv.appendChild(document.createElement('br'));
      } else {
        const p = document.createElement('p');
        p.textContent = line;
        scheduleDiv.appendChild(p);
      }
    }
  }
  
  window.onload = loadSchedule;
  