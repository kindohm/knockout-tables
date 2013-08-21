;(function(exports){

  var ViewModel = function(){

    var self = this;

    self.widgets = ko.observableArray();

    this.addSort = function(field){
      self['sortDirection_' + field] = -1;
      self['sortBy_' + field] = function(){
        self['sortDirection_' + field] = -this['sortDirection_' + field];
        self.widgets.sort(function(a,b){
          if (a[field]() > b[field]()) return 1 * self['sortDirection_' + field];
          if (a[field]() < b[field]()) return -1 * self['sortDirection_' + field];
          return 0;
        })
      };
    };

  };

  exports.ViewModel = ViewModel;

})(this);