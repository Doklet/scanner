'use strict';

angular.module('scannerApp')
  .service('ModelService', function ($http) {

    this.list = function() {
      return $http.get('/api/model');
    };

  });
