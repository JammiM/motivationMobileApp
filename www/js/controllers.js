angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $state){ //}, $ionicHistory) {
//  $scope.myGoBack = function () { $ionicHistory.goBack(); };
  $scope.goToMainMenu = function(){
    $state.go('tab.main-menu');
  }
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

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
