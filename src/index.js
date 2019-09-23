document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form")

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newTaskNode = document.createElement('li')
    const taskList = document.getElementById('tasks')
    newTaskNode.textContent = e.target[0].value;
    taskList.appendChild(newTaskNode)
    form.reset();
  });
});
