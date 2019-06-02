'Use strict';
//alert("rendering ...: passing parameter to route");
var app = app || {};

  app.myparamRouter = Backbone.Router.extend({

	greeting: null,
	container: null,
	view1: null,
	view2: null,
	view3: null,

	initialize: function () {
		this.greeting = new app.GreetModel({ Message: "Hello world from passing parameter to Route" });
		this.container = new app.ContainerView({ el: $("#rpAppContainer"), model: this.greeting });
	},

	routes: {
		"": "handleRoute1",
		"view/:viewid": "handleRouteAll"
	},

	handleRouteAll: function (viewid) {
		if (viewid == 1) {
			this.handleRoute1();
		}
		else if (viewid == 2) {
			this.handleRoute2();
		}
		else if (viewid == 3) {
			this.handleRoute3();
		}
	},
	handleRoute1: function () {
		if (this.view1 === null) {
			this.view1 = new app.View1({ model: this.greeting });
		}

		this.container.myChildView = this.view1;
		this.container.render();
	},
	handleRoute2: function () {
		if (this.view2 === null) {
			this.view2 = new app.View2({ model: this.greeting });
		}

		this.container.myChildView = this.view2;
		this.container.render();
	},
	handleRoute3: function () {
		if (this.view3 === null) {
			this.view3 = new app.View3({ model: this.greeting });
		}

		this.container.myChildView = this.view3;
		this.container.render();
	}
});