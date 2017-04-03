Lab 1
Create a series of small scripts and complete each one.

script1.html
Create three JavaScript Variables each with it's own type. String, boolean, integer. Use == and === to compare each variable with the other in an IF/else statement. Display a message using console.log if the statement is true or else false.

script2.html
Write two loops, one that counts from 10 to 0 and another that counts from 0 to 10. Use a for loop for one and a while loop for the other. For the third loop have a loop that will loop from 0 to 10 but only output the count if it is a divisible by two. You will need to use a for loop and an if statement with in the loop.  Your logic should use the modulus operator. Use console.log to display the loop count. 
 
script3.html
Create a form with a input field and some text on the page inside of a div tag. Use the query selector to select the two elements on the page and change the style. Change the color, fontSize and fontFamily. Both the field element and the div element should be different.

script4.html
Create two variables, a String type and an Integer type. Find three different methods(functions) that can be used with the variables and use them on the page. Please also add a comment about the methods purpose.


Lab 2
Create a form with a textbox and a button. The textbox will hold a number that will represent the number of rows and columns in a table. Once the submit button is clicked you will generate a two dimensional array with each of the elements of the array holding a random number between 1 and 100.

Lab 3
The objective of this assignment is to practice DOM manipulation with jQuery. Your task is to create a JavaScript application that allows a user to specify their availability to an employer. You will need to dynamically create a grid that looks like the below. It is okay to hard code the months and years (2016-2018). Changing the month and/or year will update the grid to represent the correct month and year.

Lab 4
Edit a simple form submission screen with simple error handling capabilities/feedback and a confirmation display Four Fields and a submission button
Name
Email Address
Phone Number
Description

Requirements:
If any text input field is empty it will:
The label will get changed to red by adding the error class.
If the input is not empty, then remove the error class.
This also includes the radio buttons.
When the scroll agreement is completely scrolled, enable the radio buttons to be selected.
All fields must have a value and a radio button must be checked to complete the last step.

Lab 5
Test suite with Jasmin***
Test suite one
Create the following functions that does the following:
Take a dollar amount with cents and just return the dollar amount. 
Take a dollar amount with cents and just return the cents. 
Note : The dollar symbol does not need to be passed into the function, just the numeric amount.  $10.03 will just pass in "10.03". All numeric values must be passed in as a string. The function returns a string with no dollar symbol. E.G. 10.03 returns 10 or 10.03 returns 03.
In the Spec file create the following test cases. Each item is an it test:
Regarding the function to return the dollar amount:
should filter $10.03 to $10
should filter $0.03 to $0
should filter $01.3 to $1
should filter $9.99 to $9

Regarding the function to return the cents with in a dollar amount:
should filter $10.03 to 03 cents
should filter $0.03 to 03 cents
should filter $0.3 to 30 cents
should filter $.3 to 30 cents
should filter $.03 to 03 cents
should filter $0.0 to 00 cents
should filter $0.00 to 00 cents
should filter $0.99 to 99 cents
should filter $0.001 to 00 cents
should filter $0.009 to 00 cents

Test suite two
Create the following functions that does the following:
Checks an input box that only accepts numbers.  This function should select the input element, evaluate the input value and return true or false if the value is numeric or not.
Checks a div element for the text-decoration style and returns that value.
In the Spec file create the following test cases:
For function one, create two test cases. One case where the input box has a value of numbers only. Second is when the input box has a value of numbers and letters.
should return true if the input box value is only numeric ( value = 123 )
should return false if the input box value is not all numeric ( value = abc123 )
For function two create a description where the text-decoration is set to "overline".  Test for each case, none|underline|overline|line-through. 
should match overline
should not match none
should not match underline
should not match line-through

Create another description. Do not set the text-decoration on the element and test for each case  none|underline|overline|line-through.
should not match overline
should not match none
should not match underline
should not match line-through
--


Lab 6
Create a class called Block using Object Oriented Programming concepts in JavaScript. The class will create a 50 by 50 pixel div that will move around on the page, rotate and change it's opacity all at random. When the block is clicked on it will remove itself from the page.


Lab 7
You will need PHP and MySQL to complete this assignment.
create the JSadvClass database.
Make sure to add JavaScript Validation to ensure all the required(*) fields have been filled out. If any required field is not filled, just display a message that indicates all fields are required. There is no need to make the required fields red or indicate which field is missing. Once the fields have been filled out prepare the data and send it to a PHP page via AJAX.

Lab 8
The HTML5 Canvas and Animation
We will be creating a canvas race game. We will have two teams, one red and the other blue, that will race to the finish line.
Using Canvas create two rectangles, one red and the other blue. They should be the same width and height. 
When moving the rectangles make sure to generate a random number to move the x position of each rectangle. 
The minimum should always be greater than zero. It should be called twice to get a unique number for each rectangle. 
Once the rectangle reaches the finish line, display the winner. A play button should appear to reset the race. 
Once the race is started the play button should be hidden again. The race can begin on the page load.

