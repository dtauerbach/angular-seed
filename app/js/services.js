'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('fairPayApp.services', [])
  .factory('myService', function () {
    var userData = { };

    return {
        getData: function () {
          //You could also return specific attribute of the form data instead
          //of the entire data
          return userData;
        },
        setData: function (newUserData) {
          //You could also set specific attribute of the form data instead
          userData = angular.extend(userData, newUserData)
        },
        resetData: function () {
          //To be called when the data stored needs to be discarded
          uesrData = {};
        }
    };
});