<template>
	<div class="intro-box">
		<section v-for="item in list" @click="zoomInOrOut($event)">{{item.section}}</section>
	</div>
</template>
<script>
	require('../style/intro.scss');
	// import axios from 'axios'
	module.exports = {
		data: function (){
			return {
				list: [],
				level:1,
				mouseX:0,
				mouseY:0,
				rollTimeout:-1,
				rollInterval:-1
			}
		},
		mounted: function() {
			this.$nextTick( function(){
				this.getList()
			})
		},
		methods: {
			getList: function() {
				let _this = this
				// axios.get('src/data/intro.json')
				// 	.then((res) => {
						this.list = require('../data/intro.json')

						//如果当前浏览器支持transform，则加transfrom
						if(_this.isSupportsTransforms()){
							document.body.style.transition = 'transfrom 0.8s ease'
							document.body.style.OTransition = '-o-transform 0.8s ease'
							document.body.style.msTransition = '-ms-transform 0.8s ease'
							document.body.style.MozTransition = '-moz-transform 0.8s ease'
							document.body.style.WebkitTransition = '-webkit-transform 0.8s ease'
						}

						document.addEventListener( 'keyup', function( event ) {
							if( _this.level !== 1 && event.keyCode === 27 ) {
								_this.zoomOut()
							}
						})

						document.addEventListener( 'mousemove', function( event ) {
							if( _this.level !== 1 ) {
								// clientX事件属性返回当事件被触发时鼠标指针相对于浏览器页面（客户区）的水平坐标
								// clientY事件属性返回当事件被触发时鼠标指针相对于浏览器页面（客户区）的垂直坐标
								_this.mouseX = event.clientX
								_this.mouseY = event.clientY
							}
						});
					// })
			},
			isSupportsTransforms: function() {
				return  'WebkitTransform' in document.body.style ||
						'MozTransform' in document.body.style ||
						'msTransform' in document.body.style ||
						'OTransform' in document.body.style ||
						'transform' in document.body.style
			},
			getScrollOffset: function() {
				// pageXOffset 设置或返回当前页面相对于窗口显示区左上角的 X 位置。
				// pageYOffset 设置或返回当前页面相对于窗口显示区左上角的 Y 位置。
				return {
					x:window.scrollX !== undefined ? window.scrollX : window.pageXOffset,
					y:window.scrollY !== undefined ? window.scrollY : window.pageYOffset
				}
			},
			magnify: function(cX,cY,scrollOffsetX,scrollOffsetY,scale) {
				let origin = cX + 'px ' + cY +'px'
				let transform = 'translate('+ -scrollOffsetX +'px,'+ -scrollOffsetY +'px) scale('+ scale +')'
			 	document.body.style.transformOrigin = origin
			 	document.body.style.transform = transform

			 	this.level = scale
			},
			zoomOut: function(){
				let _this = this
				let scrollOffset = _this.getScrollOffset();

				clearTimeout( _this.rollTimeout );
				clearInterval( _this.rollInterval );

				_this.magnify(scrollOffset.x,scrollOffset.y,0,0,1)
				_this.level = 1
			},
			zoomInOrOut: function(event) {
				let _this = this
				let padding = 20
				let target = event.target
				let element = {}

				if(_this.level == 1){
					//放大
					element.x = target.getBoundingClientRect().left - padding
					element.y = target.getBoundingClientRect().top - padding
					element.w = target.getBoundingClientRect().width + (padding * 2)
					element.h = target.getBoundingClientRect().height + (padding * 2)

					element.scale = Math.max(Math.min(window.innerWidth / element.w,window.innerHeight / element.h),1)

					if(element.scale > 1){
						element.x *= element.scale
						element.y *= element.scale

						let scrollOffset = _this.getScrollOffset();

						_this.magnify(scrollOffset.x,scrollOffset.y,element.x,element.y,element.scale)

						_this.rollTimeout = setTimeout( function() {
							_this.rollInterval = setInterval( _this.roll, 1000 / 60 );
						}, 800 );
					}
				}else{
					//缩小
					_this.zoomOut()
				}
			},
			//页面滚动
			roll: function(){
				let _this = this
				let range = 0.12
				let rangeX = window.innerWidth * range
				let rangeY = window.innerHeight * range
				let scrollOffset = _this.getScrollOffset()

				// Up
				if( _this.mouseY < rangeY ) {
					window.scroll( scrollOffset.x, scrollOffset.y - ( 1 - ( _this.mouseY / rangeY ) ) * ( 14 / _this.level ));
				}
				// Down
				else if( _this.mouseY > window.innerHeight - rangeY ) {
					window.scroll( scrollOffset.x, scrollOffset.y + ( 1 - ( window.innerHeight - _this.mouseY ) / rangeY ) * ( 14 / _this.level ) );
				}
				// Left
				if( _this.mouseX < rangeX ) {
					window.scroll( scrollOffset.x - ( 1 - ( _this.mouseX / rangeX ) ) * ( 14 / _this.level ), scrollOffset.y );
				}
				// Right
				else if( _this.mouseX > window.innerWidth - rangeX ) {
					window.scroll( scrollOffset.x + ( 1 - ( window.innerWidth - _this.mouseX ) / rangeX ) * ( 14 / _this.level ), scrollOffset.y );
				}
			}
		}
	}
</script>