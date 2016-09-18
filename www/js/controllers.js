angular.module('starter.controllers', ['ngCordova'])


.controller('controlBotones', function($scope, $cordovaNativeAudio, $ionicPlatform, $stateParams, $cordovaVibration, $cordovaFile) {

  $scope.Mensaje = "Bienvenido ".concat($stateParams.nombre);
  $scope.Secuencia = [];

  /*$ionicPlatform.ready(function() {

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
                );*/


  $scope.BarrelRoll = function(){
          try
          {
            $cordovaNativeAudio.play('BarrelRoll');
            $cordovaVibration.vibrate(1000);
            $scope.Secuencia.push("Barrel Roll");
          }
          catch(error)
          {
            //alert(error);
            $scope.Secuencia.push("Barrel Roll");
          }
          //hacer la logica para guardar el Json, con un boton guardar que sobreescriba al anterior
    };
    $scope.FinishHim = function(){
          try
          {
            $cordovaNativeAudio.play('FinishHim');
            $cordovaVibration.vibrate(1000);
            Secuencia = array.push("Finish Him");
          }
          catch(error)
          {
            //alert(error);
            $scope.Secuencia.push("FinishHim");
          }   
    };
    $scope.Hadouken = function(){
          try
          {
            $cordovaNativeAudio.play('Hadouken');
            $cordovaVibration.vibrate(1000);
            Secuencia = array.push("Hadouken");
          }
          catch(error)
          {
            $scope.Secuencia.push("Hadouken");
            //alert(error);
          }   
    };
    $scope.MGAlert = function(){
          try
          {
            $cordovaNativeAudio.play('MGAlert');
            $cordovaVibration.vibrate(1000);
            Secuencia = array.push("MGS Alert");
          }
          catch(error)
          {
            $scope.Secuencia.push("MGAlert");
            //alert(error);
          }   
    };
    $scope.GOHere = function(){
          try
          {
            $cordovaNativeAudio.play('GetOverHere');
            $cordovaVibration.vibrate(1000);
            Secuencia = array.push("Get Over Here");
          }
          catch(error)
          {
            $scope.Secuencia.push("GOHere");
            //alert(error);
          }
    };
    $scope.Coin = function(){
          try
          {
            $cordovaNativeAudio.play('Coin');
            $cordovaVibration.vibrate(1000);
            Secuencia = array.push("Coin");
          }
          catch(error)
          {
            $scope.Secuencia.push("Coin");
            //alert(error);
          }
    };



    $scope.Guardar = function(){
        
    var jsonaux = "{";
    var count = 0;

        for (val of $scope.Secuencia) {
            count++;
            console.log(val);
           jsonaux = jsonaux.concat(',',count,': "',val,'"');
          }

      jsonaux = jsonaux.concat('}');

      
    $cordovaFile.checkDir("files", "piano")
      .then(function (success) {

        $cordovaFile.writeFile("/piano", "secuencias.json", jsonaux, true);

      }, function (error) {
        console.log(error);
        $cordovaFile.createDir("/", "piano", true);
        $cordovaFile.writeFile("/piano", "secuencias.json", jsonaux, true);
        
      });
    };



    //});


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
