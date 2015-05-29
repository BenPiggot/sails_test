SailsApp.controller('CreateModalCtrl', ['$scope', 'UserService', '$modalInstance', 'Post', '$location',
  function($scope, UserService, $modalInstance, Post, $location) {

  $scope.$parent.loadPosts = function() {
    console.log('load posts working')
    Post.query(function(data) {
      console.log(data)
      $scope.$parent.posts = data;

    })
  }

$scope.$parent.loadPosts()

  $scope.createPost = function() {

     var post = new Post();
     post.title = $scope.title;
     post.body = $scope.body;
     $scope.loadPosts();
     post.$save(function(data){
        console.log(data);
        $scope.$parent.loadPosts()
        $modalInstance.close();

      });

  }


}])