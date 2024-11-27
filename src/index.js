import './main.scss';

function component(text) {
    const element = document.createElement('h1');
    element.textContent = text;
    return element;
}


const items = document.getElementsByClassName("item");
for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', () => {
        const itemsInner = document.getElementsByClassName("item");
        for (let j = 0; j < itemsInner.length; j++) {
            itemsInner[j].classList.remove('item--active');
        }
        items[i].classList.add('item--active');
    })
}

// document.body.prepend(component('Проект собран на Webpack'));
