var seriousOutro = [
  "Yours truly,",
  "Indubitably yours,",
  "Best regards,",
  "Best wishes,",
  "With much gratitude,",
  "Words aren't enough,",
  "Respectfully yours,"
];

var casualOutro = [
  "Always,",
  "See you soon,",
  "Can't wait!",
  "Love,",
  "Yours forever,",
  "XOXO,",
  "Your pal,",
  "Hugs,",
  "Take care,",
  "Until next time,",
  "Smiles,",
  "Stay as you are,",
  "Affectionately,",
  "Hopelessly in love,",
  "Cheers,"
];

var wackyOutro = [
  "Buckle up,",
  "Your jiggly puff,",
  "Thy humble servant",
  "Smell ya later!",
  "Toodle-do!",
  "Loaves and fishes,",
  "In Jesus's name,",
  "Later, 'gator!",
  "Tag, you're it!",
  "Ta-ta for now!",
  "Until our paths cross again,",
  "Keep it real!"
];

var seriousGreeting = [
  "Greetings,",
  "To the love of my life,",
  "To my dear,",
  "To my dearest,",
  "Good Day,",
  "Glad Tidings,",
  "Bonjour,",
  "Salutations,",
  "Dear,"
];

var seriousSingle = [
  "You light a fire in my soul.",
  "I feel lost without you in my life.",
  "I would die trying to be with you.",
  "Like Jazz, you give rhythm to my soul.",
  "Do you like to dance, because I'd like to. With you."
];

var seriousNotSingle = [
  "I appreciate the way you make time for me.",
  "I feel that it is time for us to take this relationship to the next level.",
  "You are the sun to my moon, the thunder to my lightning.",
  "Even if we don't always see eye to eye, you will always be my light.",
  "Flowers may wilt, and the sun may set, but my love for you shall know no rest."
];

var seriousAny = [
  "Like the exapansion of the universe, my love for you is infinite.",
  "Around you, I am left speechless and awe-struck by your beauty.",
  "You show me the good in the world.",
  "Your smile is as bright as a million stars."
];

var casualGreeting = [
  "Hi,",
  "'Sup,",
  "What's Up,",
  "Hello,",
  "How are you,",
  "How's it going,",
  "Bonjour,",
  "To my honey bunny,",
  "Dear,",
  "Aloha,"
];

var casualSingle = [
  "Could we meet up sometime?",
  "I like the way you sing. It makes me want to hear more.",
  "I keep thinking about you. I hope you feel the same way.",
  "We should hang sometime.",
  "I like you. I liked you since a long time ago."
];

var casualNotSingle = [
  "I appreciate the way you make time for me."
];

var casualAny = [
  "When I see you, I turn speechless.",
  "You look great dude, really."
];

var wackyGreeting = [
  "G'Day,",
  "Heyyyyy,",
  "Aye,",
  "Much Greetings,",
  "Well How Are 'Ya,",
  "Well Boyyy Howdy,",
  "Howdy,",
  "Boy Howdy,",
  "What is up my dude,",
  "Bonjour,",
  "To my honey bunny,",
  "Salutations,",
  "Aloha,"
];

var wackySingle = [
  "Please be mine, sugarpine.",
  "You could be the gravy to my sisig.",
  "You could be mine, if you would just let me be yours.",
  "I'll treat you like a chore, never neglected."
];

var wackyNotSingle = [
  "Even if we don't always see eye to eye, you will always be my banana pie.",
  "Flowers may wilt, and the sun may set, but I can't get over the shape of your pwet.",
  "Like Chuckie, you are my chocalatey buddy.",
  "We're perfect for each other, like ketchup and pancakes"
];

var wackyAny = [
  "I like your foot. The left one.",
  "You look a lot like me. That’s why I like me.",
  "You have the most amazing knees.",
  "You remind me of me, and I love myself.",
  "You are the dubidubi to my dapdap."
];


