angular.module('view.custom-file-input', [])

.controller('custom-file-input', function ($scope) {
    'use strict';

    var selectFile = function (file) {
        $scope.vm.selectedFile = file.name;
        $scope.$apply();
    };

    $scope.vm = {
        title: 'Custom file input',
        selectedFile: null,
        selectFile: selectFile
    };
});