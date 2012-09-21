define(["jquery"], function($) {

  var App = Class.extend({
    init: function() {
      console.log('App init');
      this.ready = false;
    },

    center: function() {
      window.scrollTo(0, 1);
    },

    setGame: function(game) {
      this.game = game;
      this.ready = true;
    },

    canStartGame: function() {
      return this.game;
    },

    startGame: function(username, starting_callback) {
      if (starting_callback) {
        starting_callback();
      }
      this.start(username);
    },

    start: function(username) {
      console.log('Starting game!');
      if (username && !this.game.started) {
        this.center();
        this.game.run(function() {});
      }
    },

    tryStartingGame: function(username, starting_callback) {
      console.log('Attempting to start game');
      var self = this;
      if (username !== '') {
        if (!this.ready || !this.canStartGame()) {
          var watchCanStart = setInterval(function() {
            console.log('Watching for ready signal..');
            if (self.canStartGame()) {
              clearInterval(watchCanStart);
              self.startGame(username, starting_callback);
            }
          }, 100);
        }
        else {
          this.startGame(username, starting_callback);
        }
      }
    }
  });

  return App;
});
