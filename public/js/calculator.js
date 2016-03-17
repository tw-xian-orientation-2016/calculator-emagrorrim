var service;
var displayNumber;
var expression;

$(document).ready(function() {
  init();
  setupBtnAction();
});

function init() {
  service = new Service();
  displayNumber = '0';
    $('#displayer').val(displayNumber);
  expression = {
    number1:'',
    number2:'',
    op:'',
  }
}

function setupBtnAction() {
  setDisplayerChange();
  setClearBtnAction();
  setNumberBtnAction();
  setNegativeBtnAction();
  setPercentageBtnAction();
  setOperatorBtnAction();
}

function setClearBtnAction() {
  $('#clearBtn').click(function() {
    if (expression.number1 && expression.op && displayNumber !== '0') {
      displayNumber = '0';
      $('#displayer').val(displayNumber);
    } else {
      clearExpression();
      displayNumber = '0';
      $('#displayer').val(displayNumber);
    }
  });
}

function setDisplayerChange() {
  $('#displayer').change(function() {
    if ($(this).val() === '') {
      displayNumber = '0';
      $('#displayer').val(displayNumber);
    }
  });
}

function setNumberBtnAction() {
  $('button[name="numberBtn"]').click(function() {
    if (displayNumber === '0' && $(this).html() !== '.') {
      displayNumber = '';
    }
    displayNumber += $(this).html();
    $('#displayer').val(displayNumber);
  });
}

function setNegativeBtnAction() {
  $('#negativeBtn').click(function() {
    if (displayNumber === '0') {
      $('#displayer').val(displayNumber);
    }
    service.getNegative($('#displayer').val(), function(result) {
      displayNumber = result;
      $('#displayer').val(displayNumber);
    });
  });
}

function setPercentageBtnAction() {
  $('#percentageBtn').click(function() {
    service.getPercentage($('#displayer').val(), function(result) {
      $('#displayer').val(result);
      displayNumber = '0';
    });
  });
}

function setOperatorBtnAction() {
  $('button[name="operaterBtn"]').click(function() {
    if (expression.number1 === '' && $(this).html() !== '=') {
      expression.number1 = $('#displayer').val();
      expression.op = $(this).html(); 
      displayNumber = '0';
    } else if(expression.op === '' && $(this).html() !== '=') {
      expression.number2 = $('#displayer').val();
      expression.op = $(this).html();
      displayNumber = '0';
    } else {
      expression.number2 = $('#displayer').val();
      service.getResult($(this).html(), expression, function(result, executeOp) {
        $('#displayer').val(result);
        clearExpression();
        displayNumber = '0';
        if (executeOp !== '=') {
          expression.op = executeOp; 
          expression.number1 = result;
        }
      });
    }
  });
}

function clearExpression() {
  expression = {
    number1:'',
    number2:'',
    op:'',
  }
}