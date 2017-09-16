AFRAME.registerComponent('api-canvas', {
  init: function () {
    var url = 'https://swapi.co/api/people/';
    var url = 'https://restaurant-list.herokuapp.com/api/v1/restaurants';
    var canvas = this.el;
    var title = 'Restaurants\n'
    var list = getList(url);
    var listText = '...';

    function getList(url){
      // make api request here
      return fetch(url)
        .then(response => response.json())
        .then((data) => {
          listText = data;
          writeToCanvas();
          console.log('api data: ' + data);
      });
    };

    function writeToCanvas(){
      canvas.setAttribute('text', {
        width: 4,
        value: title + listText,
        color: 'black',
        align: 'center'
      });
    };

  }
});