var quotes = [
	"I look at you and see the rest of my life in front of my eyes.",
	"I really really really really really really really like you.",
	"Sometimes I lay, under the moon, and thank god I’m breathing.",
	"I want it that way.",
	"Love brings happiness.",
	"God is love. Love is God.",
	"I can’t live, if living is without you.",
	"Love hurts.",
	"I wish I could turn back the clock. I'd find you sooner and love you longer.",
	"I look at you and see the rest of my life in front of my eyes.",
	"You have bewitched me body and soul, and I love, I love, I LOVE YOU.",
	"I think I'd miss you even if we'd never met.",
	"I love you without knowing how, why, or even from where",
	"Why can’t you see, you belong with me.",
	"You complete me.",
	"I'm not a smart man... but I know what love is.",
	"You’re the meaning in my life, you’re the inspiration.",
	"I love you very much, probably more than anybody could love another person.",
	"You will never age for me, nor fade, nor die.",
	"I was looking up… it was the nearest thing to heaven! You were there…",
	"And I would walk 500 miles, and I would walk 500 more, just to be the man who walked a thousand miles to fall down at your door."
];

var jokes = [
	"I need to ask. Is your dad an alien? Because you’re out of this world.",
	"Is your dad a terrorist? Because you’re the bomb!",
	"If you were a pokemon, I’d choose you.",
	"I'm no organ donor, but I'd be happy to give you my heart.",
	"Are you an angle? Because you’re so acute.",
	"It's not my fault I fell in love. You are the one that tripped me.",
	"Do you have a Bandaid? Cos I just scraped my knee falling for you.",
	"Did you fart? Because you blew me away.",
	"Let’s commit the perfect crime, I'll steal your heart and you'll steal mine.",
	"Whoever said that no one is perfect has never seen you."
];

function getRandomLine(wordList){
	return wordList[Math.floor((Math.random() * wordList.length) + 0)];
}

var message = [];
var body = [];

var serious = false;
var casual = false;
var wacky = false;
var single = false;
var joke = false;
var quote = false;
var outroText = "";

switch(statusCode) {
  case "1": serious = true; break;
  case "2": casual = true; break;
  case "3": wacky = true; break;
}
if(togetherCode == "1") {
  single = true;
}
if (pun) joke = true;
if (quoted) quote = true;


var numberOfLines = Math.floor((Math.random() * 11) + 5);

if(serious){
  message.push(getRandomLine(seriousGreeting));
  outroText = getRandomLine(seriousOutro);
  if(single){
	  body = seriousAny.concat(seriousSingle);
	  body = body.concat(seriousSingle);
  }
  else{
	  body = seriousAny.concat(seriousNotSingle);
	  body = body.concat(seriousNotSingle);
  }
}
else if(casual){
  message.push(getRandomLine(casualGreeting));
  outroText = getRandomLine(casualOutro);
  if(single){
	  body = casualAny.concat(casualSingle);
	  body = body.concat(casualSingle);
  }
  else{
	  body = casualAny.concat(casualNotSingle);
	  body = body.concat(casualNotSingle);
  }
}
else if(wacky){
  message.push(getRandomLine(wackyGreeting));
  outroText = getRandomLine(wackyOutro);
  if(single){
	  body = wackyAny.concat(wackySingle);
	  body = body.concat(wackySingle);
  }
  else{
	  body = wackyAny.concat(wackyNotSingle);
	  body = body.concat(wackyNotSingle);
  }
}

if(joke){
	body.push(getRandomLine(jokes));
}
if(quote){
	body.push(getRandomLine(quotes));
}

var wordToAdd = ""
while(message.length < numberOfLines){ //plus one cuz there's a greeting pa (at least in the final thing there is)
	wordToAdd = getRandomLine(body);
	if(message.indexOf(wordToAdd) < 0){
		message.push(wordToAdd);
	}
}

message.push(outroText);

$("#info").text("");

for(var i=0; i<message.length; i++){
	console.log(message[i]);
  $("#info").append($("<p>").text(message[i]));
  if (i==0) {
    console.log(soname);
    $("#info").append(" "+soname);
  }
  if (i==message.length-1) {
    console.log(name);
    $("#info").append($("<p>").text(name));
  }
}


