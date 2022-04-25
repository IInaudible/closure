let counter = (function() {
    let privCount = 0;

    function change(val) {
        privCount += val;
    }

    function add(val) {
        privCount += val;
    }

    function subtract(val) {
        privCount -= val;
    }

    function multiply(val) {
        privCount *= val;
    }

    function divide(val) {
        privCount /= val;
    }

    return {
        increment: function() {
            change(1);
        },
        decrement: function() {
            change(-1);
        },
        addition: function(val) {
            add(val)
        },
        subtraction: function(val) {
            subtract(val)
        },
        multiplication: function(val) {
            multiply(val);
        },
        divide: function(val) {
            divide(val);
        },
        value: function() {
            return privCount;
        }
    }
})();

console.log(counter.increment())
console.log(counter.multiplication(3))
console.log(counter.addition(3))
console.log(counter.subtraction(1))
console.log(counter.value())