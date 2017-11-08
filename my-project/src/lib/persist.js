let items = {}, sessionBus;
let on = (function() {
  if (document.addEventListener) {
    return function(element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  } else {
    return function(element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler);
      }
    };
  }
})();

function getPath() {
	return 'session-resume:' + location.origin + location.pathname;
};
function getItem(key) {
	return sessionStorage.getItem(key)
};
function setItem(key,value) {
	return sessionStorage.setItem(key,value)
};
function setValue(persistKey, value) {
	let path = getPath();
	value = JSON.stringify(value)
	if(items[path]){
		items[path][persistKey] = value;
	}else{
		items[path] = {persistKey: value};
	}
};
function getValue(persistKey){
	let path = getPath();
	if(items[path]){
		return JSON.parse(items[path][persistKey]);
	}
};

export default {
	install(Vue){
		// get data from sessionStorage and use items to storage all the form value; 
		let storage = getItem(getPath());
		if(storage)
			items = JSON.parse(storage);
		// use event bus to transfer value from forms to items;
		sessionBus = new Vue();
		// storage all form value to sessionStorage;
		on(window, "pagehide", function() {
			sessionBus.$emit('session-resume');
			setItem(getPath(), JSON.stringify(items));
			console.log('pagehide',JSON.stringify(items));
		});
		// remove session for security;
		on(window, "pageshow", function() {
			sessionStorage.removeItem(getPath());
			console.log('pageshow',items);
		});
	}
}

var sessionResume = {
	props:{
		persistKey: { type: String }
	},
	created() {
		if(this.persistKey) {
			let sessionValue = getValue(this.persistKey);
			if(sessionValue)
				this.currentValue = sessionValue;
			console.log('set currentValue from sessionValue: ',this.persistKey,sessionValue);

			let vm = this;
			sessionBus.$on('session-resume', function(){
				setValue(vm.persistKey, vm.currentValue);
				console.log('on session-resume', vm.persistKey, vm.currentValue);
			});
		}
	},
	beforeDestroy() {
		if(this.persistKey) {
			setValue(this.persistKey, this.currentValue);
			console.log('beforeDestroy & setValue', this.currentValue, this.persistKey);
		}
	}
}
export {sessionResume};