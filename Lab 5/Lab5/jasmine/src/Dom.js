// Ernesto Murillo Lab 5 Dom js functions 


// get number value
function inputNumberOnly(selector) {
    var elem = document.querySelector(selector);
    return !isNaN(elem.value);    
}

// get text decoration value
function valueOverline(selector) {
    var elem = document.querySelector(selector);
    return elem.style.textDecoration;    
}