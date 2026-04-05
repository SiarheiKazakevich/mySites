const container = document.getElementById('projects');

//let projects = JSON.parse(localStorage.getItem('projects')) || [];
let projects = [];

async function loadProjects() {
  const res = await fetch('projects.json');
  projects = await res.json();
  renderProjects();

}



let dragIndex = null;

function saveProjects() {
  localStorage.setItem('projects', JSON.stringify(projects));
}

function renderProjects() {
  container.innerHTML = '';

  const search = document.getElementById('search').value.toLowerCase();
  const status = document.getElementById('statusFilter').value;

  projects.filter(p => {
    const matchesSearch =
      (p.name || '').toLowerCase().includes(search) ||
      (p.todo || '').toLowerCase().includes(search);

    const matchesStatus =
      status === 'all' ||
      (status === 'done' && p.done) ||
      (status === 'active' && !p.done);

    return matchesSearch && matchesStatus;
  })
    .forEach((proj, index) => {
      const realIndex = projects.indexOf(proj);

      const card = document.createElement('div');
      card.className = 'card ' + (proj.done ? 'done' : '');
      card.draggable = true;


      card.innerHTML = `
      <div class="row">
        <div><b>${proj.name}</b></div>
        <div><a href="${proj.link}" target="_blank">Сайт</a></div>
        <div><a href="${proj.task}" target="_blank">Задание</a></div>
        <div>${proj.todo}</div>
      </div>
      <div class="actions">
      <label>
        <input type="checkbox" ${proj.done ? 'checked' : ''} onclick="toggleDone(${realIndex})"> Сделано
      </label>
       <button onclick="editProject(${realIndex})">Редактировать</button>
       <button onclick="deleteProject(${realIndex})">Удалить</button>
      </div>
      <div class="row hidden" id="edit-${realIndex}">
       <input value="${proj.name}" id="name-${realIndex}">
       <input value="${proj.link}" id="link-${realIndex}">
       <input value="${proj.task}" id="task-${realIndex}">
       <textarea id="todo-${realIndex}">${proj.todo}</textarea>
       <button onclick="saveEdit(${realIndex})">Сохранить</button>
      </div>
    `;

      // add dragDrop
      card.addEventListener('dragstart', () => {
        dragIndex = realIndex;
        card.classList.add('dragging');
      });

      card.addEventListener('dragend', () => {
        card.classList.remove('dragging');
      });

      card.addEventListener('dragover', (e) => {
        e.preventDefault();
      });

      card.addEventListener('drop', () => {
        if (dragIndex === null || dragIndex === index) return;

        const draggedItem = projects[dragIndex];
        projects.splice(dragIndex, 1);
        projects.splice(realIndex, 0, draggedItem);

        saveProjects();
        renderProjects();

      });






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
  if (el) el.classList.toggle('hidden');
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

//renderProjects();
loadProjects();