/**
*@file taopnav
*/
define(function (require, exports, module) {
	var $ = require('jquery');

	$('.topnav .nav li').hover(function (){
		$(this).find('div.subnav').css({
			'visibility': 'visible',
			'z-index': 1
		}).animate({
			opacity: 'show'
		}, 300);
	},function () {
		$(this).find('div.subnav').css({
			'visibility': 'hidden',
			'z-index': -1
		}).animate({
			opacity: 'hide'
		}, 300);
	});

});
