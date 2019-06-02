'Use strict';
//alert("rendering 0: models");
var app = app || {};
app.GreetModel = Backbone.Model.extend({
	defaults: {
		Message: ""
	}
});

    app.Book = Backbone.Model.extend({
	defaults: {
		ID: "",
		BookName: ""
	},
	idAttribute: "ID",
	validate: function (attr) {
		if (!attr.BookName) {
			return "Invalid BookName supplied!";
		}
	},
	initialize: function () {
		//alert('Book has been initialized');
		// lets listen to model change and update ourselves
		this.listenTo(this.model, "change", this.render); //this is tested with set method
	}
});

    app.BooksCollection = Backbone.Collection.extend({
	model: app.Book,

	initialize: function () {
		//alert('Books collection has been created');
	}
});



