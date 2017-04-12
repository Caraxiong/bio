const Vue = require('vue');
const VueRouter = require('vue-router');
const VueResource = require('vue-resource');
// const Vuex = require('vuex');
const App = require('./app.vue');
Vue.use(VueRouter);
Vue.use(VueResource);
// Vue.use(Vuex);
//use axios
// Vue.use(axios);
const router = new VueRouter(require('./router'));
new Vue({
	el:'#app',
// const axios = require('axios');
	router:router,
	render:h => h(App),
	watch: {
	  	'$route' (to, from) {
		    const toDepth = to.path.split('/').length
		    const fromDepth = from.path.split('/').length
		    this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
	  	}
	}
})

// const store = new Vuex.store({
// 	state: {
// 		count: 0
// 	},
// 	mutations: {
// 		increment(state){
// 			state.count++
// 		}
// 	}
// })
// store.commit('increment')
// console.log(store.state.count)