const elements = document.querySelector('div');

console.log(elements);

elements.addEventListener('click', (e) => {
    console.log(e.target.tagName);
    if (e.target.tagName === 'BUTTON') {
        console.log(e.target);
    }
})
