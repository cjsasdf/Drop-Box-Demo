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
			if ( typeof selector == "string"){
				var dom = document.createElement( selector );
				if ( arguments[1] ){
					if ( typeof arguments[1] == "object" ){
						for( var sty in arguments[1] ){
							dom.style[sty] = arguments[1][sty];
						}
					}else if (typeof arguments[1] == "string"){
						dom.className = arguments[1];
					}
				}
				
				if ( arguments[2] ){
					if( !arguments[2].nodeType ){
						lib.append( arguments[2],dom );
					}else{
						arguments[2].appendChild( dom );
					}
				}
				return dom;
			}
		};
		lib.click = function( selector , f ){
			lib(selector).onclick = f
		}
		lib.append = function( selector , htmlDom ){
			if( htmlDom.nodeType ){
				lib(selector).appendChild( htmlDom );
			}else if( htmlDom.charAt(0) === "<" && htmlDom.charAt( htmlDom.length - 1 ) === ">" && htmlDom.length >= 3 ){
				lib(selector).innerHTML += htmlDom ;
			}
		}
		return lib;
	})();
	window.$ = $;
})(window);

cfg = {
	g:9.8,					//重力加速度
	em:0.62,				//弹力系数
	skyWidth:260,			//空间宽度
	skyHeight:360			//空间高度
};

//g->重力加速度，em->弹力系数
var fall = function(g,em){
	g = g?g:cfg.g;
	em = em?em:cfg.em;
	var _box = $("div","box","body") ,
		_speed = 0 ,
		_sy = Math.random()*30-15 ,
    	_this = this , _tmr = null ;
    var _c_offsetTop = _box.offsetTop,
    	_c_offsetLeft = _box.offsetLeft;
        //_box.mouseover(function(){if(_speed<0)return;_speed=0-Math.random()*5-5;_this.move();});
    this.move = function(){
    	//console.log(_speed);
        _c_offsetTop += _speed;
        _c_offsetLeft += _sy;
        if( _c_offsetTop >= cfg.skyHeight && _speed > 0 ){
            _speed = 0 - _speed * em;
            if( Math.abs(_speed)<1){
            	_speed=0;return ;
            }
        }
        if( (_c_offsetLeft > cfg.skyWidth && _sy>0) || (_c_offsetLeft < 0 && _sy <0) ){
        	_sy = 0 - _sy * em;
        }
        _tmr = setTimeout(function(){_this.move();},10);
        _speed = (_speed+(g/100));
        _sy = _sy * 0.995;
        _box.style.top = _c_offsetTop + "px";
        _box.style.left = _c_offsetLeft + "px";
	};
}

function create(){
	var ball=new fall(9.8 ,0.55);
    ball.move();
}










