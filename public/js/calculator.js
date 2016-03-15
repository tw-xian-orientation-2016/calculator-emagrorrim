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
  updateDisplayer(displayNumber);
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
    if ($('#displayer').val() === '0') {
      clearExpression();
      $(this).html('AC');
    } 
    updateDisplayer('0');
  });
}

function setDisplayerChange() {
  $('#displayer').change(function() {
    if ($(this).val() === '') {
      updateDisplayer('0');
    }
    if ($(this).val() === '0') {
      $('#clearBtn').html('AC');
    } else if(expression.number1 !== '') {
      $('#clearBtn').html('C');
    }
  });
}

function setNumberBtnAction() {
  $('button[name="numberBtn"]').click(function() {
    if (displayNumber === '0') {
      displayNumber = '';
    }
    displayNumber += $(this).html();
    $('#displayer').val(displayNumber);
  });
}

function setNegativeBtnAction() {
  $('#negativeBtn').click(function() {
    service.getNegative($('#displayer').val(), updateDisplayer);
  });
}

function setPercentageBtnAction() {
  $('#percentageBtn').click(function() {
    service.getPercentage($('#displayer').val(), function(result) {
      updateDisplayer(result);
      displayNumber = '0';
    });
  });
}

function setOperatorBtnAction() {
  $('button[name="operaterBtn"]').click(function() {
    if (expression.number1 === '') {
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
        updateDisplayer(result);
        clearExpression();
        expression.number1 = result;
        displayNumber = '0';
        if (executeOp !== '=') {
          expression.op = executeOp; 
        }
      });
    }
  });
}

function updateDisplayer(number) {
  displayNumber = number;
  $('#displayer').val(displayNumber);
}

function clearExpression() {
  expression = {
    number1:'',
    number2:'',
    op:'',
  }
}