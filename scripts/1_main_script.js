const newNoteBtn = document.querySelector('.newNoteBtn');
// const mainContent = document.querySelector('.mainContent');
const resultContent = document.querySelector('.resultContent');

const generateNote = (text = '') => {
   const result = document.createElement('div');
   result.classList.add('result');
   result.classList.add('clicking');

   const htmlData = `<div class="operation">
                        <div class="deleteNote">Delete</div>
                        <div class="editNote">Edit</div>
                    </div>
                    <div class="displayNoteOverlay ${
                       text ? '' : 'hidden'
                    }"></div>
                    <textarea class='${
                       text ? 'hidden' : ''
                    }' spellcheck='true'></textarea>`;


  
   result.insertAdjacentHTML('afterbegin', htmlData);
   resultContent.appendChild(result);
   result.style.animation=`creation 1s ease forwards`;
                  
   const deleteNote = result.querySelector('.deleteNote');
   const editNote = result.querySelector('.editNote');
   const displayNoteOverlay = result.querySelector('.displayNoteOverlay');
   const textarea = result.querySelector('textarea');

   const updateLSData = () => {
      const textAreaData = document.querySelectorAll('textarea');
      const arrayData = [];

      textAreaData.forEach((element) => {
         return arrayData.push(element.value);
      });

      localStorage.setItem('notesData', JSON.stringify(arrayData));
   };

   editNote.addEventListener('click', () => {
      textarea.classList.toggle('hidden');
      displayNoteOverlay.classList.toggle('hidden');
      updateLSData();
   });

   textarea.addEventListener('change', (event) => {
      const displayValue = event.target.value;
      displayNoteOverlay.innerHTML = displayValue;
      updateLSData();
   });

   deleteNote.addEventListener('click', () => {
      result.style.animation=`deletion 1s ease forwards`;
      result.addEventListener('animationend',()=>{
         result.remove();
         updateLSData();
      })
   });
   textarea.value = text;
   displayNoteOverlay.innerHTML = text;
};
const notesData = JSON.parse(localStorage.getItem('notesData'));

if (notesData) {
   notesData.forEach((element) => {
      generateNote(element);
   });
}

newNoteBtn.addEventListener('click', () => generateNote());
