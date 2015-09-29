define(function (require, exports, module) {
	var $ = require('jquery');
    //锚点滚动
	exports.anchor = function (option) {
		var duringtime = option ? option.duringtime || 500 : "";
		var ele = option ? option.ele : "";
		if(!ele) return;
		var top = $(ele).offset().top;
		$("html,body").animate({scrollTop: top}, duringtime);	
	};
});