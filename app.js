var pageCounter = 1;
var btn = document.getElementById('btn');
var container = document.getElementById('container');
btn.addEventListener('click', function() {

  var http = new XMLHttpRequest();
  http.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');

  http.onload = function() {
    if(http.status >= 200 && http.status < 400) {
      var data = JSON.parse(http.responseText);
      insertJson(data)
    }else {
      console.log('Server returned error');
    }

  }
  http.onerror = function() {
    console.log("Connection error");
  }
   http.send();
   pageCounter ++;

   if(pageCounter > 3) {
     btn.classList.add('hide-me');
   }
});

function insertJson(dataOnTheFly) {
  var htmlString = "";

  for(i = 0; i < dataOnTheFly.length; i ++){
    htmlString += "<p>" + dataOnTheFly[i].name + " is a " + dataOnTheFly[i].species + " likes to eat";
    for(ii = 0; ii < dataOnTheFly[i].foods.likes.length; ii++) {
      if(ii == 0) {
        htmlString += dataOnTheFly[i].foods.likes[ii];
      }else {
        htmlString += " and " + dataOnTheFly[i].foods.likes[ii];
      }
    }

    htmlString += " and dislikes ";

    for(ii = 0; ii < dataOnTheFly[i].foods.dislikes.length; ii++) {
      if(ii == 0) {
        htmlString += dataOnTheFly[i].foods.dislikes[ii];
      }else {
        htmlString += " and " + dataOnTheFly[i].foods.dislikes[ii];
      }
    }

    htmlString += "</p>";
  }
  container.insertAdjacentHTML('beforeend', htmlString);
}
