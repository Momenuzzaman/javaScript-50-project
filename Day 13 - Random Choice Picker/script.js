const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('text-area');

textarea.focus();
textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value);

    if (e.key === 'Enter') {
        setTimeout(() => {

        }, 10);
    }
    randomSelect();
});

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
    tagsEl.innerHTML = '';

    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerHTML = tag;
        tagsEl.appendChild(tagEl);
    });
}

function randomSelect() {
    const times = 30;
    const interval = setInterval(() => {
        const randomTag = pickRandomTag();
    }, 100);
}
function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}
function highlightTag() {
    tag.classList.add('highlight');
}
function unHighlightTag() {
    tag.classList.remove('highlight');
}