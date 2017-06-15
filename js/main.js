//入口文件
requirejs.config({
	paths: {//设置别名
		jquery: 'jquery.min'
	}
});
/*
requirejs(['jquery', 'scrollto'], function($, scrollto){//引入模块，回调函数设置参数表示引入的模块
	var scroll = new scrollto.ScrollTo({
		dest: 0,
		speed: 500
	})

	$('#backTop').on('click', $.proxy(scroll.move, scroll));//第二个参数为事件处理函数，如果直接用scroll.move则this指针为返回顶部的按钮，需让this指向构造函数ScrollTo的实例

	$(window).on('scroll', function () {
		checkPosition($(window).height());
	});

	checkPosition($(window).height());

	function checkPosition(pos) {
		if($(window).scrollTop()>pos){
			$('#backTop').fadeIn();
		}else{
			$('#backTop').fadeOut();
		}
	}
});
*/
requirejs(['jquery', 'backtop'], function($, backtop){
	// new backtop.BackTop($('#backTop'), {
	// 	mode: 'move',
	// 	pos: 100,
	// 	speed: 200
	// });
	$('#backTop').backtop({
		mode: 'move'
	});
});