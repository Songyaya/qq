angular.module('xiangmuApp').controller("a",["$scope","$http","$state","$rootScope",function ($scope,$http,$state,$rootScope) {

	$scope.add=function(){
		$scope.time=new Date();
        $scope.year=$scope.time.getFullYear();   //获取年
        $scope.month=$scope.time.getMonth()+1;    //获取月
        $scope.data2=$scope.time.getDate();       //获取日
        $scope.hour=$scope.time.getHours();       //获取时
        $scope.minutes=$scope.time.getMinutes();  //获取分
$scope.order_time=$scope.year+'-'+$scope.month+'-'+$scope.data2+' '+''+$scope.hour+'时'+$scope.minutes+'分';
$scope.updata2.date=$scope.order_time
		$http({
			url:"http://www.bugcenter.com.cn:1511/item",
			method:"POST",
			data:$scope.updata2
		}).success(function(e){
        

      $state.go("daohang")
      $scope.data.push($scope.updata2)
		})
	}
}]);
//<script type="text/babel">
//var Title=React.createClass({
//   render:function(){
//     return <h1>{this.props.t}<small>{this.props.data}</small></h1>
//   }
//})
//ReactDOM.render(<Title t="qq" data="qqq"/>,document.getElementById("a"))
//</script>
