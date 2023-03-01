window.onload = function() {
	window.setTimeout(function() {
	let aload = document.querySelector('.preloader');
	aload.classList.add('loaded');
	aload.classList.remove('loading');
	}, 1500
	)
}