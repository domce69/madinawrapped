function hearts(){

  const container = document.querySelector('.container');
  const creat = document.createElement('div');

  creat.classList.add('hearts');
  creat.innerHTML = '&#128150';
  container.appendChild(creat);

  creat.style.left = Math.random() * 100 + 'vw';  
  setTimeout(() => {
      creat.remove();
  }, 3000);

}

setInterval(hearts, 400);