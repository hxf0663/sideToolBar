define(['jquery'], function($){
	function ScrollTo(opts) {//构造函数里this为空对象，原型指向ScrollTo.prototype，用new实例化返回此对象(this指针随调用情况而不同，可使用call,apply,bind或$.proxy改变this指针为构造函数的实例)
		this.opts = $.extend({}, ScrollTo.DEFAULTS, opts);//用户传递的配置覆盖构造函数的默认配置属性，注意是ScrollTo.DEFAULTS而非this.DEFAULTS，如果DEFAULTS挂在原型上则可以用this.DEFAULTS，但DEFAULTS属性不应该让外部实例访问到所以不能挂在原型上
		this.$el = $('html, body');
	}
	//方法挂在构造函数的原型上使内存中只保留一份方法
	ScrollTo.prototype.move = function () {
		// console.log(this);
		var opts = this.opts;
			dest = opts.dest;
		if($(window).scrollTop() != dest){//没有达到目的
			if(!this.$el.is(':animated')){//没有在运动
				this.$el.animate({
					scrollTop: dest
				}, opts.speed);
			}
		}
	};
	ScrollTo.prototype.go = function () {
		var dest = this.opts.dest;
		if($(window).scrollTop() != dest){//没有达到目的
			this.$el.scrollTop(dest);
		}
	};
	ScrollTo.DEFAULTS = {//没有通过.prototype定义的属性和方法则只能在构造函数内部使用，不会暴露给外部实例，内存中也只保留一份
		dest: 0,
		speed: 800
	};
	return {
		ScrollTo: ScrollTo
	};
});