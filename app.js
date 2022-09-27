const audioDog = new Audio("sound/dog.mp3");
audioDog.volume = 0.5;
audioDog.loop = true;
const audioCat = new Audio("sound/cat.mp3");
audioCat.volume = 0.5;
audioCat.loop = true;
const audioBird = new Audio("sound/bird.mp3");
audioBird.volume = 0.5;
audioBird.loop = true;

const play = document.querySelector(".play");
const dog = document.querySelector(".dog");
const cat = document.querySelector(".cat");
const bird = document.querySelector(".bird");
const volume_slider = document.querySelector(".volume_slider");

const DOG = 'dog';
const CAT = 'cat';
const BIRD = 'bird';
const ON = 'on';
const OFF = 'off';

let animals = [];

function playSound(animal) {
  switch (animal) {
    case DOG : audioDog.play(); break;
    case CAT : audioCat.play(); break;
    case BIRD : audioBird.play(); break;
  }
}

function pauseSount(animal) {
  switch (animal) {
    case DOG : audioDog.pause(); break;
    case CAT : audioCat.pause(); break;
    case BIRD : audioBird.pause(); break;
  }
}

function setOnOffAni(animal, className){

  if(animals.includes(animal)) {
    for(let i = 0; i < animals.length; i++) {
      if(animals[i] === animal)  {
        animals.splice(i, 1);
        i--;
      }
    }
  } else animals.push(animal);

  console.log(animals)
  if(className == ON) playSound(animal);
  else pauseSount(animal);

  switch (animal) {
    case DOG :
      dog.classList.toggle(ON);
      dog.classList.toggle(OFF);
      break;
    case CAT :
      cat.classList.toggle(ON);
      cat.classList.toggle(OFF);
      break;
    case BIRD :
      bird.classList.toggle(ON);
      bird.classList.toggle(OFF);
      break;
  }
}

function setVolume() {
  audioDog.volume = volume_slider.value / 100;
  audioCat.volume = volume_slider.value / 100;
  audioBird.volume = volume_slider.value / 100;
}

dog.addEventListener("click", function () {
  if (animals.includes(DOG)) setOnOffAni(DOG,OFF);  else setOnOffAni(DOG,ON);
});

cat.addEventListener("click", function () {
  if (animals.includes(CAT)) setOnOffAni(CAT,OFF);  else setOnOffAni(CAT,ON);
});

bird.addEventListener("click", function () {
  if (animals.includes(BIRD)) setOnOffAni(BIRD,OFF);  else setOnOffAni(BIRD,ON);
});

