window.Todos = Ember.Application.create();


Todos.ApplicationAdapter = DS.FirebaseAdapter.extend({
  firebase: new Firebase('https://to-do-ember.firebaseio.com/')
});


// Todos.ApplicationAdapter = DS.LSAdapter.extend({
//   namespace: 'todos-emberjs'
// });
