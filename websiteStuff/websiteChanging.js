function myfunc(){

    const container = document.querySelector('#container');

    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = "Added text-content"

    container.appendChild(content);

    const redText = document.createElement('p');
    redText.classList.add('redText');
    redText.textContent = "I am red"
    redText.setAttribute('style', 'color: red')

    container.appendChild(redText);

    const blueHeader = document.createElement('h3');
    blueHeader.classList.add('blueHeader');
    blueHeader.textContent = "I am blue"
    blueHeader.setAttribute('style', 'color: blue')

    container.appendChild(blueHeader);

    const box = document.createElement('div');
    box.classList.add('box');
    box.setAttribute('style', 'border-style: solid; border-color: black; background-color: pink;')

    container.appendChild(box);

    const headering1 = document.createElement('h3');
    headering1.classList.add('header1')
    headering1.textContent = "I'm in a div"; 

    box.appendChild(headering1);

    const paragraph1 = document.createElement('p');
    paragraph1.classList.add('paragraph1')
    paragraph1.textContent = "also diving"; 

    box.appendChild(paragraph1);

}

const btn = document.querySelector('#btn');
btn.addEventListener('click', function(e) {
    e.target.style.background = 'blue';
});

let scrolling = false;

window.scroll = () => {
    scrolling = true;
};

setInterval(() => {
    if (scrolling) {
        scrolling = false;
        let div = document.getElementById('scrollDemo');
            // get the target
            let target = e.target;
            // handle each button's click
            switch (target.id) {
                case 'btnScrollLeft':
                    div.scrollLeft += 20;
                    break;

                case 'btnScrollTop':
                    div.scrollTop += 20;
                    break;
            }
    }
},300);

const control = document.querySelector('#control');
control.addEventListener('click', function (e) {
    e.target.setInterval();
    }, 
    { passive: true }
);
