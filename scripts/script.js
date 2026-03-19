const container = document.getElementById('projects');

function addProject() {
  const name = document.getElementById('name').value;
  const link = document.getElementById('link').value;
  const task = document.getElementById('task').value;
  const todo = document.getElementById('todo').value;

  const card = document.createElement('div');
  card.className = 'card';

  card.innerHTML = `
      <div class="row">
        <div><b>${name}</b></div>
        <div><a href="${link}" target="_blank">Сайт</a></div>
        <div><a href="${task}" target="_blank">Задание</a></div>
        <div>${todo}</div>
      </div>
      <div class="row hidden">
        <div>Доп. строка 1</div>
        <div>Доп. строка 2</div>
        <div>Доп. строка 3</div>
        <div>Доп. строка 4</div>
      </div>
    `;

  card.addEventListener('click', () => {
    card.classList.toggle('active');
  });

  container.appendChild(card);
}