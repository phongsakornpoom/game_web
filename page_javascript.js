$(document).ready(function(){
	var BG_images=['background_images/background_1.jpg',
				'background_images/background_2.jpg',
				'background_images/background_3.jpg',
				'background_images/background_4.jpg',
				'background_images/background_5.jpg',
				'background_images/background_6.gif',];

	var randomNumber = Math.floor(Math.random() * BG_images.length);
	var New_Image = 'url(' + BG_images[randomNumber] + ')';

	$('body').css({'background': New_Image, 'background-attachment':'fixed', 'background-repeat': 'no-repeat', 'background-size' : 'cover',});
});