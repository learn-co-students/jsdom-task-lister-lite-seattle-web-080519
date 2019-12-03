document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("create-task-form")
    .addEventListener("submit", event => clickSubmit(event));
});

let counter = 1;
let notesArray = [];
let editMode = false;
let noteId = null;

const newTaskDescription = document.getElementById("new-task-description");
const priority = document.getElementById("priority-select");
const date = document.getElementById("date");
const submitButton = document.getElementById("create-task-form")[3];

function clickSubmit(event) {
  event.preventDefault();
  const note = {
    id: noteId ? noteId : counter,
    text: newTaskDescription.value,
    priority: priority.value,
    date: date.value,
    priorityValue: priority.selectedIndex
  };
  if (noteId && editMode) {
    populateNote(note);
  } else {
    notesArray.push(note);
    counter++;
  }
  clearSubmitForm();
  loopNotes(notesArray);
}

function populateNote(note) {
  notesArray.map(noteIterator => {
    if (noteIterator.id === noteId) {
      const index = notesArray.indexOf(noteIterator);
      notesArray[index] = note;
    }
  });
}

function loopNotes(notesArray) {
  document.getElementById("tasks").innerHTML = "";
  const newNotesArray = notesArray.slice();
  newNotesArray.sort(function(a, b) {
    return a.priorityValue - b.priorityValue;
  });
  newNotesArray.forEach(note => appendOneNote(note));
}

function appendOneNote(note) {
  const tasksUl = document.getElementById("tasks");

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.innerText = `${note.text} - ${note.priority} - ${note.date}`;
  span.setAttribute("id", note.id);
  span.setAttribute("class", note.priority);

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.addEventListener("click", () => deleteNote(note));

  const editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.addEventListener("click", () => editNote(note));

  li.appendChild(span);
  li.appendChild(deleteBtn);
  li.appendChild(editBtn);

  tasksUl.appendChild(li);
}

function deleteNote(note) {
  const deletedNote = document.getElementById(note.id);
  deletedNote.parentNode.remove();
  return (notesArray = notesArray.filter(noteIterator => {
    return noteIterator.id !== note.id;
  }));
}

function editNote(note) {
  editMode = true;
  newTaskDescription.value = note.text;
  priority.value = note.priority;
  date.value = note.date;
  noteId = note.id;
  submitButton.value = "Edit A Task";
}

function clearSubmitForm() {
  newTaskDescription.value = "";
  priority.value = "";
  date.value = "";
  editMode = false;
  noteId = null;
  submitButton.value = "Create A Task";
}
