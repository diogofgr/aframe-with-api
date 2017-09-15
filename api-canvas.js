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
      fetch("https://swapi.co/api/people/")
        .then(response => response.json())
        .then((data) => {
          console.log(data.results);
      });
      return 'first restaurant\n second restaurant'
    };
  }
});
