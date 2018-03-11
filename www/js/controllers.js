angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $state,  $ionicModal){ //}, $ionicHistory) {
//  $scope.myGoBack = function () { $ionicHistory.goBack(); };

  $scope.data = {};

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

})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
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

});
