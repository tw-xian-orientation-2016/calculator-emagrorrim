var service;
var displayNumber;

$(document).ready(function() {
  init();
  setupBtnAction();
});

function init() {
  service = new Service();
  displayNumber = '0';
  updateDisplayer('0');
}

function setupBtnAction() {
  setDisplayerChange();
  setNumberBtnAction();
  setNegativeBtnAction();
  setPercentageBtnAction();
  setAddBtnAction();
}

function setDisplayerChange() {
  $('#displayer').change(function() {
    if ($(this).val() === '') {
      $(this).val('0');
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
    service.getPercentage($('#displayer').val(), function(number) {
      updateDisplayer(number);
      displayNumber = '0';
    });
  });
}

function updateDisplayer(number) {
  displayNumber = number;
  $('#displayer').val(displayNumber);
}