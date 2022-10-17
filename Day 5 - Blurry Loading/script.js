const bg = document.querySelector('.bg');
const loadText = document.querySelector('.loading-text');

let load = 0;


const blurring = () => {
    load++;

    console.log(load);
};
let int = setInterval(blurring, 30);