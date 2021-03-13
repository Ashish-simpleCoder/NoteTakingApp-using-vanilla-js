const hero_header = document.querySelector('.hero_header');
const result = document.querySelectorAll('.result');
const displayNoteOverlay = document.querySelectorAll('.displayNoteOverlay');
// const r= result;
// console.log(result.length);
// console.log(r);

const textarea = document.querySelectorAll('textarea');
// window.addEventListener('load', () => {
//    hero_header.classList.toggle('hero_header-active');
//    newNoteBtn.classList.toggle('newNoteBtn-active');

//    for (i = 0; i < result.length; i = i + 2) {
//       result[i].classList.toggle('result-active_odd');
//    }
//    // for (i = 1; i < result.length; i = i + 2) {
//    //    result[i].classList.toggle('result-active_even');
//    // }
// });

// for(i=0;i<textarea.length;i++){
//     if(textarea[i]focusWithin){
//         displayNoteOverlay[i].style.fontSize="4rem";
//         console.log('true')
//     }
// }


/* ---------------------------------------------- */
window.addEventListener('load',()=>{
   const mainContent=document.querySelector('.mainContent')
   const childrens=mainContent.children;
   // console.log(resultContent.children[1])

   for(let i=0;i<childrens.length;i++){
      childrens[i].style.animation=`loading ${1+i/childrens.length}s ease forwards`;
   }
})
window.addEventListener('load',()=>{
   for(let i=0;i<resultContent.children.length;i++)
   {
      resultContent.children[i].style.animation=`loading ${1+(i+0.1/resultContent.children.length)}s ease forwards`;
   }
})
/* ---------------------------------------------- */

