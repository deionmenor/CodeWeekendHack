var memos = [];
var finalmemos = [];
function getAddress() {
  	return window.location.search;
}
memos = getAddress().split(/[&=]/);
for (let i = 0; i<memos.length; i++) {
  	if (i%2==1) finalmemos.push(memos[i]);
}
console.log(memos);
console.log(finalmemos);

var pun=false;
var quoted=false;
var name=finalmemos[0];
var soname=finalmemos[1];
var togetherCode=finalmemos[2];
var statusCode=finalmemos[3];
if (finalmemos.length==6) {
   	pun = true;
   	quoted = true;
} else if (finalmemos.length==5) {
	if (finalmemos[4]==1) {
		quoted = true;
	} else pun = true;
}

function refreshPage(){
  window.location.reload();
}

/*
$("#info").text("Look daddy, I memorized it!:");
$("#info").append($("<p>").text("Your name: "+name));
$("#info").append($("<p>").text("Your other's name: "+soname));
$("#info").append($("<p>").text("1 means together: "+togetherCode));
$("#info").append($("<p>").text("1 is serious, 2 is casual, 3 is wacky: "+statusCode));
$("#info").append($("<p>").text("Quote: "+quoted));
$("#info").append($("<p>").text("Pun: "+pun));
*/
