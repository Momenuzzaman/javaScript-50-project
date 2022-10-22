const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');



async function jokeGenerator() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    };
    const res = await fetch('https://icanhazdadjoke.com', config)
    const data = await res.json();
    jokeEl.innerHTML = data.joke;
}



// const jokeGenerator = () => {
//     const config = {
//         headers: {
//             Accept: 'application/json',
//         },
//     };
//     fetch('https://icanhazdadjoke.com', config)
//         .then(res => res.json())
//         .then(data => {
//             joke.innerHTML = data.joke
//             });
// // };

jokeBtn.addEventListener('click', jokeGenerator);
