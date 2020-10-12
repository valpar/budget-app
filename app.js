

//Global variables can be made local (private) with closures.
//Budget Controller
var budgetController = (function() {


})();

// UI controller
var  UIController = (function(){

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

    return {
        getinput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, //wilol be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },

        getDOMstrings: function(){
            return DOMstrings;
        }
    }

})();

//gobal app controller
var controller = (function(budgetCtrl, UICtrl){

    var setupEventListeners = function(){

        var DOM = UICtrl.getDOMstrings();
        
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event){
            if (event.keyCode === 13 || event.which === 13){
                ctrlAddItem();
            }
        });
    };

    var ctrlAddItem = function (){
        //to do list

        //1. get the filed input data
        var input = UICtrl.getinput();
        console.log(input);

        //2. add the item to the budget controller

        // 3. add the item to the UI

        // 4. calc the budget

        // 5. display the budget on the UI

    };

    return {
        init: function(){
            console.log('application has started');
            setupEventListeners();
        }
    }

})(budgetController, UIController);