/*
*@file menu js
*/
define(function (require, exports, module) {
    var $ = require('jquery');
    // menu
    $('.menu li').each(function (i){
        $(this).on('click', function (e){
            $('.menu li').removeClass('active');
            $('.menu li > ol').hide();
            $(this).addClass('actove');
            if ($(this).has('ol')) {
                e.preventDefault();
                $(this).addClass('active').find('ol').show();
            }
        });
    });
});
