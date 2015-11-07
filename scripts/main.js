var myHeading = document.querySelector('h1');
myHeading.innerHTML = 'Hello world!';
//set variable for the image that is grabbed
var myImage = document.querySelector('img');

//attach a function to the clicked image
myImage.onclick = function(){
//set variable 
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/firefox-icon.png'){
		myImage.setAttribute('src','images/rose.jpg')}
			else{
				myImage.setAttribute('src','images/firefox-icon.png');
			}
		}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1')

function setUserName(){
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name',myName);
	myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

 if (!localStorage.getItem('name')){
 	setUserName();	
 } else {
 	var storedName = localStorage.getItem('name');
 	myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
 }

 myButton.onclick = function(){
 	setUserName();
 }