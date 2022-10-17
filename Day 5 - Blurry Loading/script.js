const bg = document.querySelector('.bg');
const loadText = document.querySelector('.loading-text');

let load = 0;


const blurring = () => {
    load++;
    if (load > 99) {
        clearInterval(int);
    }
    loadText.textContent = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    console.log(load);
};
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
let int = setInterval(blurring, 30);