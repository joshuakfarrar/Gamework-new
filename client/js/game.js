define(["renderer", "map"], function(Renderer, Map) {
  var Game = Class.extend({
    init: function(app) {
      console.log('Game init');
      this.app = app;
      this.hasStarted = false;
    },
    
    setup: function(canvas, background, foreground, ui) {
      this.setRenderer(new Renderer(this, canvas, background, foreground, ui));
    },
    
    setRenderer: function(renderer) {
      this.renderer = renderer;
    },
    
    loadMap: function() {
      console.log('Loading map..');
      this.map = new Map(this);
    },
    
    run: function(started_callback) {
      console.log('Game.run()! Map should be loaded..');
      var self = this;

      self.connect(started_callback);
    },

    connect: function(started_callback) {
      if (!this.hasStarted) {
        this.start();
        started_callback();
      }
    },

    start: function() {
      this.tick();
      this.hasStarted = true;
      console.log('Game loop started :3');
    },

    tick: function() {
      console.log('Tick');
      this.currentTime = new Date().getTime();

      if (this.connected) {
        console.log('Tock');
      }

      if (!this.isStopped) {
        // V-Sync'd frame animations
        window.requestAnimationFrame(this.tick.bind(this));
      }
    }
  });

  return Game;
});
