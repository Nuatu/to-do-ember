Todos.Router.map(function() {
  this.resource('todos', { path: '/' }, function () {
    // addtional child routes will go here later
  });
});


Todos.TodosRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('todo');
  }
});

Todos.TodosIndexRoute = Ember.Route.extend({
  model: function() {
    return this.modelFor('todos');
  }
});
