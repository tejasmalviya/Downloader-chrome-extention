// this is the code which will be injected into a given page...

(function() {

	// just place a div at top right
	var x = document.getElementsByTagName("source")[0].getAttribute("src"); window.open(x);
	alert('Your download has been started');

})();