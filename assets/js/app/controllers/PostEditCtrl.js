SailsApp.controller('PostEditCtrl',['$scope','$rootScope', 'Post', 'AlertService', '$routeParams', 'PostComment', 'UserService', function($scope, $rootScope, Post, AlertService, $routeParams, PostComment, UserService) {

  $scope.UserService = UserService;

  $scope.$watchCollection('UserService', function() {
    $scope.currentUser = UserService.currentUser;
  })

  console.log($routeParams)


  Post.get({id: $routeParams.id}, function(data) {
    console.log(data)
    $scope.post = data
  });

  console.log('edit controller working')

  console.log($scope.post)
  $scope.editContact = function(){
    Contact.update({id: $scope.post.id},{title: $scope.post.title,
                    post: $scope.post.body
                    },function(data){
      console.log('updated',data);
    });
  }



}]);