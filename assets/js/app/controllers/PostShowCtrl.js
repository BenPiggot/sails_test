SailsApp.controller('PostShowCtrl',['$scope','$rootScope', 'Post', 'AlertService', '$routeParams', 'PostComment', 'UserService', '$modal',
 function($scope, $rootScope, Post, AlertService, $routeParams, PostComment, UserService, $modal) {


    $scope.UserService = UserService;

    $scope.$watchCollection('UserService', function() {
      $scope.currentUser = UserService.currentUser;
    })

    console.log($routeParams)


    Post.get({id: $routeParams.id}, function(data) {
      console.log(data)
      $scope.post = data
    });

    $scope.addComment = function() {
      console.log('awesome')
      var comment = new PostComment()
      comment.body = $scope.commentText;
      comment.$save({postId: $scope.post.id}, function(data) {
        console.log('comment added')
        $scope.post = data;
        $scope.commentText = "";
      })
    }

    $scope.newPost = function() {
    $modal.open({
      templateUrl: '/views/post/editModal.html',
      controller: 'EditModalCtrl'
    }).result.then(function(){
    Post.get({id: $routeParams.id}, function(data) {
      console.log(data)
      $scope.post = data
    });
  })
  }

  }]);
