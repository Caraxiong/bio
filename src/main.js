const Vue = require('vue');
const VueRouter = require('vue-router');
const VueResource = require('vue-resource');
// const axios = require('axios');
const App = require('./app.vue');
Vue.use(VueRouter);
Vue.use(VueResource);
//use axios
// Vue.use(axios);
const router = new VueRouter(require('./router'));
new Vue({
	el:'#app',
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