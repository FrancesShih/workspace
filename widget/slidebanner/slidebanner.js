/**
*@file sliding
*@Frances.Shih
*/
define(function (require, exports, module) {
    var $ = require('jquery');
    var _id = 0;


    function slidebanner(opt){
        var self = this;

        self.control = $(opt.control);
        self.controlwrap = $(opt.controlwrap);
        self.contents = $(opt.contents);
        self.contentwrap = $(opt.contentwrap);
        self.item = opt.item >> 0;
        self.times = opt.times >> 0;

        self.item = Math.max(self.item ,$('.wrap').width());

        // 检查
        if (!self.checkParams()) {
            return false;
        }
        self.prepare().attEvt();
    }

    var pro = slidebanner.prototype;
    
    pro.checkParams = function () {
        var self = this;

        if (self.control.size() === 0) return false;
        if (self.contents.size() === 0) return false;
        if (self.contents.size() === 1) {
            self.contents.eq(0).addClass('active');
            return false;
        }
        if (self.item === 0) return false;
        if (self.times === 0) return false;

        return true;
    }

    pro.prepare = function (i) {
        var self = this;
        var _index = i ? i : 0;
        // 初始化
        var controlwidth = -self.controlwrap.width()/2;
        var size = self.contents.size();

        self.controlwrap.css({
            'margin-left': controlwidth + 'px',
            'visibility': 'visible'
        });
        self.contentwrap.css({
            'width': size * self.item + 'px',
            'overflow': 'hidden',
            'margin-left': -1 * _index * self.item + 'px'
        });
        self.contents.css({
            'width': self.item + 'px',
            'float': 'left'
        });

        self.control.removeClass('active').eq(_index).addClass('active');
        self.contents.removeClass('active').eq(_index).addClass('active');

        self._index = _index;


        return self;
    }

    pro.attEvt = function () {
        var self = this;

        self.control.each(function (i) {
            $(this).on('click', function () {
                self.control.removeClass('active');
                $(this).addClass('active');
                self._index = i;
                self.contentwrap.animate({
                    'margin-left': -1 * self._index * self.item + 'px'
                }, 300);
                self.contents.removeClass('active').eq(i).addClass('active');
                _id && clearTimeout(_id);
                _id = autoslide(self);
            });
        });

        $(window).on('resize', function() {
            self.item = Math.max($('.slidebanner').width() ,$('.wrap').width());
            self.prepare(self._index);
        });

        _id = autoslide(self);

        return self;
    }

    // 定时
    function autoslide (object) {
        var o = object;
        var id = setTimeout(function () {
            o._index = o._index + 1 > o.contents.size() - 1 ? 0 : o._index + 1;
            o.prepare(o._index);
            autoslide(o);
        }, o.times);
        return id;
    }

    exports.slide = slidebanner; 
});
