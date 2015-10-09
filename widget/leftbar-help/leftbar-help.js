/*
*@file menu js
*/
define(function (require, exports, module) {
    var $ = require('jquery');
    // menu
    $('.menu li').each(function (i){
        // init
        var $this = $(this);
        // bind click
        $this.on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            if($(this).children("ol").length > 0) {
                if($(this).children("ol").css('display') == 'none') {
                    $(this).children("ol").show(350);
                    $(this).children('a').find('img').attr('src', '/assets/img/common/icon-helpdoc-sub.png');
                    if($(this).parent().hasClass('menu')) return;
                    $(this).parent().find('a').removeClass();
                    $(this).parents('li').siblings().find('a').removeClass();
                    $(this).children('a').attr('class', 'red');
                } else {
                    $(this).find("ol").hide(350);
                    $(this).find('img').attr('src', '/assets/img/common/icon-helpdoc-add.png');
                    $(this).parent().find('a').removeClass();
                } 
            } else {
                $(this).parent().find('a').removeClass();
                $(this).parents('li').siblings().find('a').removeClass();
                $(this).find('a').attr('class', 'red');
                if($(this).find('img').attr('src') == '/assets/img/common/icon-helpdoc-add.png') {
                    $(this).find('img').attr('src', '/assets/img/common/icon-helpdoc-sub.png');
                } else {
                    $(this).find('img').attr('src', '/assets/img/common/icon-helpdoc-add.png');
                } 

            }

        });
    });
});
