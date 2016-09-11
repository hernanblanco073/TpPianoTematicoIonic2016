angular.module('starter.controllers', ['ngCordova'])

.controller('DashCtrl', function($scope) {})

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

.controller('AccountCtrl', function($scope, $cordovaVibration, $cordovaNativeAudio) {
  /*$scope.settings = {
    enableFriends: true
  };*/

  $scope.Vibrar = function(){
           try
           {
             $cordovaVibration.vibrate([3000,1000,5000]);
           }
           catch(error)
           {
             alert("Estoy Vibrando");
           }
  }

  $scope.NoVibrar = function(){
           try
           {
             $cordovaVibration.vibrate(0);
           }
           catch(error)
           {
             alert("NO Estoy Vibrando");
           }
  }

  $scope.Sonido1 = function(){
    $cordovaNativeAudio
    .preloadSimple('Sonido1', 'sounds/sonido1.mp3')
    .then(function (msg) {
      console.log(msg);
    }, function (error) {
      alert(error);
    });

    try
    {
      $cordovaNativeAudio.play('Sonido1');
    }
    catch(error)
    {
      alert("Estoy sonando");
    }
  }

    $scope.Sonido2 = function(){
    $cordovaNativeAudio
    .preloadSimple('Sonido2', 'sounds/sonido2.mp3')
    .then(function (msg) {
      console.log(msg);
    }, function (error) {
      alert(error);
    });

    try
    {
      $cordovaNativeAudio.play('Sonido2');
    }
    catch(error)
    {
      alert("Estoy sonando");
    }
  }
});


//tp botonera con sondiso y botones con estilos, que guarde en un archivo en el celular que boton toco
//sobre las preguntas, cada vez que toque la respuesta correcta vibra una vez y da un sonido de bien, para mal vibra 2 veces y da otro sonido
