/**
*@file init
*/
define(function (require, exports, module) {
    var $ = require('jquery');
    var widget = require('widget/tabslt');
    var instabslt = new widget.tabslt({
        control: '.tab li',
        switching: '.tabcontent li',
        switcwrap: '.tabcontent ol',
        item: $('.col-l').width()
    });
});
