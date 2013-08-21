;(function(exports){

  var ViewModel = function(){

    var modelSortDirection = -1;
    var manufacturerSortDirection = -1;
    var qtySortDirection = -1;
    var priceSortDirection = -1;

    this.widgets = ko.observableArray();

    this.sortByModel = function(){
      modelSortDirection = -modelSortDirection;
      this.widgets.sort(function(a,b){
        if (a.model() > b.model()) return 1 * modelSortDirection;
        if (a.model() < b.model()) return -1 * modelSortDirection;
        return 0;
      });
    };

    this.sortByManufacturer = function(){
      manufacturerSortDirection = -manufacturerSortDirection;
      this.widgets.sort(function(a,b){
        if (a.manufacturer() > b.manufacturer()) return 1 * manufacturerSortDirection;
        if (a.manufacturer() < b.manufacturer()) return -1 * manufacturerSortDirection;
        return 0;
      });
    };

    this.sortByQty = function(){
      qtySortDirection = -qtySortDirection;
      this.widgets.sort(function(a,b){
        if (a.qty() > b.qty()) return 1 * qtySortDirection;
        if (a.qty() < b.qty()) return -1 * qtySortDirection;
        return 0;
      });
    };

    this.sortByPrice = function(){
      priceSortDirection = -priceSortDirection;
      this.widgets.sort(function(a,b){
        if (a.price() > b.price()) return 1 * priceSortDirection;
        if (a.price() < b.price()) return -1 * priceSortDirection;
        return 0;
      });
    };

  };

  exports.ViewModel = ViewModel;

})(this);