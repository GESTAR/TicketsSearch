window.addEventListener("DOMContentLoaded", function () {
	var iframe = document.getElementById('iframepage');
	if (iframe.attachEvent) {
		iframe.attachEvent("onload", function () {
			iframe.contentDocument.body.style.zoom = 0.5
		});
	} else {
		iframe.onload = function () {
			iframe.contentDocument.body.style.zoom = 0.5
		};
	}
}, false);
