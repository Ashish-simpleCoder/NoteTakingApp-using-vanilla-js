const newNoteBtn = document.querySelector('.newNoteBtn');
// const mainContent = document.querySelector('.mainContent');
const resultContent = document.querySelector('.resultContent');


function generateNote(text = '') {
    const result = document.createElement('div');
    result.classList.add('result');
    result.classList.add('clicking');

    const htmlData = `<div class="operation">
                            <div class="deleteNote">
                                <i class="fas fa-trash"></i>
                            </div>
                            <div class="editNote">
                                <i class="fas fa-edit"></i>
                            </div>
                      </div>
                    <div class="displayNoteOverlay ${
                        text ? '' : 'hidden'
                    }"></div>
                    <textarea class='${
                        text ? 'hidden' : ''
                    }' spellcheck='true'></textarea>`;

    result.insertAdjacentHTML('afterbegin', htmlData);
    resultContent.appendChild(result);
    result.style.animation = `creation 0.3s linear forwards`;

    const deleteNote = result.querySelector('.deleteNote');
    const editNote = result.querySelector('.editNote');
    const displayNoteOverlay = result.querySelector('.displayNoteOverlay');
    const textarea = result.querySelector('textarea');

    editNote.addEventListener('click', () => {
        textarea.classList.toggle('hidden');
        displayNoteOverlay.classList.toggle('hidden');
        UPDATE_LOCAL_STORAGE();
    });

    //  oninput event
    textarea.addEventListener('change', (e) => {
        const { value } = e.target;
        displayNoteOverlay.innerHTML = value;
        UPDATE_LOCAL_STORAGE();
    });

    deleteNote.addEventListener('click', () => {
        result.style.animation = `deletion 0.3s linear forwards`;
        result.addEventListener('animationend', () => {
            result.remove();
            UPDATE_LOCAL_STORAGE();
        });
    });
    textarea.value = text;
    displayNoteOverlay.innerHTML = text;
}
const notesData = JSON.parse(localStorage.getItem('notesData'));

if (notesData) {
    notesData.forEach((element) => {
        generateNote(element);
    });
}

newNoteBtn.addEventListener('click', () => generateNote());

function UPDATE_LOCAL_STORAGE() {
    const textAreaData = document.querySelectorAll('textarea');
    const arrayData = [];

    textAreaData.forEach((element) => {
        return arrayData.push(element.value);
    });

    localStorage.setItem('notesData', JSON.stringify(arrayData));
}
