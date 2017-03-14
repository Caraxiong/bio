<template>
	<div>
		<div class="btn-b">
			<input type="text" v-model="number" placeholder="请输入数值">
			<button class="btn" @click="generate">随机生成</button>
			<button class="btn" @click="extract" v-show="isTake">随机抽取</button>
			<button class="btn" @click="contrast" v-show="isCompare">对比</button>
		</div>
		<div v-for="item in imgs" class="img-b">
			<img :src="item.url" alt="图片">
		</div>
		<!-- 生成层 -->
		<div class="overlay" v-show="isShow" @click="isShow = false">
			<div class="game-d">
				<img :src="item.url" alt="图片" v-for="item in rImgs">
			</div>
			<div class="game-o" v-show="isGoCompare">
				<img :src="item.url" alt="图片" v-for="item in originalrImgs">
			</div>
		</div>
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
				isShow : false,
				isTake : false,
				isCompare : false,
				isGoCompare : false,
				number : ''
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
				for(let i = 0;i < num;i++){
					if(len > 0){
						//产生一个随机索引
						//Math.floor:下舍入
						let randomIndex = Math.floor(Math.random()*len)
						//获取随机生成的元素
						let target = document.querySelectorAll(".img-b")[randomIndex]
						//图片宽度
						let width = 240
						let height = 240
						//计算元素位置到页面中心的距离
						let left = target.getBoundingClientRect().left - (window.innerWidth - width) / 2
						let top = target.getBoundingClientRect().top - (window.innerHeight - height) / 2
						target.style.transform = 'translate('+ -left +'px,' + -top+'px)'
						target.style.opacity = 0

						if(rArr.indexOf(arr[randomIndex]) !== '-1'){
							rArr.push(arr[randomIndex])
						}else{
							i -= 1
						}
					}else{
						break
					}
				}
				return rArr
			},
			//随机删除一个图片
			randomTake: function(arr){
				let _this = this
				let len = arr.length
				let randomIndex = Math.floor(Math.random()*len)
				let img = arr.splice(randomIndex,1)
				_this.originalrImgs = arr.concat(img);
				return arr
			},
			//生成图片及动画
			generate: function() {
				let _this = this
				if(_this.number && _this.number < _this.imgs.length){
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
				_this.isGoCompare = true
				for(let i = oLen-1;i >=0 ;i--){
					for(let j= len -1;j >=0;j--){
						if(_this.originalrImgs[i] == _this.rImgs[j]){
							_this.originalrImgs.splice(i,1)
							_this.rImgs.splice(j,1)
						}
					}
				}
			}
		}
	}
</script>