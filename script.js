let btn = document.querySelector('button');

let getDadJoke = async () => {
	const config = { headers: { Accept: 'application/json' } };
	const res = await axios.get('https://icanhazdadjoke.com/', config);
	let ul = document.querySelector('ul');
	let li = document.createElement('li');
	li.innerText = res.data.joke;
	li.classList.add('my-8');
	ul.appendChild(li);
};

btn.addEventListener('click', getDadJoke);
