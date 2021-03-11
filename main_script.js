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

  setTimeout(()=>{
   result.style.opacity = 1;
   result.style.transform="translate(0rem)";
  },50)
  
   result.insertAdjacentHTML('afterbegin', htmlData);
   resultContent.appendChild(result);

   // result.classList.toggle('clicking-active');
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
      result.remove();
      updateLSData();
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
