// require conf
require.config({
    baseUrl: "/assets/script",
    paths: {
        jquery: "lib/jquery",
    },
    shim: {
        jquery: {
            export: 'jquery'
        }
    }
});

define(function (require) {
    /**不同页面init路径不同*/
    require('solution/init');
    /**公共组件init**/
    require('widget/footbar');
    var widget = require('widget/slidebanner');
    var insslide = new widget.slide({
        container: '.slidebanner .banner',
        slide: '.slidebanner .banner > li',
        handler: '.slidebanner .dot-index'
    });
    
});
