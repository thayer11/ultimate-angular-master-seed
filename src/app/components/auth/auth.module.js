angular
  .module('components.auth', [
    'ui.router',
    'firebase'
  ])
  
  .config(function($firebaseRefProvider) {
  	

  	var config = {
	    apiKey: "AIzaSyCd6RbQKPicFJWyTdyImx3lEWF2c0MCLhk",
	    authDomain: "contacts-manager-67874.firebaseapp.com",
	    databaseURL: "https://contacts-manager-67874.firebaseio.com",
	    storageBucket: "contacts-manager-67874.appspot.com",
	    messagingSenderId: "525437099580"
	  };
  	
  	$firebaseRefProvider
  		.registerUrl({
  			default: config.databaseURL,
  			contacts: config.databaseURL + '/contacts'
  		});
  	
  	firebase.initializeApp(config);
  });
