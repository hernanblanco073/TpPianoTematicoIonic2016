angular.module('starter.controllers', ['ngCordova'])


.controller('controlBotones', function($scope, $cordovaNativeAudio, $ionicPlatform, $stateParams, $cordovaVibration, $cordovaFile, $state) {

  $scope.Mensaje = "Bienvenido ".concat($stateParams.nombre);
  $scope.Secuencia = [];
  $scope.listado;

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
            $scope.Secuencia.push("Finish Him");
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
            $scope.Secuencia.push("Hadouken");
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
            $scope.Secuencia.push("MGS Alert");
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
            $scope.Secuencia.push("Get Over Here");
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
            $scope.Secuencia.push("Coin");
          }
          catch(error)
          {
            $scope.Secuencia.push("Coin");
            //alert(error);
          }
    };



    $scope.Guardar = function(){
        
    var jsonaux = "[";

        for (val of $scope.Secuencia) {
           jsonaux = jsonaux.concat(',{"name" : "',val,'"}');
          }

    jsonaux = jsonaux.replace("[,","[");

    jsonaux = jsonaux.concat(']');

      
    $cordovaFile.checkDir(cordova.file.externalApplicationStorageDirectory, "piano")
      .then(function (success) {
        //alert("success");
        try
        {
          $cordovaFile.writeFile(cordova.file.externalApplicationStorageDirectory, "piano/secuencias.txt", jsonaux, true)
               .then(function (success) {
                      //alert("escribe file");
                      $cordovaFile.readAsText(cordova.file.externalApplicationStorageDirectory, "piano/secuencias.txt")
                        .then(function (success) {

                            try
                            {
                              $scope.listado = JSON.parse(success);
                            }
                            catch(error)
                            {
                              alert(error);
                            }

                            }, function (error) {
                                alert("no leyo", error);
                              });
           
                 }, function (error) {
                        alert(error);
                  });
        }
        catch(error)
        {
          alert(error);
        }

      }, function (error) {
        alert(error);
      }
      );

    $state.go('tab.secuencia', {secuencia: $scope.listado});

    };//cierre guardar

    

    });


  })

.controller('controlLogin', function($scope, $state) {

  $scope.Logear = function(){
    {
      var Nombre = document.getElementById("txtNombre").value;

      $state.go('tab.botonera', {nombre: Nombre});
    }
  };
  
 })

.controller('controlAbout', function($scope) {
  
})


.controller('controlSecuencia', function($scope, $stateParams) {

  $scope.Lista = $stateParams.secuencia;
});

