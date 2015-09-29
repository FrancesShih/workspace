/**
*@file topbar
*/
define(function (require, exports, module) {
    var $ = require('jquery');
    var content = $('.topbar div.usr-info');
    if (content.size() !== 0){
    	attEvt();
    }

    function attEvt() {
    	$('.topbar li.usr-info').hover(function () {
    		content.animate({
    			'height': '260px'
    		}, 100);
	    }, function () {
	    	content.animate({
    			'height': '0'
    		}, 100);
	    });
    }

});
