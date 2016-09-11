angular.module('starter.controllers', ['ngCordova'])


.controller('controlBotones', function($scope, $cordovaNativeAudio) {

    $scope.BarrelRoll = function(){
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

      try
      {
        $cordovaNativeAudio.play('BarrelRoll');
      }
      catch(error)
      {
        alert("no es un telefono");
      }

    }

  })

.controller('controlLogin', function($scope) {

  $scope.Logear = function(){

  };
  
})

.controller('controlAbout', function($scope) {
  
});
