function Service() {}

Service.prototype.getNegative = function(number ,callback) {
  $.post('/api/negative', {number: number}, function(result) {
    callback(result);
  });
}

Service.prototype.getPercentage = function(number ,callback) {
  $.post('/api/percentage', {number: number}, function(result) {
    callback(result);
  });
}