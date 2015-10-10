/*
*@file menu js
*/
define(function (require, exports, module) {
    var $ = require('jquery');
    // menu
    $('.menu li').each(function (i){
        // init
        var $this = $(this);
        $this.find('ol').each(function () {
            $(this).children("li").each(function () {
                if($(this).find("ol").length <= 0) {
                    $(this).find('a').css({'background-image':'none'});
                }
            });
        });
        // bind click
        $this.on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            var p = $(this);
            var $ol = $(this).children("ol");
            if($ol.length > 0) {
                if($ol.css('display') == 'none') {
                    $ol.show(350);
                    //变换收齐和展开的图标
                    p.children('a').css('background-position-y', '-22px');
                    if(p.parent().hasClass('menu')) return;
                    //选中字体为红色
                    p.parent().find('a').removeClass();
                    p.parents('li').siblings().find('a').removeClass();
                    p.children('a').attr('class', 'red');
                } else {
                    p.find("ol").hide(350);
                    //变换收齐和展开的图标
                    p.find('a').css('background-position-y', '5px');
                    p.parent().find('a').removeClass();
                }
            } else {
                //选中字体为红色
                p.parent().find('a').removeClass();
                p.parents('li').siblings().find('a').removeClass();
                p.find('a').attr('class', 'red');
                //变换收齐和展开的图标
                if(p.find('a').css('background-position-y') == '-22px') {
                    p.find('a').css('background-position-y', '5px');
                } else {
                    p.find('a').css('background-position-y', '-22px');
                } 
            }

        });
    });
});
