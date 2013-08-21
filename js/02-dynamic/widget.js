;(function(exports){

  var Widget = function(data){
    var self = this;

    data = data || {};
    self.manufacturer = ko.observable(data.manufacturer || '');
    self.model = ko.observable(data.model || '');
    self.price = ko.observable(data.price || 0);
    self.qty = ko.observable(data.qty || 0);

    self.displayPrice = ko.computed(function(){
      return '$' + self.price().formatMoney(2, '.', ',');
    });

  };

  this.Widget = Widget;


  // from:
  // stackoverflow.com/questions/149055/how-can-i-format-numbers-as-money-in-javascript
  Number.prototype.formatMoney = function(c, d, t){
  var n = this, 
      c = isNaN(c = Math.abs(c)) ? 2 : c, 
      d = d == undefined ? "." : d, 
      t = t == undefined ? "," : t, 
      s = n < 0 ? "-" : "", 
      i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", 
      j = (j = i.length) > 3 ? j % 3 : 0;
     return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
   };

})(this);