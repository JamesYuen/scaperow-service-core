angular.module('ionic.services.core', [])

/**
 * A core Ionic account identity provider. 
 *
 * Usage:
 * angular.module('myApp', ['ionic', 'ionic.services.common'])
 * .config(['$ionicAppProvider', function($ionicAccountProvider) {
 *   $ionicAppProvider.identify({
 *     app_id: 'x34dfxjydi23dx'
 *   });
 * }]);
 */
.provider('$ionicApp', function() {
  var app = {};


  this.identify = function(opts) {
    app = opts;
  };

  this.$get = [function() {
    return {
      getApp: function() {
        return app;
      }
    }
  }];
});

// Backwards compat
.module('ionic.services.common', ['ionic.services.core'])
