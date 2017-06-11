function showButt() {
	var x = document.getElementById('confirm');
	x.style.display = 'block';
}

function hideButt() {
	var x = document.getElementById('confirm');
	x.style.display = 'none';
}

hideButt();


$("#submit").on("click",function(){
	var name = $("#textinput").val();
	var soname = $("#SOname").val();

	if ($('input[id=status-0]:checked').length > 0) {
    	var together = true;
	}
	else var together = false;

	if ($('input[id=tone-0]:checked').length > 0) {
    	var tone = "serious";
	} else if ($('input[id=tone-1]:checked').length > 0) {
		var tone = "casual";
	}
	else var tone = "wacky";

	if ($('input[id=checkboxes-0]:checked').length > 0) {
    	var quote = true;
	}
	else var quote = false;
	if ($('input[id=checkboxes-1]:checked').length > 0) {
    	var puns = true;
	}
	else var puns = false;

	console.log("Your inputs here:");
	console.log("Your name: "+name);
	console.log("Your so's name: "+soname);
	console.log("Together? "+together);
	console.log("Tone: "+tone);
	console.log("Quotes? "+quote);
	console.log("Puns? "+puns);

	$("#outputs").text("Your inputs here:");
	$("#outputs").append($("<p>").text("Your name: "+name));
	$("#outputs").append($("<p>").text("Your so's name: "+soname));
	$("#outputs").append($("<p>").text("Together? "+together));
	$("#outputs").append($("<p>").text("Tone: "+tone));
	$("#outputs").append($("<p>").text("Puns? "+puns));

	$("#outputs").append($("<h3>").text("Please confirm the above."));

	return false;
});
