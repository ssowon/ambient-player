const audioDog = new Audio("sound/dog.mp3");
audioDog.volume = 0.5;
audioDog.loop = true;
const audioCat = new Audio("sound/cat.mp3");
audioCat.volume = 0.5;
audioCat.loop = true;
const audioBird = new Audio("sound/bird.mp3");
audioBird.volume = 0.5;
audioBird.loop = true;

const audioGarden = new Audio("sound/bg_garden.mp3");
audioGarden.volume = 0.5;
audioGarden.loop = true;
const audioHappy = new Audio("sound/bg_happy.mp3");
audioHappy.volume = 0.5;
audioHappy.loop = true;
const audioRain = new Audio("sound/bg_rain.mp3");
audioRain.volume = 0.5;
audioRain.loop = true;
const audioSunny = new Audio("sound/bg_sunny.mp3");
audioSunny.volume = 0.5;
audioSunny.loop = true;

const dog = document.querySelector(".dog");
const cat = document.querySelector(".cat");
const bird = document.querySelector(".bird");
const bg_garden = document.querySelector(".bg_garden");
const bg_happy = document.querySelector(".bg_happy");
const bg_rain = document.querySelector(".bg_rain");
const bg_sunny = document.querySelector(".bg_sunny");
const volume_slider = document.querySelector(".volume_slider");

const DOG = 'dog';
const CAT = 'cat';
const BIRD = 'bird';
const BG_GARDEN = 'bg_garden';
const BG_HAPPY = 'bg_happy';
const BG_RAIN = 'bg_rain';
const BG_SUNNY = 'bg_sunny';
const ON = 'on';
const OFF = 'off';

let bg = '';
let animals = [];

function playSound(animal) {
  switch (animal) {
    case DOG : audioDog.play(); break;
    case CAT : audioCat.play(); break;
    case BIRD : audioBird.play(); break;
  }
}

function playBgSound(bgName) {
  switch (bg) {
    case BG_GARDEN :
      bg_garden.classList.remove(ON);
      bg_garden.classList.add(OFF);
      break;
    case BG_HAPPY :
      bg_happy.classList.remove(ON);
      bg_happy.classList.add(OFF);
      break;
    case BG_RAIN :
      bg_rain.classList.remove(ON);
      bg_rain.classList.add(OFF);
      break;
    case BG_SUNNY :
      bg_sunny.classList.remove(ON);
      bg_sunny.classList.add(OFF);
      break;
  }
  if(bg != bgName) {
    switch (bgName) {
      case BG_GARDEN :
        bg_garden.classList.toggle(ON);
        bg_garden.classList.toggle(OFF);
        break;
      case BG_HAPPY :
        bg_happy.classList.toggle(ON);
        bg_happy.classList.toggle(OFF);
        break;
      case BG_RAIN :
        bg_rain.classList.toggle(ON);
        bg_rain.classList.toggle(OFF);
        break;
      case BG_SUNNY :
        bg_sunny.classList.toggle(ON);
        bg_sunny.classList.toggle(OFF);
        break;
    }
    }

  pauseBgSound();

  if(bg != bgName) { 
    bg = bgName;
    
    switch (bgName) {
      case BG_GARDEN : audioGarden.play(); break;
      case BG_HAPPY : audioHappy.play(); break;
      case BG_RAIN : audioRain.play(); break;
      case BG_SUNNY : audioSunny.play(); break;
    }
  } else if (bg == bgName) bg = '';

}

function pauseSound(animal) {
  switch (animal) {
    case DOG : audioDog.pause(); break;
    case CAT : audioCat.pause(); break;
    case BIRD : audioBird.pause(); break;
  }
}

function pauseBgSound() {
  switch (bg) {
    case BG_GARDEN : audioGarden.pause(); break;
    case BG_HAPPY : audioHappy.pause(); break;
    case BG_RAIN : audioRain.pause(); break;
    case BG_SUNNY : audioSunny.pause(); break;
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
  else pauseSound(animal);

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
  audioGarden.volume = volume_slider.value / 100;
  audioHappy.volume = volume_slider.value / 100;
  audioRain.volume = volume_slider.value / 100;
  audioSunny.volume = volume_slider.value / 100;
}

dog.addEventListener("click", function () {
  if (animals.includes(DOG)) setOnOffAni(DOG,OFF);  
  else setOnOffAni(DOG,ON);
});

cat.addEventListener("click", function () {
  if (animals.includes(CAT)) setOnOffAni(CAT,OFF); 
  else setOnOffAni(CAT,ON);
});

bird.addEventListener("click", function () {
  if (animals.includes(BIRD)) setOnOffAni(BIRD,OFF);  
  else setOnOffAni(BIRD,ON);
});

bg_garden.addEventListener("click", function () {
  playBgSound(BG_GARDEN); 
});

bg_happy.addEventListener("click", function () {
  playBgSound(BG_HAPPY); 
});

bg_rain.addEventListener("click", function () {
  playBgSound(BG_RAIN); 
});

bg_sunny.addEventListener("click", function () {
  playBgSound(BG_SUNNY); 
});

