angular.module('MainApp', [])

function mainController($scope, $http) {
	$scope.newSpeaker = {};
	$scope.speakers = {};
    $scope.selected=false;

	// Obtenemos todos los datos de la base de datos
	
    function obtenerSpeakers(){
        
        $http.get('/speakers').success(function(data) {
		  $scope.speakers = data;
        })
	   .error(function(data) {
		  console.log('Error: ' + data);
	   });
    }
    
    obtenerSpeakers();
	// Función para registrar a una persona
	$scope.modificarPersona = function() {
		$http.put('/speakers/'+$scope.newSpeaker._id, $scope.newSpeaker)
		.success(function(data) {
				$scope.newSpeaker = {}; // Borramos los datos del formulario
				$scope.speakers = data;
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
        $scope.selected=false;
        obtenerSpeakers();
	};

	// Función para editar los datos de una persona
	$scope.registrarPersona = function(newSpeaker) {
        
		$http.post('/speakers' , $scope.newSpeaker)
		.success(function(data) {
				$scope.newSpeaker = {}; // Borramos los datos del formulario
				$scope.speaker = data;
				
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
        obtenerSpeakers();
	};

// Función que borra un objeto persona conocido su id
	$scope.borrarPersona = function(newSpeaker) {
		$http.delete('/speakers/' + $scope.newSpeaker._id)
		.success(function(data) {
			$scope.newSpeaker = {};
			$scope.speaker = data;
			$scope.selected = false;
            
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
        obtenerSpeakers();
	};

	// Función para coger el objeto seleccionado en la tabla
	$scope.selectPerson = function(speaker) {
		$scope.newSpeaker = speaker;
		$scope.selected = true;
		console.log($scope.newSpeaker, $scope.selected);
	};
}