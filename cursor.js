AFRAME.registerComponent('scale-on-mouseenter', {
  schema: {
    url: {default: '#'}
  },
  init: function () {
    var data = this.data;
    this.el.addEventListener('mouseenter', function () {
      this.setAttribute('scale', data.to);
    });

    function getDetails(url){
      // make api request here
      return fetch(url)
        .then(response => response.json())
        .then((data) => {
          listText = formatList(data);
          writeToCanvas();
          console.log('api data: ' + data);
      });
    };
  }
});
