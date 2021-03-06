SailsApp.controller('AuthLoginModalCtrl', ['$scope', 'UserService', '$modalInstance', function($scope, UserService, $modalInstance) {

  $scope.login = function() {
    // console.log(UserService)
    // alert('you want to login with ' + $scope.email + ' : ' +$scope.password)
    UserService.login($scope.email, $scope.password, function(err, data) {
      if(err) {
        console.log(err)
        alert('something horrible happened.');
      } else if (data && data.result) {
        $modalInstance.close();
      } else {
        console.log(data)
        alert('unable to log in')
      }
    })
  }

}])