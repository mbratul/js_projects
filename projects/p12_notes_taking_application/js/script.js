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
  main.appendChild(note);
}

function saveNotes() {
  const allNotes = document.querySelectorAll(".note textarea");
  const data = Array.from(allNotes).map((note) => note.value);
  console.log(allNotes, data);
  allNotes.values = " ";
}
