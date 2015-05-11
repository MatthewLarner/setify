var unsupportedTypes = ['number', 'email', 'time', 'color', 'month', 'range', 'date'];

module.exports = function(element, value){
    var canSet = element.setSelectionRange &&
                !~unsupportedTypes.indexOf(element.type) &&
                element === document.activeElement;

    if (canSet) {
        var position = element.selectionStart;

        element.value = value;
        element.setSelectionRange(position, position);
    } else {
        element.value = value;
    }
};