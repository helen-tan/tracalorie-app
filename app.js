// Storage Controller

// Item Controller
const ItemCtrl =(function(){
    // Item Constructor
    const Item = function(id, name, calories){
        this.id = id;
        this.name = name;
        this.calories = calories;
    }

    // Data Structure / State
    const data = {
        items: [
            {id: 0, name: 'Steak Dinner', calories: 1200},
            {id: 1, name: 'Cookie', calories: 400},
            {id: 2, name: 'Eggs', calories: 300}
        ],
        currentItem: null,
        totalCalories: 0
    }

    // Public Methods - Whatever we return from the module is what is going to be public
    return {
        getItems: function(){
            return data.items;
        },
        logData: function(){
            return data;
        }
    }
    
})();



// UI Controller
const UICtrl =(function(){
    const UISelectors = {      // So that if the ids ever get changed in the html, we can just change it once here
        itemList: '#item-list'
    }

    // Public Methods
    return{
        populateItemList: function(items){
            let html = '';

            items.forEach(function(item){
                html += `<li class="collection-item" id="item-${item.id}">
                            <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                            <a href="" class="secondary-content">
                            <i class="edit-item fa fa-pencil"></i>
                            </a>
                        </li>`;
            });
            // insert list items into UI
            document.querySelector(UISelectors.itemList).innerHTML = html;
        }
    }
})();




// (main) App Controller
const App =(function(ItemCtrl, UICtrl){

    // Public methods
    return {
        init: function(){
            // Fetch Items from data structure
            const items = ItemCtrl.getItems();

            // Populate list with items
            UICtrl.populateItemList(items);
        }
    }
    
})(ItemCtrl, UICtrl);


// Initializing App
App.init();