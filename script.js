const name = "Emilie Tole";
let age = 33;
let birthday = "January 1";
let pineapplePizza = false;
let lifeEvents = [
  "I grew up in a small town.",
  "I went to Western Michigan University.",
  "I got married during the pandemic---crazy.",
  "I am a student of a Grand Circus bootcamp.",
];

if (pineapplePizza === true) {
  console.log(
    `My name is ${name} and I like pineapples on pizza.  I am currently ${age} years old and my birthday is on ${birthday}.`
  );
} else {
  console.log(
    `My name is ${name} and I'm not into pineapples on pizza.  I am currently ${age} years old and my birthday is on ${birthday}.`
  );
}

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let counter = 0;
while (true) {
  let randomNumber = Math.floor(Math.random() * 10 + 1);
  if (randomNumber !== 5) {
    counter++;
    console.log(`${randomNumber} !== 5!`);
  } else {
    counter++;
    console.log(
      `5===5. It took ${counter} iterations to generate the number 5`
    );
    break;
  }
}
