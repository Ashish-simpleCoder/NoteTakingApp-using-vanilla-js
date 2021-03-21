const headerText = document.querySelector('.hero_header h1');

const strText = headerText.innerText;

const txtArray = Array.from(strText);
const length = txtArray.length;

headerText.innerText = ''; //resetting headerText value

// converting all alphabets into span tag's element
txtArray.forEach((element) => {
    headerText.innerHTML += `<span>${element}</span>`;
});

//making an array of all span tag presented in "headerText" element
const span = headerText.querySelectorAll('span');
window.addEventListener('load', () => {
    span.forEach((element, index) => {
        element.style.animation = `textFade ${(index + 1) / length}s linear`;
    });
});
