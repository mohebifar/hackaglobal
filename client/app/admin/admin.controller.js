'use strict';

angular.module('hackaglobalApp')
  .controller('AdminCtrl', function ($scope, $http, Auth, User) {

    // Use the User $resource to fetch all users
    $scope.users = User.query();

    $scope.delete = function (user) {
      User.remove({id: user._id});
      angular.forEach($scope.users, function (u, i) {
        if (u === user) {
          $scope.users.splice(i, 1);
        }
      });
    };
  })
  .controller('CitiesAdminCtrl', function ($scope, City) {
    $scope.city = {name: ''};
    $scope.cities = City.query();
    $scope.City = City;
    $scope.openPersian = function ($event) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.persianIsOpen = true;
      $scope.gregorianIsOpen = false;
    };
    $scope.addCity = function () {
      City
        .save({
          name: $scope.city.name,
          enName: $scope.city.enName
        }, function (city) {
          $scope.cities.push(city);
          console.log(city);
        }, function () {
          $scope.error = 'عملیات ناموفق بود.';
        });
    };

    $scope.delete = function (city) {
      city.$delete();

      $scope.cities.splice($scope.cities.indexOf(city), 1);
    };
  })
  .controller('EventsAdminCtrl', function ($scope, Event, City) {
    $scope.disabled = function (date, mode) {
      return ( mode === 'day' && date.getDay() === 5  );
    };
    $scope.format = 'yyyy/MM/dd';

    $scope.toggleMin = function () {
      $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();

    $scope.openPersian = function ($event) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.persianIsOpen = true;
      $scope.gregorianIsOpen = false;
    };

    $scope.event = {name: ''};
    $scope.events = Event.query();
    $scope.cities = City.query();
    $scope.Event = Event;

    $scope.addCity = function () {
      Event
        .save({
          name: $scope.event.name,
          enName: $scope.event.enName,
          date: $scope.event.date,
          city: $scope.event.city
        }, function (event) {
          $scope.events.push(event);
        }, function () {
          $scope.error = 'عملیات ناموفق بود.';
        });
    };

    $scope.getCityName = function (id) {
      for (var i = 0; i < $scope.cities.length; i++) {
        var city = $scope.cities[i];
        if (city._id === id) {
          return city.name;
        }
      }

      return null;
    };

    $scope.delete = function (event) {
      event.$delete();

      $scope.events.splice($scope.events.indexOf(city), 1);
    };
  });
