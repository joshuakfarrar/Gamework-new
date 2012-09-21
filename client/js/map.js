define([], function() {
  var Map = Class.extend({
    init: function(game) {
      console.log('Map init');
      this.game = game;
      this.mapLoaded = false;
      this._loadMap();
    },

    _loadMap: function() {
      console.log('Loading map via Ajax or Websocket..');
    }
  });

  return Map;
});
