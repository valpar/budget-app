

//Global variables can be made local (private) with closures.
//Budget Controller
var budgetController = (function() {


})();

// UI controller
var  UIController = (function(){

    //some code

})();

//gobal app controller
var controller = (function(budgetCtrl, UICtrl){

    document.querySelector('.add__btn').addEventListener('click',function(){

        //to do list

        //1. get the filed input data

        //2. add the item to the budget controller

        // 3. add the item to the UI

        // 4. calc the budget

        // 5. display the budget on the UI

    });

    document.addEventListener('keypress', function(){
        
    })

})(budgetControllers, UIController);