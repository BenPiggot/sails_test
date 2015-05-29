SailsApp.controller('EditModalCtrl', ['$scope', 'UserService', '$modalInstance', 'Post','$routeParams',
  function($scope, UserService, $modalInstance, Post, $routeParams) {

  Post.get({id: $routeParams.id}, function(data) {
    $scope.post = data
  })

  $scope.editPost = function() {
      Post.update({id: $scope.post.id},
        {title: $scope.title,
        body: $scope.body},
        function(data){
      console.log('updated',data);
        $modalInstance.close();
    });
  }


}])