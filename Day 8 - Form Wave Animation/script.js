const labels = document.querySelectorAll('.form-control label');

labels.forEach((label) => {
    label.innerHTML = label.innerText
        .split('')
        .map((latter, i) => `<span style="transition-delay:${i * 150}ms">${latter}</span>`)
        .join('');
});