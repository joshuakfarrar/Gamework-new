require(["jquery", "app"], function($, App) {
  var app, game;

  var initApp = function() {
    $(document).ready(function() {
      app = new App();
      app.center();

      app.tryStartingGame('Zipp');

      initGame();
    });
  }

  var initGame = function() {
    require(['game'], function(Game) {
      var canvas = document.getElementById("entities")
        , background = document.getElementById("background")
        , foreground = document.getElementById("foreground")
        , ui = document.getElementById("ui")

      game = new Game(app);
      game.setup(canvas, background, foreground, ui);
      app.setGame(game);

      game.loadMap();
    });
  }

  initApp();
});
