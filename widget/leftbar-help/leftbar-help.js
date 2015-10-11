/*
*@file menu js
*/
define(function (require, exports, module) {
    var $ = require('jquery');
    // menu
    $('.menu li').each(function (i){
        // init - replace has
        var $this = $(this);
        //给有子节点的添加图标
        if($this.has('ol').length > 0) {
            $this.children('a').addClass('menu-bg');
            $this.attr('data-h', $this.children('ol').height());
        } 
        //通过子节点找到父节点
        if($this.find('a').hasClass('selected')) {
            //$this.parents('ol').addClass('active');
            $this.closest('li').children('a').addClass('menu-sub selected');
        } else {
            $this.find('ol').css({
                'height': 0,
                'visibility': 'hidden'
            });
        }

        // bind click
        $this.on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            //! has ol return ;
            var p = $(this);
            var $ol = p.children("ol");

            if(p.has('ol').length > 0) {
                /*
                $ol.toggle(350, function () {
                    /*
                    if(p.children('a').hasClass('menu-sub')) {
                        p.children('a').removeClass('menu-sub');
                        p.children('a').addClass('menu-add');
                    } else {
                        p.children('a').removeClass('menu-add');
                        p.children('a').addClass('menu-sub');
                    }
                    
                });
                p.children('a').toggleClass(function () {
                    if(p.children('a').hasClass('menu-sub')) {
                        return 'menu-add';
                    } else {
                        return 'menu-sub';
                    }
                });
                */
                var height = p.attr('data-h');

                if(p.children('a').hasClass('menu-sub')) {
                    p.children('a').addClass('menu-add');
                    p.children('a').removeClass('menu-sub');
                    $ol.animate({
                        'height': 0
                    }, 350, function () {
                        p.children('ol').css({'visibility': 'hidden'});
                    });
                    p.children('ol').css({'height': ''});
                } else {
                    p.children('a').addClass('menu-sub');
                    p.children('a').removeClass('menu-add');
                    $ol.css({'visibility': 'visible'});
                    $ol.animate({
                        'height': height + 'px'
                    }, 350, function () {
                        $ol.css({'height': ''});
                    });
                }  
            }
        });
    });
});
