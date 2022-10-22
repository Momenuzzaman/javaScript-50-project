const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');



const jokeGenerator = () => {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    };
    fetch('https://icanhazdadjoke.com', config)
        .then(res => res.json())
        .then(data => console.log(data));
};

jokeBtn.addEventListener('click', jokeGenerator);
