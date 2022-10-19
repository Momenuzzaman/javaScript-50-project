const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.map((sound) => {
    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.textContent = sound;

    document.getElementById('buttons').appendChild(btn);
});