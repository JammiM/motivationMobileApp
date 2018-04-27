angular.module('starter.services', [])

.factory('Chats', function($http) {

  return {
    all: function() {
			return $http.get("https://cors-anywhere.herokuapp.com/https://jammyandsammy.000webhostapp.com/motivation_files/data/recipesTest.json").then(function(response){
				chats = response.data;
        //console.log(chats);
				return chats;
			});
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
