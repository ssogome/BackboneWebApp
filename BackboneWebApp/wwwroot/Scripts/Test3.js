'Use strict';
var app = app || {};
//alert("rendering 3 ...: Collections, events and tempalate");
  app.bookView2 = Backbone.View.extend({
	model: app.Book,
	tagName: 'li',
	template: '',
	events: {
		'click': "itemClicked"
	},
	itemClicked: function () {
		alert('clicked to get the book name: ' + this.model.get('BookName'));
	},
	initialize: function () {
		this.template = _.template($('#bookItem').html());		
	},	
	render: function () {
		this.$el.html(this.template(this.model.attributes));
		return this;
	}
});

  app.bookListView2 = Backbone.View.extend({
	model: app.BooksCollection,
	initialize: function () {
		// lets listen to model change and update ourselves
		this.listenTo(this.model, "add", this.modelUpdated);
	},
	modelUpdated: function () {		
		this.render();
	},
	render: function () {
		this.$el.html(); // lets render this view

		for (var i = 0; i < this.model.length; ++i) {
			// lets create a book view to render
			var m_bookView = new app.bookView2({ model: this.model.at(i) });

			// lets add this book view to this list view
			this.$el.append(m_bookView.$el);
			m_bookView.render(); // lets render the book           
		}

		return this;
	}
});