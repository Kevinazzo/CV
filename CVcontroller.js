var app = angular.module('CVController', []);
app.controller('engishLangLabels', function($scope) {
    $scope.Name = ["Name", "Nombre"]
    $scope.lastName = ["Last Name", "Apellidos"]
    $scope.birthdate = ["Birthdate", "Fecha de Nacimiento"]
    $scope.address = ["Address", "Direccion"]
    $scope.postcode = ["P.C.", "C.P."]
    $scope.city = ["City", "Ciudad"]
    $scope.gender = ["Gender", "Genero"]
    $scope.civStat = ["Marital Status", "Estado Civil"]
    $scope.nationality = ["Nationality", "Nacionalidad"]
    $scope.phone = ["Phone Number", "Numero Telefonico"]
    $scope.email = ["email", "correo electronico"]
    $scope.proEducation = ["Profesional Achievments", "Logros Academicos"]
    $scope.objective = ["Objective", "Objetivo"]
    $scope.skills = ["aptitudes", "aptitudes"]
});
app.languange()