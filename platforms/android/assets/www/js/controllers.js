angular.module('starter.controllers', ['ngCordova'])


.controller('controlBotones', function($scope, $cordovaNativeAudio, $ionicPlatform, $stateParams,$state) {

  $scope.Nombre = $stateParams.nombre;

  $ionicPlatform.ready(function() {

  $cordovaNativeAudio
          .preloadSimple('BarrelRoll', 'sounds/BarrelRoll.mp3')
          .then(function (msg) 
              {
                console.log(msg);
              }, function (error) 
                {
                  alert(error);
                }
                );
  $cordovaNativeAudio
          .preloadSimple('Coin', 'sounds/Coin.mp3')
          .then(function (msg) 
              {
                console.log(msg);
              }, function (error) 
                {
                  alert(error);
                }
                );
  $cordovaNativeAudio
          .preloadSimple('FinishHim', 'sounds/FinishHim.mp3')
          .then(function (msg) 
              {
                console.log(msg);
              }, function (error) 
                {
                  alert(error);
                }
                );
  $cordovaNativeAudio
          .preloadSimple('GetOverHere', 'sounds/GetOverHere.mp3')
          .then(function (msg) 
              {
                console.log(msg);
              }, function (error) 
                {
                  alert(error);
                }
                );
  $cordovaNativeAudio
          .preloadSimple('Hadouken', 'sounds/Hadouken.mp3')
          .then(function (msg) 
              {
                console.log(msg);
              }, function (error) 
                {
                  alert(error);
                }
                );
  $cordovaNativeAudio
          .preloadSimple('MGAlert', 'sounds/MGAlert.mp3')
          .then(function (msg) 
              {
                console.log(msg);
              }, function (error) 
                {
                  alert(error);
                }
                );


  $scope.BarrelRoll = function(){
          try
          {
            $cordovaNativeAudio.play('BarrelRoll');
          }
          catch(error)
          {
            alert(error);
          }   
          //hacer la logica para guardar el Json, con un boton guardar que sobreescriba al anterior
    };
    $scope.FinishHim = function(){
          try
          {
            $cordovaNativeAudio.play('FinishHim');
          }
          catch(error)
          {
            alert(error);
          }   
    };
    $scope.Hadouken = function(){
          try
          {
            $cordovaNativeAudio.play('Hadouken');
          }
          catch(error)
          {
            alert(error);
          }   
    };
    $scope.MGAlert = function(){
          try
          {
            $cordovaNativeAudio.play('MGAlert');
          }
          catch(error)
          {
            alert(error);
          }   
    };
    $scope.GOHere = function(){
          try
          {
            $cordovaNativeAudio.play('GetOverHere');
          }
          catch(error)
          {
            alert(error);
          }
    };
    $scope.Coin = function(){
          try
          {
            $cordovaNativeAudio.play('Coin');
          }
          catch(error)
          {
            alert(error);
          }
    };



    });


  })

.controller('controlLogin', function($scope, $state) {

  $scope.Logear = function(){
    {
      var Nombre = document.getElementById("txtNombre").value;

      //console.log(Nombre);
      //if($scope.Nombre !== "")
      //{
      $state.go('tab.botonera', {nombre: Nombre});
      //}
      //else
      //{
      //  alert("no");
      //  $state.go('tab.botonera');
      //}
    }
  };
  
 })

.controller('controlAbout', function($scope) {
  
});
