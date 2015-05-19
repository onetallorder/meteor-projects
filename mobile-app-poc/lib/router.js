Router.configure({
	layoutTemplate: 'layout'
})

Router.route('/', function() {
	this.render('Home', {
		data: function() {return true}
	})
})