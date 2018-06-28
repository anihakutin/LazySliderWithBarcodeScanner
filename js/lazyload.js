//Heshie Brody 2018
//www.hudsonend.com
//June 17, 2018 3:53am
//Lazy load slider
//only loads one image at once
//all animations with css

//firstRun
var firstRun = true;

// Get number of images
var numOfSlides = prompt("Please enter how many slide images are in the folder", "Example: 10...");

//Get slides
var slides = [];
var imgLinks = [];
var slideNumber = 1;

while(slideNumber <= numOfSlides){
slides.push('<img src="' + 'slides/' + slideNumber + '.jpg' +'" />');
imgLinks.push('slides/' + slideNumber + '.jpg');
slideNumber++;
}

//Append 2 slide element 
var elem = document.getElementById("lazy");
elem.innerHTML += slides[0];
elem.innerHTML += slides[1];

//create timer/slider
var slider = setInterval(mySlider, 4000);
var slideP = 0;
function mySlider() {

if(slideP < numOfSlides) {
//get fist, last and previous slide element
var firstSlide = elem.firstElementChild;
var lastSlide = elem.lastElementChild;

//Load first image and animate
firstSlide.className = "fadeIn";
lastSlide.getAttributeNode("src").value = imgLinks[slideP];

//move to next slide
elem.insertBefore(lastSlide, firstSlide);

//remove image from previous slide, 2nd child
lastSlide.classList.remove("fadeIn");

slideP++;
} else{
	slideP = 0;
}
}
