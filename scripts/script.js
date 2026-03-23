const container = document.getElementById('projects');

let projects = JSON.parse(localStorage.getItem('projects')) || [];

function saveProjects() {
  localStorage.setItem('projects', JSON.stringify(projects));
}

function renderProjects() {
  container.innerHTML = '';

  projects.forEach((proj, index) => {
    const card = document.createElement('div');
    card.className = 'card' + (proj.done ? 'done' : '');


    card.innerHTML = `
      <div class="row">
        <div><b>${proj.name}</b></div>
        <div><a href="${proj.link}" target="_blank">Сайт</a></div>
        <div><a href="${proj.task}" target="_blank">Задание</a></div>
        <div>${proj.todo}</div>
      </div>
      <div class="actions">
      <label>
        <input type="checkbox" ${proj.done ? 'checked' : ''} onclick="toggleDone(${index})"> Сделано
      </label>
       <button onclick="editProject(${index})">Редактировать</button>
       <button onclick="deleteProject(${index})">Удалить</button>
      </div>
      <div class="row hidden" id="edit-${index}">
       <input value="${proj.name}" id="name-${index}">
       <input value="${proj.link}" id="link-${index}">
       <input value="${proj.task}" id="task-${index}">
       <textarea id="todo-${index}">${proj.todo}</textarea>
       <button onclick="saveEdit(${index})">Сохранить</button>
      </div>
    `;

    card.addEventListener('click', (e) => {
      if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'INPUT') {
        card.classList.toggle('active');
      }
    });

    container.appendChild(card);

  });
}

function addProject() {
  const name = document.getElementById('name').value;
  const link = document.getElementById('link').value;
  const task = document.getElementById('task').value;
  const todo = document.getElementById('todo').value;

  const newProject = { name, link, task, todo, done: false };

  projects.push(newProject);
  saveProjects();
  renderProjects();

  document.getElementById('name').value = '';
  document.getElementById('link').value = '';
  document.getElementById('task').value = '';
  document.getElementById('todo').value = '';

}

function toggleDone(index) {
  projects[index].done = !projects[index].done;
  saveProjects();
  renderProjects();
}

function editProject(index) {
  const el = document.getElementById(`edit-${index}`);
  el.classList.toggle('hidden');
}

function saveEdit(index) {
  projects[index] = {
    ...projects[index],
    name: document.getElementById(`name-${index}`).value,
    link: document.getElementById(`link-${index}`).value,
    task: document.getElementById(`task-${index}`).value,
    todo: document.getElementById(`todo-${index}`).value
  };
  saveProjects();
  renderProjects();
}

function deleteProject(index) {
  projects.splice(index, 1);
  saveProjects();
  renderProjects();
}

renderProjects();