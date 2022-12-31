const btn1 = document.querySelector('#one');
const btn2 = document.querySelector('#two')
const btn3 = document.querySelector('#three')
const reset = document.querySelector('.clear')

const gridContainer = document.querySelector('.grid-container')

btn1.addEventListener('click', (e) => {
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;

    makeGrid();
    mHover();
    reset.addEventListener('click', () => {
        greatReset()
    })
    once = true;
})

btn2.addEventListener('click', () => {
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;

    for (let i = 0; i < 1024; i++) {
        const div = document.createElement('div');
        div.classList.add('medium')
        gridContainer.appendChild(div)
    }

    mHover()
    reset.addEventListener('click', () => {
        greatReset()
    })

    once = true;
})

btn3.addEventListener('click', () => {
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;

    for (let i = 0; i < 3900; i++) {
        const div = document.createElement('div');
        div.classList.add('small')
        gridContainer.appendChild(div);
    }
    reset.addEventListener('click', () => {
        greatReset()
    })

    mHover()

    once = true;
})


function makeGrid() {
    for (let i = 0; i < 255; i++) {
        let div = document.createElement('div');
        div.classList.add('big');
        gridContainer.appendChild(div);
    }
}

function mHover() {
    const bigChecker = document.querySelectorAll('div.big');
    bigChecker.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = "black";
        })
    })

    const midChecker = document.querySelectorAll('div.medium');
    midChecker.forEach(mid => {
        mid.addEventListener('mouseover', () => {
            mid.style.backgroundColor = 'black';
        })
    })

    const smallChecker = document.querySelectorAll('div.small');
    smallChecker.forEach(small => {
        small.addEventListener('mouseover', () => {
            small.style.backgroundColor = 'black';
        })
    })
}



function greatReset() {
    gridContainer.innerHTML = '';

    btn1.disabled = false;
    btn2.disabled = false;
    btn3.disabled = false;
};