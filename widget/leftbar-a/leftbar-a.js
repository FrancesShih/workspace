/*
*@file menu js
*/
define(function (require, exports, module) {
    var $ = require('jquery');
    // menu
    $('.menu li').each(function (i){
        // init
        var hasChild = $(this).has('ol').size();
        var heights = 0;
        if (!!hasChild && !$(this).hasClass('active')) {
            heights = $(this).find('ol').height();
            $(this).find('ol').attr('data-h', heights).css({
                'height': 0,
                'position': 'static',
                'visibility': 'visible'
            });
        }

        // bind click
        $(this).on('click', function (e){
            // 如果已经展开 神马也不做
            if ($(this).hasClass('active')) {
               if ($(this).has('ol').size() !==0) {
                 e.preventDefault();
               }
               return;
            }
            // 收起其他的，这只展开就行了... 
            $('.menu li').removeClass('active');
            $(this).addClass('active');
            $('.menu li ol').animate({
                height: 0
            }, 300);
            if ($(this).has('ol').size() !==0 ) {
                e.preventDefault();
                $(this).find('ol').animate({
                    height: $(this).find('ol').attr('data-h') + 'px'
                }, 300);
            }
        });
    });
});
