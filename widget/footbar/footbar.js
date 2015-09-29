/**
*@file footbar
*/
define(function (require, exports, module) {
    var $ = require('jquery');
    var handler = $('footer .ks-site li');
    var img = $('footer .code img');
    
    handler.each(function (i) {
        $(this).on('click', function (){
            handler.removeClass('active');
            $(this).addClass('active');
            img.hide().eq(i).show();
        });
    });

});
