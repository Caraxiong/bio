module.exports = {
	routes: [
		{
			path:'/intro',
			component: resolve => require.ensure([], () => resolve(require('./views/intro.vue')), 'common')
		},
		{
			path:'/game',
			component: resolve => require.ensure([], () => resolve(require('./views/game.vue')), 'common')
		}
	]
}