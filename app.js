const button = document.querySelector('button');
const body = document.querySelector('body');

const colors = ['#f58634', '#f14668', '#ffd880', '#5b6d5b', '#eaffd0', '#a1cae2', '#b34180', '#e7e6e1', '#314e52', '#9b5151', '#845ec2', '#350b40', '0a043c', '#ffe227', '#16c79a'];

body.style.backgroundColor = "violet";


button.addEventListener('click', () => {
    const colorIndex = parseInt(Math.random() * colors.length)
    body.style.backgroundColor = colors[colorIndex]
});



