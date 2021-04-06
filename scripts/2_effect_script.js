const hero_header = document.querySelector('.hero_header');
const result = document.querySelectorAll('.result');
const displayNoteOverlay = document.querySelectorAll('.displayNoteOverlay');
const textarea = document.querySelectorAll('textarea');

/* ---------------------------------------------- */
window.addEventListener('load', () => {
    const mainContent = document.querySelector('.mainContent');
    const childrens = mainContent.children;
    //  console.log(childrens)

    for (let i = 0; i < childrens.length; i++) {
        childrens[i].style.animation = `loading ${
            1 + i / childrens.length
        }s ease forwards`;
    }
    for (let i = 0; i < resultContent.children.length; i++) {
        resultContent.children[i].style.animation = `loading ${
            1 + (i + 0.1 / resultContent.children.length)
        }s ease forwards`;
    }
});

// window.addEventListener('load',()=>{
//    for(let i=0;i<resultContent.children.length;i++)
//    {
//       resultContent.children[i].style.animation=`loading ${1+(i+0.1/resultContent.children.length)}s ease forwards`;
//    }
// })
/* ---------------------------------------------- */

const toogleMode = document.querySelector('.toogleMode');
const night_arr = ['🌞', '🌚'];
let count = 1;

// dark mode toggle
toogleMode.addEventListener('click', () => {
    darkMode();
});
function darkMode() {
    toogleMode.innerHTML = night_arr[count++];
    if (count > night_arr.length - 1) {
        count = 0;
    }
    document.body.classList.toggle('body-active-mode');
    const result = document.querySelectorAll('.result');

    for (let i = 0; i < result.length; i++) {
        result[i].classList.toggle('result-active-mode');
    }

    // const create_btn = document.querySelector('.newNoteBtn');
    // create_btn.classList.toggle('newNoteBtn-active-mode');

    const h1 = document.querySelector('h1');
    h1.classList.toggle('h1-active');
}

// const note_container = document.querySelector('.resultContent');
// const child = note_container.children;
// const deleteBtn = document.querySelectorAll('.deleteNote');
// const editBtn = document.querySelectorAll('.editNote');
// // console.log(child)
// for (let i = 0; i < child.length; i++) {
//     child[i].addEventListener('mouseenter', () => {
//         deleteBtn[i].style.visibility = 'inherit';
//         editBtn[i].style.visibility = 'inherit';
//     });
//     child[i].addEventListener('mouseleave', () => {
//         deleteBtn[i].style.visibility = '';
//         editBtn[i].style.visibility = '';
//     });
// }
