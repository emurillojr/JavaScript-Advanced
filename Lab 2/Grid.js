// Ernesto Murillo Lab 2 Grid JavaScript Page
average = document.querySelector('.average');

var button = document.querySelector('input[name="getGrid"]');

button.onclick = function (e) {
    result = document.querySelector('.result');

    num = parseInt(document.querySelector('input[name="numberEntered"]').value);
    var sum = 0;
    var totalAverage = 0;

    // creates a string var that holds the table
    var str = "<table border='1'>";
    for (row = 0; row < num; row++) {
        str += "<tr>";

        for (col = 0; col < num; col++) {

            // creates a random number from 1-100
            var randNum = Math.floor(Math.random() * 100) + 1;

            // creates an Array of each random number used in grid
            var numArray = [randNum];

            str += "<td";  // leaves the string td tag open for different styling

            // if a random num is a multiple of 3
            if (randNum % 3 === 0) {
                // make cell have red background
                str += ' style="background-color: red;">';

            }
            // if a random number is a multiple of 2
            else if (randNum % 2 === 0) {
                // make cell have blue background
                str += ' style="background-color: blue;">';

            } else {
                str += ">";
            }

            for (var i = 0; i < numArray.length; i++) {
                sum += numArray[i];

            }

            totalAverage = (sum / (num * num));

            str += randNum + "</td>";
        }
        str += "</tr>";
    }
    str += "</table>";

    result.innerHTML = str; // displays the table

    average.innerHTML = ("The Average is " + totalAverage);
};