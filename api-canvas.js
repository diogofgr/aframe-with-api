AFRAME.registerComponent('api-canvas', {
  init: function () {
    var url = 'http://...';
    var canvas = this.el;
    var title = 'Restaurants\n'
    var list = getList(url);
    canvas.setAttribute('text', {
      width: 4,
      value: title + list,
      color: 'black',
      align: 'center'
    });

    function getList(url){
      // make api request here
      return 'first restaurant\n second restaurant'
    };
  }
});
