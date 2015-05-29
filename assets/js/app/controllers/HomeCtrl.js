SailsApp.controller('HomeCtrl',['$scope','$rootScope', 'Post', 'AlertService', 'UserService', '$modal',
  function($scope, $rootScope, Post, AlertService, UserService, $modal) {

  console.log('home controller loaded')

  $scope.posts = [];

  $scope.newPost = function() {
    $modal.open({
      templateUrl: '/views/post/createModal.html',
      controller: 'CreateModalCtrl'
    }).result.then(function(){
    $scope.loadPosts();
    })
  }

  $scope.showPost = function(postId) {
    Post.get({id: postId}, function(data) {
      console.log(data)
    })
  }

  $scope.deletePost = function(postId) {
    if (UserService.currentUser){
      if (confirm("Are you sure you want to delete this post?")) {
      Post.delete({id: postId}, function(data) {
        console.log(data)
        AlertService.add('info', 'This post was deleted')
        $scope.loadPosts();
      })
      }
    } else {
      AlertService.add('danger', 'You cannot delete this post.')
    }
  }


  $scope.loadPosts = function() {
    console.log('load posts working')
    Post.query(function(data) {
      AlertService.clear()
      $scope.posts = data;
    })
  }

  $scope.loadPosts();
  // $http.get('api/post').success(function(data) {
  //   console.log(data)
  //   $scope.posts = data;
  // })

}])

