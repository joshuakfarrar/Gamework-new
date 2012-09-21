define([], function() {
  var Renderer = Class.extend({
    init: function(game, canvas, background, foreground, ui) {
      console.log('Renderer init');
      this.game = game;
      this.context = (canvas && canvas.getContext) ? canvas.getContext("2d") : null;
      this.background = (background && background.getContext) ? background.getContext("2d") : null;
      this.foreground = (foreground && foreground.getContext) ? foreground.getContext("2d") : null;
      this.ui = (ui && ui.getContext) ? ui.getContext("2d") : null;

      console.log('Got contexts', this.context, this.background, this.foreground, this.ui);

      this.canvas = canvas;
      this.backcanvas = background;
      this.forecanvas = foreground;
      this.uicanvas = ui;

      this.FPS = 50;

      this.lastTime = new Date();
      this.frameCount = 0;
      this.maxFPS = this.FPS;
      this.realFPS = 0;

      //Yes. This is dog.
      //this.drawBackground(this.context, '#000');
    },
    getWidth: function() {
      return this.canvas.width;
    },
    getHeight: function() {
      return this.canvas.height;
    },
    drawBackground: function(ctx, color) {
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    },
    clearScreen: function(ctx) {
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  });

  return Renderer;
});
