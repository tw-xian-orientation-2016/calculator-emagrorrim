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

Service.prototype.getResult = function(executeOp ,expression ,callback) {
  switch(expression.op) {
    case '+':
      getSum(executeOp ,expression, callback);
      break;
    case '-':
      getDifference(executeOp ,expression ,callback);
      break;
    case 'x':
      getProduct(executeOp ,expression ,callback);
      break;
    case '/':
      getQuotient(executeOp ,expression ,callback);
      break;
    default:
  }
}

function getSum(executeOp ,expression ,callback) {
  $.post('/api/sum', {number1: expression.number1, number2:expression.number2}, function(result) {
    callback(result, executeOp);
  });
}

function getDifference(executeOp ,expression ,callback) {
  $.post('/api/difference', {number1: expression.number1, number2:expression.number2}, function(result) {
    callback(result, executeOp);
  });
}

function getProduct(executeOp ,expression ,callback) {
  $.post('/api/product', {number1: expression.number1, number2:expression.number2}, function(result) {
    callback(result, executeOp);
  });
}

function getQuotient(executeOp ,expression ,callback) {
  $.post('/api/quotient', {number1: expression.number1, number2:expression.number2}, function(result) {
    callback(result, executeOp);
  });
}
