/**
*@file tabslt
*/
define(function (require, exports, module){
	var $ = require('jquery');

	function tabslt (opt) {
		var self = this;
		
		self.control = $(opt.control);
		self.switching = $(opt.switching);
		self.switcwrap = $(opt.switcwrap);
		self.item = opt.item >> 0;

		// 检查
        if (!self.checkParams()) {
            return false;
        }
        self.prepare().attEvt();
	}

	var pro = tabslt.prototype;

	pro.checkParams = function () {
		var self = this;

		if (self.control.size() === 0) return false;
		if (self.switching.size() === 0) return false;
		if (self.item === 0) return false;

		return true;
	}
	pro.prepare = function () {
		var self = this;
		var size = self.switching.size();

		self.control.eq(0).addClass('active');
		self.switcwrap.css({
			'width': self.item * size + 'px',
			'float': 'left'
		});
		self.switching.css({
			'float': 'left',
			'margin': 0,
			'width': self.item + 'px'
		});

		return self;
	}
	pro.attEvt = function () {
		var self = this;

		self.control.each(function (i) {
			$(this).on('click', function () {
				self.control.removeClass('active');
				$(this).addClass('active');
				self.switcwrap.animate({
					'margin-left': -i * self.item + 'px'
				}, 500);
			});
		});

		return self;
	}

	exports.tabslt = tabslt;
});
