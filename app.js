var app = angular.module('myshopingList', [])
app.controller('myctrl', function ($scope) {
    $scope.IsVisible = false;
    $scope.itemname=""
    $scope.Quantity=""
    $scope.photourl=""
    
    $scope.apple="apple"
    
    console.log($scope.records)
    $scope.customers = [
    ];
    $scope.remove=function (index, content) {
        if (index != -1) {
            $scope.customers.splice(index, 1);
        }
    };
    
    $scope.addItem = function () {
        $scope.records = {item :$scope.itemname,Quantity : $scope.Quantity,photourl: $scope.photourl}
        $scope.customers.push($scope.records)
        console.log(customers,'jh')

        $scope.IsVisible = true;
    };
    $scope.view= function(index){
        
        $scope.data=$scope.customers[index]
        sessionStorage.setItem('data',JSON.stringify($scope.data))
        window.localStorage.setItem("array", JSON.stringify($scope.data));
    



        window.open('./view.html')
        

    }
    
});

