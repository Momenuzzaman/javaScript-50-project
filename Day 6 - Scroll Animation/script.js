const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', function () {
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        const topBox = box.getBoundingClientRect().top;

        if (topBox < triggerBottom) {
            box.classList.add('show');
        }
        else {
            box.classList.remove('show');
        }

    });
});