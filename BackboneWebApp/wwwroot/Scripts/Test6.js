'Use strict';
//alert("rendering...: Events");
var app = app || {};

 app.NotifyMebook = new app.Book({ ID: 100, BookName: "Book For Event Test" });
//_.extend(app.Book, Backbone.Events);
var ShowMeWhatHappened = function (msg) {
	alert("This is a proof a proof that something did happened." + msg);
};

app.NotifyMebook.on("SomethingHappened", ShowMeWhatHappened);

 app.NotifyMe = function (msg) {
	app.NotifyMebook.trigger("SomethingHappened",  msg);
}