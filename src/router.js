module.exports = {
	routes: [
		{
			path:'/intro',
			component: resolve => require.ensure([], () => resolve(require('./views/intro.vue')), 'intro')
		}
	]
}