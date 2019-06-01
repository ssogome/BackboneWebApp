'Use strict';
//alert("rendering 0: models");

var GreetModel = Backbone.Model.extend();

var Book = Backbone.Model.extend({
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

var BooksCollection = Backbone.Collection.extend({
	model: Book,

	initialize: function () {
		//alert('Books collection has been created');
	}
});



