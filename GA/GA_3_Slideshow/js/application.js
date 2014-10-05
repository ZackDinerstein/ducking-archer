var images = ["img/photo_1.jpg", "img/photo_2.jpg", "img/photo_3.jpg", "img/photo_4.jpg"];
var currentImage = 0;

function changePicture(whichNum){
	var img = document.getElementById('mainImage');
	img.setAttribute('src', images[whichNum]);
	currentImage = whichNum;
}

function nextImage(){
	currentImage++;
	if (currentImage == images.length){
		currentImage = 0;
	}

	var img = document.getElementById('mainImage');
	img.setAttribute('src', images[currentImage]);
}

function prevImage(){										// In our Slideshow program, the most important variable we have is our images array. Our job is to cycle through that array, land on the src code contained at different indexes within the array, and then injecting that src code into our '#mainImage' element. Each value in our array has a corresponding index (0, 1, 2, 3, etc...). As a way to know which image src we're currently displaying, were going to use the variable 'currentImage'. Inside 'currentImage', we'll store the index of the image src we're currently displaying. For example, if we're displaying "img/photo_1.jpg", we'll want the value of 'currentImage' to be 0. If we're displaying "img/photo_2.jpg", we'll want the value of 'currentImage to be 1', and so on. This is the system we've come up with as a way to cycle through out images.
															// prevImage()'s job is to take the value of currentImage, subtract 1 from that number, use that new number to grab the preceding image from our images array, and attach that image src to our '#mainImage' element. In other words, prevImage() figures out the image that we're currently displaying, selects the image that appears right before it on our page, and displays that images instead. We run into a problem though. If we're already displaying image 0 (i.e. grabing the src code from images[0] and injecting that into '#mainImage'), and we run the prevImage() function, we're going to try and display image -1. image -1 doesn't exist (The lowest value our images array has is 0. Actually, no array can have indexes lower than 0). Instead of letting our program through an error when it trys to find index -1 inside of our images array, we'll tell our program to display the last value in our array instead (images[3]). This will "jump" our slideshow to the end of our array and allow us to cycle through from back to front.
															// Here's how we'll do it:
															
	currentImage = currentImage - 1;						// Whatever number currentImage is, take that number and subtract 1 from it. (i.e. if 'currentImage' is 3, set 'currentImage' to 2. If it's 0, set 'currentImage' to -1)
	if (currentImage === - 1){								// Here we say, if currentImage is now '-1', run the following code. currentImage could only be -1 is we hit the back button when we were on the first image in our array (image 0).
		currentImage = images.length -1; 					// Set 'currentImage' to the images.length -1. In this case, that value would be 3. So why don't we just say "set the value to 3"? Because that would be 'hard-coding' a value into our function, and we want to avoid that. By saying, "set the value to the lenght of the array (i.e. 4) and subtrack 1 from it", we have the option to add as many items to our aray as we want, the program will always giv us the index of the last item in the array.
	}
	var img = document.getElementById('mainImage')
	img.setAttribute('src', images[currentImage]); 			// Whatever we've set currentImage to, that that number and use it to grab a value from our images array. If current image is 3, fetch images[3] (i.e. "img/photo_4.jpg"), and set the src of #mainImage to "img/photo_4.jpg".
}


