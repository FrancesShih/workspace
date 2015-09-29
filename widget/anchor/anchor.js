define(function (require, exports, module) {
	var $ = require('jquery');
    //锚点滚动
	exports.anchor = function (option) {
		if(!option) return;
		var duringtime = option.duringtime || 500;
		var ele = option.ele;
		if(!ele) return;
		var top = $(ele).offset().top;
		$("html,body").animate({scrollTop: top}, duringtime);	
	};
});
