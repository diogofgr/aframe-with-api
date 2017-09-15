AFRAME.registerComponent('api-canvas', {
  init: function () {
    var canvas = this.el;
    var text = 'Restaurants'
    canvas.setAttribute('text', {
      width: 4,
      value: text,
      color: 'black',
      align: 'center'
    });
  }
});
