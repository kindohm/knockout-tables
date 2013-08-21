;(function(exports){

  var viewModel = new exports.ViewModel();

  // add sorts (must be done before binding)
  viewModel.addSort('manufacturer');
  viewModel.addSort('model');
  viewModel.addSort('qty');
  viewModel.addSort('price');

  // bind
  ko.applyBindings(viewModel);

  // make some widget data...
  viewModel.widgets.push(new exports.Widget(
    { manufacturer: 'Nelson', model: 'KRS-1', qty: 18, price: 89.99 }));
  viewModel.widgets.push(new exports.Widget(
    { manufacturer: 'Nelson', model: 'KRS-2', qty: 6, price: 99.99 }));
  viewModel.widgets.push(new exports.Widget(
    { manufacturer: 'Nelson', model: 'KRS-19', qty: 23, price: 32.99 }));
  viewModel.widgets.push(new exports.Widget(
    { manufacturer: 'Nelson', model: 'KMFDM001', qty: 3, price: 185.99 }));
  viewModel.widgets.push(new exports.Widget(
    { manufacturer: 'Nelson', model: 'KMFDM001-T', qty: 2, price: 399.99 }));
  viewModel.widgets.push(new exports.Widget(
    { manufacturer: 'Walseth', model: 'TPT95', qty: 103, price: 36.99 }));
  viewModel.widgets.push(new exports.Widget(
    { manufacturer: 'Walseth', model: 'TPT85', qty: 276, price: 38.99 }));
  viewModel.widgets.push(new exports.Widget(
    { manufacturer: 'Walseth', model: 'TPX25', qty: 380, price: 171.99 }));
  viewModel.widgets.push(new exports.Widget(
    { manufacturer: 'Walseth', model: 'TPX26', qty: 217, price: 65.99 }));
  viewModel.widgets.push(new exports.Widget(
    { manufacturer: 'Herman', model: 'NIN-7', qty: 88, price: 105.00 }));
  viewModel.widgets.push(new exports.Widget(
    { manufacturer: 'Herman', model: 'NIN-7X', qty: 2, price: 35.00 }));
  viewModel.widgets.push(new exports.Widget(
    { manufacturer: 'Herman', model: 'NIN-ML', qty: 8, price: 37.00 }));
  viewModel.widgets.push(new exports.Widget(
    { manufacturer: 'Korp', model: '95RQ', qty: 83, price: 115.05 }));
  viewModel.widgets.push(new exports.Widget(
    { manufacturer: 'Korp', model: '95PQ', qty: 42, price: 17.95 }));
  viewModel.widgets.push(new exports.Widget(
    { manufacturer: 'Korp', model: '95ZQ', qty: 103, price: 109.95 }));
  viewModel.widgets.push(new exports.Widget(
    { manufacturer: 'Korp', model: '15YP', qty: 63, price: 301.95 }));

})(this);