angular.module('starter.controllers', [])

  .controller('DashCtrl', function ($scope,$ionicScrollDelegate) {
    $scope.scrollMainToTop = function() {
      $ionicScrollDelegate.$getByHandle('mainScroll').scrollTop();
    };
    $scope.scrollSmallToTop = function() {
      $ionicScrollDelegate.$getByHandle('small').scrollTop();
    };
  })

  .controller('ChatsCtrl', function ($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
      Chats.remove(chat);
    };
  })

  .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  })

  .controller('AccountCtrl', function ($scope) {
    $scope.settings = {
      enableFriends: true
    };
  })

  .controller('testCtrl', function ($scope,$ionicActionSheet,$ionicBackdrop,$timeout) {
    $scope.show=function(){
      // Show the action sheet
      var hideSheet = $ionicActionSheet.show({
        buttons: [
          { text: '<b>Share</b> This' },
          { text: 'Move' }
        ],
        destructiveText: 'Delete',
        titleText: 'Modify your album',
        cancelText: 'Cancel',
        cancel: function() {
          // add cancel code..
        },
        destructiveButtonClicked:function(){
          return true;
        },
        buttonClicked: function(index) {
          console.log(index)
          return true;
        }
      });
      $scope.action=function(){
        $ionicBackdrop.retain();
        $timeout(function() {
          $ionicBackdrop.release();
        }, 1000);
      };
      //// For example's sake, hide the sheet after two seconds
      //$timeout(function() {
      //  hideSheet();
      //},2000);
    }
  });
