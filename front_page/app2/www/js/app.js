// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js            ,'ngImgCrop'   ,'ImageCropper'
var app = angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','ImageCropper']);

app.run(function($ionicPlatform) {
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

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js

  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html',
      controller:'tabCon'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl:'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })
  .state('details',{
    url:'/details/:id',
    templateUrl:'templates/dash_details.html',
    controller:'detailsContrl'
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
    .state('testReading',{
      url:'/testReading/:id',
      templateUrl:'templates/testReading.html',
      controller:'TestReadingCtrl'
    })
    .state('chatting', {
      url: '/chatting',
      templateUrl: 'templates/chatting.html',
      controller: 'ChattingCtrl'
    })
    .state('personalBookStore',{
      url:'/personalBookStore',
      templateUrl:'templates/personalBookStore.html',
      controller: 'personalBookStore'
    })
  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })
    .state('Reading',{
      url:'/Reading/:id',
      templateUrl:'templates/Reading.html',
      controller:'ReadingCtrl'
    })
    .state('friendInfor',{
      url:'/friendInfor',
      templateUrl:'templates/friendInfor.html',
      controller:'friendInforCtrl'
    })

    .state('personalInfo',{
    url:'/personalInfo/:user_id',
      templateUrl:'templates/personalInfor.html',
      controller:'personalInfoCtrl'
  })
    .state('picUpload',{
      url:'/picUpload',
      templateUrl:'templates/picUpload.html',
      controller:'picUploadCtrl'
    })
  .state('login',{
    url:'/login',
    templateUrl:'templates/login.html',
    controller:'loginCtrl'
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

  // 修改Android端默认的tabs悬停位置
  $ionicConfigProvider.platform.android.tabs.style('standard');
  $ionicConfigProvider.platform.android.tabs.position('bottom');

  //navBar title居中显示
   $ionicConfigProvider.platform.android.navBar.alignTitle('center');
  
});
/*
app.config(function ($httpProvider) {
  $httpProvider.interceptors.push('UserInterceptor');
});*/
