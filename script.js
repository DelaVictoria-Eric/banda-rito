document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        });
    });
});

$(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
});

document.addEventListener('DOMContentLoaded', function () {
	var photoModal = new bootstrap.Modal(document.getElementById('photoModal'));
	var modalImage = document.getElementById('modalImage');

	// Handle click on photos-item class
	document.querySelectorAll('.photos-item').forEach(function (img) {
		img.addEventListener('click', function () {
			var imagePath = this.getAttribute('data-image');
			modalImage.src = imagePath;
			photoModal.show();
		});
	});
});

