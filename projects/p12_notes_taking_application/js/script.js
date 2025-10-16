"use strict";
const addBtn = document.querySelector("#add_btn");
const main = document.querySelector("#main");

addBtn.addEventListener("click", addNote);

function addNote() {
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `
        <div class="tool">
          <i class="fa-solid fa-floppy-disk" id="save_note"></i>
          <i class="fa-solid fa-trash" id="trash_note"></i>
        </div>
        <textarea name="" id=""></textarea>
        `;
  const saveNote = note.querySelector("#save_note");
  const trashNote = note.querySelector("#trash_note");
  const textareaNote = note.querySelector("textarea");

  saveNote.addEventListener("click", saveNotes);
  textareaNote.addEventListener("input", saveNotes);
  trashNote.addEventListener("click", function () {
    note.remove();
    saveNotes();
  });
  main.appendChild(note);
}

function saveNotes() {
  const allNotes = document.querySelectorAll(".note textarea");
  const data = Array.from(allNotes).map((note) => note.value);
  //console.log(allNotes, data);
  if (!data.length) {
    localStorage.removeItem(allNotes);
  } else {
    localStorage.setItem("notes", JSON.stringify(data));
  }
}

function loadNotes() {
  const lsNotes = JSON.parse(localStorage.getItem("notes"));
  if (lsNotes !== null) {
    lsNotes.forEach((noteText) => {
      addNote();
      const notes = document.querySelectorAll(".note textarea");
      const lastNote = notes[notes.length - 1];
      lastNote.value = noteText;
    });
  } else {
    addNote();
  }
}
loadNotes();
