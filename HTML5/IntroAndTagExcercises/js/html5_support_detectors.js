function supports_input_number() {
	var i = document.createElement('input');
	i.setAttribute("type", "number");
	return i.type !== "text";
}

function supports_input_placeholder() {
	var i = document.createElement('input');
	return 'placeholder' in i;
}

function supports_input_autofocus() {
	var i = document.createElement('input');
	return 'autofocus' in i;
}

function supports_canvas() {
	return !!document.createElement('canvas').getContext;
}

function supports_video() {
	return !!document.createElement('video').canPlayType;
}

function supports_local_storage() {
	try {
    	return 'localStorage' in window && window['localStorage'] !== null;
  	} catch(e){
    	return false;
  	}
}		

function supports_web_workers() {
	return !!window.Worker;
}

function supports_offline() {
	return !!window.applicationCache;
}

function supports_geolocation() {
	return 'geolocation' in navigator;
}

function supports_history_api() {
	return !!(window.history && history.pushState);
}