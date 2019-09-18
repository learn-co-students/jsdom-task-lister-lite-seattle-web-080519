document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("create-task-form").addEventListener("submit", event => {
    event.preventDefault();
    let task = event.target["new-task-description"].value;
    let li = document.createElement("LI")
    li.innerHTML = task
    document.getElementById("tasks").appendChild(li);
  });
  // your code here
});
