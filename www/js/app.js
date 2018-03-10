angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  $ionicConfigProvider.platform.android.tabs.position('bottom');

  $stateProvider
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  .state('recipes', {
    url: '/recipes',
    templateUrl: 'templates/recipes.html'
  })

  .state('main-menu', {
      url: '/mainmenu',
    //  views: {
    //      'tab-one': {
              templateUrl: 'templates/main-menu.html',
              controller: 'MainMenuCtrl'
    //      }
    //  }
  })

  .state('register', {
    url: '/register',
    templateUrl: 'templates/register.html',
    controller: 'RegisterCtrl'
  })

  // Home page
  .state('login', {
    url: '/',
  //  views: {
  //    'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'LoginCtrl'
  //    }
  //  }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

    .state('recipe1', {
        url: "/rec1",
        templateUrl: "templates/recipe1.html"
    })
    .state('recipe2', {
        url: "/rec2",
        templateUrl: "templates/recipe2.html"
    })



  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });


  $urlRouterProvider.otherwise('/');

});
