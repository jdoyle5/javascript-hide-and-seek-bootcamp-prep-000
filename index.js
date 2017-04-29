function getFirstSelector(selector) {
  var element = document.querySelector(selector);
  return element;
}

function nestedTarget() {
  var element = document.querySelector('#nested .target')
  return element;
}

function increaseRankBy(n) {
  var listValues = document.getElementById('app').querySelectorAll('.ranked-list li')
  for (var i=0; i<listValues.length; i++) {
    var currentValue = parseInt(listValues[i].innerHTML)
    var added = (currentValue + n)
    listValues[i].innerHTML = added
  }
}

function deepestChild(array, testFunc) {
  var element = document.querySelectorAll('#grand-node div')
  var last = (element.length-1)
  return element[last];
}
