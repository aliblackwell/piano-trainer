const noteDiv = document.querySelector('.note')
const timer = 3000

const notes = ["A","B","C","D","E","F","G"]

setInterval(() => {
  let note = notes[Math.floor(Math.random() * notes.length)];
  noteDiv.innerHTML = note
},timer)