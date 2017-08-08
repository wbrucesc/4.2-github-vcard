let $ = require('jquery');
let handlebars = require('handlebars');
let token = require('./githubtoken.js').token;

if(token){
let options = {
  headers: {
    'Authorization': 'token ' + token
  }
};
}else{
  var options = {};
}

init();



function displayProfileData(data){
  let $profileContainer = $('#profile-container');
  let source = $('#profile-template').html();
  let template = handlebars.compile(source);

  $profileContainer.append(template(data));
}


function init(){
  fetch('https://api.github.com/users/wbrucesc', options).then(function(response){
    return response.json();
  }).then (function(data){
    console.log(data);
    displayProfileData(data);
  });
}
