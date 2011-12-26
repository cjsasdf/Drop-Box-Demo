(function(window,undefind){
	var $ = (function(){
		var document = window.document,
			navigator = window.navigator,
			location = window.location;
		var lib = function(selector){
			if ( !selector ) {
				return lib;
			}
			if ( selector.nodeType ) {
				return selector;
			}
			if ( selector === "body" && document.body ) {
				return document.body;
			}
			if ( selector.charAt(0)==="#" ){
				return document.getElementById( selector.slice(1,selector.length) );
			}
		};
		lib.click = function(selector,f){
			lib(selector).onclick = f
		}
		return lib;
	})();
	window.$ = $;
})(window)
