var btn = document.getElementById("btn");
var animalContainer = document.getElementById("animal-info")
var pageCounter = 1

btn.addEventListener("click", function(){
	var ourRequest = new XMLHttpRequest();

	ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-'+ pageCounter +'.json');
	
	ourRequest.onload = function () {
		var ourdata = JSON.parse(ourRequest.responseText)
		renderHTML(ourdata)
	}

	ourRequest.send()
	pageCounter++
	if (pageCounter > 3) {
		btn.classList.add("hide-me")
	};

})

var renderHTML = function(data){
	var htmlString = ""

	for(i = 0 ; i < data.length ; i++){
		htmlString += "<p>" + data[i].name + " is a " + data[i].species + "</p>"
	}

	animalContainer.insertAdjacentHTML("beforeend", htmlString)
}

