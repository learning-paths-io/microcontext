chrome.extension.sendMessage({}, function (response) {
	var readyStateCheckInterval = setInterval(function () {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);

			var options = {
				root: document.querySelector('null'),
				rootMargin: '0% 0% 75% 0%',
				threshold: 1.0
			}

			var callback = function (entries, observer) {
				entries.forEach(entry => {
					//console.log(entry.target.id);
					if (entry.target.id) {
						window.history.replaceState({}, "", "#" + entry.target.id);
					}
				});
			};

			var observer = new IntersectionObserver(callback, options);

			var targets = document.querySelectorAll('p, div, h1, h2, h3, h4, h5, h6, span');

			targets.forEach(function (target) {
				observer.observe(target);
			});
		}
	}, 10);
});