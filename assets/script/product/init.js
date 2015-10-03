/**
*@file init
*/
define(function (require, exports, module) {
    var $ = require('jquery');
    var widget = require('widget/anchor');
    var tab = $('.tab li'); 

    tab.each(function (i) {
        $(this).on('click', function () {
            tab.removeClass('active');
            $(this).addClass('active');
            var _index = i >> 0;
            _index = _index + 1;
            widget.anchor({
                ele: 'h2:nth-of-type('+ _index + ')' 
            });
        });
    });

});
