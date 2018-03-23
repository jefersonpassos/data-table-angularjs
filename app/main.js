(function (angular){
    'use strict';
    
    angular.module("todoApp")
        .factory("mock", mock)
        .controller('todoCtrl', ["$scope", "mock",  controller]);
    
    
    // controller todoApp
    function controller($scope, mock){
        
        // table config
        $scope.table = {
            // all data table
            data : mock.data(50),
            // table columns
            //{ "key in data": "text that show"}
            columns: {
                "id": "ID",
                "task": "Task",
                "createdDate": "Created Date"
            },
            // value default of items show
            lengthDefault: "20"
        }
    
    }
    
    function mock(){

        function data(len){
            let data = [];
            
            for(let i =0; i< len; i++){
                data.push({ 
                    id: i,
                    task: "data table",
                    createdDate: "2018-01-01"
                })
            }
            
            return data;
        }
        
        return  {
            data: data
        }
        
    }
})(angular);
