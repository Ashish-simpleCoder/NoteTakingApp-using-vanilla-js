const hero_header = document.querySelector('.hero_header');
const result = document.querySelectorAll('.result');
const displayNoteOverlay = document.querySelectorAll('.displayNoteOverlay');


const textarea = document.querySelectorAll('textarea');


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

