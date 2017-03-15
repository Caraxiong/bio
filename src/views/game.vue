<template>
	<div>
		<div class="btn-b">
			<input type="text" v-model="number" placeholder="请输入数值">
			<button class="btn" @click="generate" v-show="isRandom">随机生成</button>
			<button class="btn" @click="extract" v-show="isTake">随机抽取</button>
			<button class="btn" @click="contrast" v-show="isCompare">对比</button>
		</div>
		<div v-for="item in imgs" class="img-b">
			<img :src="item.url" :title="item.des">
		</div>
		<div class="overlay" v-show="isShow"></div>
	</div>
</template>
<script>
	require('../style/game.scss');
	import axios from 'axios'
	module.exports = {
		data: function() {
			return {
				imgs : [],
				rImgs : [],
				originalrImgs : [],
				isRandom : true,
				isShow : false,
				isTake : false,
				isCompare : false,
				number : '',
				rmImg:''
			}
		},
		mounted:function() {
			this.$nextTick(function(){
				this.getImgs()
			})
		},
		methods: {
			getImgs: function() {
				axios.get('src/data/game.json')
					.then((res) => {
						this.imgs = res.data.list2
					})
			},
			//随机生成几个图片
			randomImgs: function(arr,num) {
				let len = arr.length
				let rArr = []
				//图片宽度
				let width = 262
				let height = 262
				let scrollT = document.documentElement.scrollTop || document.body.scrollTop
				let wL = (window.innerWidth - width) / 2
				let wT = scrollT > 0 ? (window.innerHeight - height) / 2 + scrollT : (window.innerHeight - height) / 2
				
				for(let i = 0;i < num;i++){
					if(len > 0){
						//产生一个随机索引
						//Math.floor:下舍入
						let randomIndex = Math.floor(Math.random()*len)
						//获取随机生成的元素
						let target = document.querySelectorAll(".img-b")[randomIndex]
						//计算元素位置到页面中心的距离
						let left = target.getBoundingClientRect().left - wL
						let top = scrollT > 0 ? target.getBoundingClientRect().top - wT + scrollT : target.getBoundingClientRect().top - wT

						target.style.zIndex = 1002
						target.style.transform = 'translate('+ -left +'px,' + -top+'px)'
						// target.style.opacity = 0

						if(rArr.indexOf(arr[randomIndex]) !== '-1'){
							rArr.push({"index":randomIndex,"val":arr[randomIndex]})
						}else{
							i -= 1
						}
					}else{
						break
					}
				}
				//页面中心背景框
				let div = document.createElement("div");
				div.setAttribute("id","myDiv")
				div.style.width = width+'px'
				div.style.height = height+'px'
				div.style.position = 'absolute'
				div.style.left = wL+'px'
				div.style.top = wT+'px'
				div.style.background = '#fff'
				div.style.zIndex = 1001
				document.body.appendChild(div)

				return rArr
			},
			//随机删除一个图片
			randomTake: function(arr){
				let _this = this
				let len = arr.length
				let randomIndex = Math.floor(Math.random()*len)
				let index = arr[randomIndex].index
				_this.animate(randomIndex,arr,document.querySelectorAll(".img-b"),0,0)

				_this.rmImg = arr.splice(randomIndex,1)

				_this.originalrImgs = arr.concat({"index":index,"val":arr[randomIndex],"left":0,"top":0});
				return arr
			},
			//index:在数组中的索引,arr:所操作的数组,imgDiv:页面所有dom节点,opacity:是否显示
			animate: function(i,arr,imgDiv,opacity,time){
				//取到要删除的元素在所有图片中的位置索引
				let n = arr[i].index
				let target = imgDiv[n]
				target.style.zIndex = 1
				target.style.transform = 'translate('+ 0 +'px,' + 0+'px)'
	            target.style.transition = 'all '+ time +'s ease'
				target.style.opacity = opacity
			},
			//放大动画
			zoomIn: function(img,imgDiv){
				let n = img[0].index
				let target = imgDiv[n]
				target.style.transform = 'scale(2)'
	            target.style.transition = 'all .8s ease'
			},
			//还原动画
			zoomOut: function(img,imgDiv){
				let n = img[0].index
				let target = imgDiv[n]
				target.style.transform = 'scale(1)'
	            target.style.transition = 'all 0s ease'
			},
			//生成图片及动画
			generate: function() {
				let _this = this
				//初始化原来数据
				_this.isShow = false
				_this.isTake = false
				_this.isCompare = false
				if(_this.rmImg){
					_this.zoomOut(_this.rmImg,document.querySelectorAll(".img-b"))
				}
				if(_this.number && _this.number < _this.imgs.length){
					_this.isRandom = false
					_this.isShow = true
					_this.isTake = true
					_this.rImgs = _this.randomImgs(_this.imgs,_this.number)
				}else{
					alert("请输入正确数值")
				}
			},
			//抽取
			extract: function(arr) {
				let _this = this
				_this.isTake = false
				_this.isCompare = true
				_this.randomTake(_this.rImgs)
			},
			//对比
			contrast: function(){
				let _this = this
				let oLen = _this.originalrImgs.length
				let len = _this.rImgs.length
				let myArr = []

				_this.isShow = false
				_this.isCompare = false
				_this.isRandom = true
				document.body.removeChild(document.getElementById("myDiv"))

				_this.originalrImgs.forEach(function(item,i){
					myArr.push(item)
				})
				for(let i = oLen-1;i >=0 ;i--){
					for(let j= len -1;j >=0;j--){
						if(_this.originalrImgs[i] == _this.rImgs[j]){
							_this.originalrImgs.splice(i,1)
							_this.rImgs.splice(j,1)
						}
					}
					(function(){         
			       	  	_this.animate(i,myArr,document.querySelectorAll(".img-b"),1,0.8)
				   	})(i);//调用时参数
				}

			   		
			   	_this.zoomIn(_this.rmImg,document.querySelectorAll(".img-b"))
			}
		}
	}
</script>