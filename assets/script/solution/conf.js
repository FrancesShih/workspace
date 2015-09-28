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
    require('widget/topbar');
    /**锚点滚动**/
    var anchor = require('widget/anchor').anchor;
    $(".gather-inline >li").click(function () {
        var $this = $(this);
        var name = $this.find("a").attr("data-anchor");
        anchor({"duringtime": 500, "ele": name});
    });
    
});