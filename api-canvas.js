AFRAME.registerComponent('api-ui', {
  init: function () {
    var url = 'https://restaurant-list.herokuapp.com/api/v1/restaurants';
    var canvas = document.querySelector('#restaurants-list');
    var title = '\nRestaurants\n'
    var listText = '...';
    var thisEl = this.el;
    // console.log(thisEl.getAttribute('id'));
    // console.log(thisEl.getAttribute('class'));

    if (thisEl.getAttribute('id') == canvas.id){
      getList(url);
    } else if ( thisEl.getAttribute('class') == 'api-button' ){
      thisEl.addEventListener('click', function (event) {
        console.log('Calling API...');

        getDetails(1);
      });
    }

    function getList(url){
      // make api request here
      return fetch(url)
        .then(response => response.json())
        .then((data) => {
          listText = formatList(data);
          writeToCanvas();
          console.log('api data: ' + data);
      });
    };

    function formatList(data){
      var li = '';
      var posY = 0;

      if (data[0]){
        for (i in data){
          // enumerate restaurants:
          li = li + ' - ' + data[i].name + ', ' + data[i].address + '\n ';
          console.log(data[i].id);
          posY = -0.2 * i;
          create3dButton( i.toString(), posY);
        }
      } else if (data['comments']){
          li = 'Reviews for ' + data['name'] + ', in ' + data['address'] + ':\n';
          create3dButton('Back', posY);
        for (i in data['comments']){
          li = li + ' - ' + data['comments'][i].content + '\n '
        }
      } else {
        for (i in data){
          li = li + ' - ' + data[i].name + ', ' + data[i].address + '\n '
        }
      }

      return li;
    }

    function writeToCanvas(){
      // must reset plane to make it adjust to text:
      canvas.setAttribute('geometry', {
        primitive: 'plane',
        width: 'auto',
        height: 'auto'
      });
      canvas.setAttribute('text', {
        width: 4,
        value: title + listText,
        color: 'black',
        align: 'left'
      });
    };

    function getDetails(id){
      var urlWithId = url + '/' + id;
      getList(urlWithId);
      writeToCanvas();
    };

    function create3dButton(string, posY){
      console.log('creating button...');
      var btn = document.createElement('a-entity');
      btn.setAttribute('geometry', {
        primitive: 'plane',
        width: 'auto',
        height: 'auto'
      });
      btn.setAttribute('text', {
        width: 4,
        value: string,
        color: 'black',
        align: 'left'
      });
      btn.setAttribute('position', {
        x: 0.2,
        y: posY,
        z: 0.01
      });
      btn.setAttribute('class', 'api-button');
      btn.setAttribute('api-ui');
      canvas.appendChild(btn);
    }

  }
});
