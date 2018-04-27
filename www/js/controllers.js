


angular.module('starter.controllers',  ['audioPlayer', 'ngSanitize'])

.controller('LoginCtrl', function($scope, $state,  $ionicModal ){ //}, $ionicHistory) {
  $scope.data = {};

  //fb object
/*
  var rootRef = firebase.database().ref().child('angular');
  var ref = rootRef().child('object');
  this.object = $firebaseObject(ref);

*/

  $scope.goToMainMenu = function(){
    if ($scope.data.username == 'mike' && $scope.data.password == 'password') {
      $state.go('main-menu');
    } else {
      $scope.modal.show();
    }
  }

  $scope.goToRegister = function(){
    $state.go('register');
  }

  $ionicModal.fromTemplateUrl('templates/login-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });
    $scope.openModal = function() {
      $scope.modal.show();
    };
    $scope.closeModal = function() {
      $scope.modal.hide();
    };
    // Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hidden', function() {
      // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
      // Execute action
    });

})

.controller('RegisterCtrl', function ($scope, $ionicHistory) {
  $scope.myGoBack = function () {
      $ionicHistory.goBack();
  };
})

.controller('MainMenuCtrl', function ($scope, $state, $ionicHistory) {
    $scope.myGoBack = function () {
        $ionicHistory.goBack();
    };
    $scope.goToRecipes = function(){
      $state.go('recipes');
    };
    $scope.goToAccount = function(){
      $state.go('account');
    };

    $scope.goToVidMenu = function() {
      $state.go('videomenu');
     };

     $scope.goToChats = function() {
       $state.go('chats');
      };

      $scope.goToAudio = function() {
        $state.go('audio');
       };


})



.controller('ChatsCtrl', function($scope, Chats, $ionicLoading) {
  $ionicLoading.show();
  Chats.all().then(function(chats) {
      $scope.chats = $scope.chats = chats;
      $ionicLoading.hide();
  });

  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('vidMenuCtrl', function ($scope, $state, $ionicHistory) {
   $scope.myGoBack = function () {
        $ionicHistory.goBack();
    };
})

.controller('vidCtrl', function ($scope, $state, $ionicHistory) {
   $scope.myGoBack = function () {
        $ionicHistory.goBack();
    };
   $scope.goToVideo = function() {
    $state.go('video');
   };
})

.controller('AccountCtrl', function($scope,$state) {
  $scope.settings = {
    enableFriends: true
  };

  $scope.logOut = function() {
    $state.go('login');
   };

})









//   audio

//var app = angular.module('App', ['audioPlayer', 'ngSanitize']);
.controller('Ctrl', ['$scope',
  function($scope, audioPlayer) {
    //init playlist for audioPlayer
    $scope.audio = null;
    $scope.audioPlaylist = [];

    $scope.play = function() {
      $scope.audio.play();
      console.log(audioPlayer);
    };

    $scope.pause = function() {
      $scope.audio.pause();
      console.log(audioPlayer);
    };

  }

])
.controller('Ctrl', function($scope, $sce) {
  $scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  }
});
