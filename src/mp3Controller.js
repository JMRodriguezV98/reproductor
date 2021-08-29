const play = document.querySelector('.play');
const pause = document.querySelector('.pause');
const audio = document.getElementById('audio');

window.onload = function() {
	playAudio();
	pauseAudio();
  };

function playAudio(){
	play.addEventListener("click", function( e ){
		play.classList.add('invisible');
		pause.classList.remove('invisible');
		audio.play();
	});
}

function pauseAudio(){
	pause.addEventListener("click", function( e ){
		play.classList.remove('invisible');
		pause.classList.add('invisible');
		audio.pause();
	});
}


