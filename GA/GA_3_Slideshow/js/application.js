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

function prevImage(){
	currentImage = currentImage - 1;
	if (currentImage === images.length){
		
	}
	var img = document.getElementById('mainImage')
	img.setAttribute('src', images[currentImage]);
}


