const storedLinkText = localStorage.getItem('linkText');
const regexPattern = new RegExp(`${storedLinkText}[\\s\\S]*?-`, 'u');

const loadSchedule = () => {
  fetch('../rasp1.txt')
    .then(response => response.text())
    .then(data => {
      const match = data.match(regexPattern);
      if (match) {
        const extractedText = match[0];
        const filteredText = filterText(extractedText); 
        parseSchedule(filteredText); 
      } else {
        console.log('Совпадения не найдены.');
      }
    })
    .catch(error => console.error('Произошла ошибка:', error));
};

const filterText = (text) => {
  const lines = text.split('\n');
  const filteredLines = lines.filter(line => !line.includes('-'));
  return filteredLines.join('\n');
};

const parseSchedule = (data) => {
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
};

document.addEventListener('DOMContentLoaded', () => {
  const scheduleDiv = document.getElementById('schedule');

  scheduleDiv.addEventListener('click', event => {
    const clickedElement = event.target;
    if (clickedElement.id.startsWith('paragraph-')) {
      const paragraphContent = clickedElement.textContent;

      const groupPattern = /К\d+-\d+/u;
      const groupMatch = paragraphContent.match(groupPattern);
      
      const numberPattern = /\b\d{1,3}\b/;
      const match = paragraphContent.match(numberPattern);

      if (groupMatch) {
        alert(`Номер группы: ${groupMatch[0]}`);
      } else if (match && match[0].length === 3) {
        alert(`Номер кабинета: ${match[0]}`);
      } else if (match && match[0].length === 1) {
        alert(`Номер пары: ${match[0]}`);
      } else {
        alert(`Название пары: ${clickedElement.textContent}`);
      }
    }
  });
});

window.onload = loadSchedule;
