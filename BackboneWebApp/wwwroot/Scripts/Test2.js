'Use strict';

//alert("redenring...2: No route case");

var ContainerView = Backbone.View.extend({		
		myChildView: null,

		render: function () {
			this.$el.html("Greeting Area");

			this.$el.append(this.myChildView.$el);
			return this;
		}
	});


	var View1 = Backbone.View.extend({

		initialize: function () {
			this.render();
		},

		render: function () {
			this.$el.html(this.model.get('Message') + " from the View 1");
			return this;
		}
	});

	var View2 = Backbone.View.extend({

		initialize: function () {
			this.render();
		},

		render: function () {
			this.$el.html(this.model.get('Message') + " from the View 2");
			return this;
		}
	});

	var View3 = Backbone.View.extend({

		initialize: function () {
			this.render();
		},

		render: function () {
			this.$el.html(this.model.get('Message') + " from the View 3");
			return this;
		}
	});	

function showView1() {
		if (view1 == null) {
			view1 = new View1({ model: greeting });
		}

		container.myChildView = view1;
		container.render();
	}

	function showView2() {
		if (view2 == null) {
			view2 = new View2({ model: greeting });
		}

		container.myChildView = view2;
		container.render();
	}

	function showView3() {
		if (view3 == null) {
			view3 = new View3({ model: greeting });
		}

		container.myChildView = view3;
		container.render();
	}
var view1 = null;
var view2 = null;
var view3 = null;
