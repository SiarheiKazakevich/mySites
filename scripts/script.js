const container = document.getElementById('projects');

let projects = JSON.parse(localStorage.getItem('projects')) || [];

function saveProjects() {
  localStorage.setItem('projects', JSON.stringify(projects));
}

function renderProjects() {
  container.innerHTML = '';

  projects.forEach((proj, index) => {
    const card = document.createElement('div');
    card.className = 'card';


    card.innerHTML = `
      <div class="row">
        <div><b>${proj.name}</b></div>
        <div><a href="${proj.link}" target="_blank">Сайт</a></div>
        <div><a href="${proj.task}" target="_blank">Задание</a></div>
        <div>${proj.todo}</div>
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

  });
}

function addProject() {
  const name = document.getElementById('name').value;
  const link = document.getElementById('link').value;
  const task = document.getElementById('task').value;
  const todo = document.getElementById('todo').value;

  const newProject = { name, link, task, todo };

  projects.push(newProject);
  saveProjects();
  renderProjects();

  document.getElementById('name').value = '';
  document.getElementById('link').value = '';
  document.getElementById('task').value = '';
  document.getElementById('todo').value = '';

}

renderProjects();