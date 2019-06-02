'Use strict';
var app = app || {};
//alert("redenring...2: No route case");

	app.ContainerView = Backbone.View.extend({		
		myChildView: null,

		render: function () {
			this.$el.html("Greeting Area");

			this.$el.append(this.myChildView.$el);
			return this;
		}
	});


	app.View1 = Backbone.View.extend({

		initialize: function () {
			this.render();
		},

		render: function () {
			this.$el.html(this.model.get('Message') + " from the View 1");
			return this;
		}
	});

	app.View2 = Backbone.View.extend({

		initialize: function () {
			this.render();
		},

		render: function () {
			this.$el.html(this.model.get('Message') + " from the View 2");
			return this;
		}
	});

	app.View3 = Backbone.View.extend({

		initialize: function () {
			this.render();
		},

		render: function () {
			this.$el.html(this.model.get('Message') + " from the View 3");
			return this;
		}
	});	

var view1 = null;
var view2 = null;
var view3 = null;
