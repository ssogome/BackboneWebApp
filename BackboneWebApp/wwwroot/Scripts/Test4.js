'Use strict';
var app = app || {};
//alert("rendering 4...: Routes");
  app.myRouter = Backbone.Router.extend({
	greeting: null,
	container: null,
	view1: null,
	viewRoute2: null,
	view3: null,

	initialize: function () {
		this.greeting = new app.GreetModel({ Message: "Hello world from Route class instance!  " });
		this.container = new app.ContainerView({ el: $("#rAppContainer"), model: this.greeting });
	},

	routes: {
		"": "handleRoute1",
		"view1": "handleRoute1",
		"viewRoute2": "handleRoute2",
		"view3": "handleRoute3"
	},
	handleRoute1: function () {
		if (this.view1 === null) {
			this.view1 = new app.View1({ model: this.greeting });
		}

		this.container.myChildView = this.view1;
		this.container.render();
	},
	 handleRoute2: function () {
		if (this.viewRoute2 === null) {
			this.viewRoute2 = new app.View2({ model: this.greeting });
		}

		this.container.myChildView = this.viewRoute2;
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