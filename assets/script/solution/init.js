define(function (require, exports, module) {
	var $ = require('jquery');
	
	$(".gather-inline >li").mouseenter(function () {
		var $this = $(this).find("img");
		var name = $this.attr("src");
		name = name.indexOf(".png") ? 
				name.substring(0, name.indexOf(".png")) + "-hover.png": "";
		$this.attr("src", name);
	});
	$(".gather-inline >li").mouseleave(function () {
		var $this = $(this).find("img");
		var name = $this.attr("src");
		name = name.indexOf("-hover.png") ? 
				name.substring(0, name.indexOf("-hover.png")) + ".png": "";
		$this.attr("src", name);
	});

	/**锚点滚动**/
    var anchor = require('widget/anchor').anchor;
    $(".gather-inline >li").click(function () {
        var $this = $(this);
        var name = $this.find("a").attr("data-anchor");
        anchor({"duringtime": 500, "ele": name});
    });

});