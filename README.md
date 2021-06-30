# calculator-js
Simple calculator application built using pure js, html, and css. The calculator will be able to perform basic functions such as add, subtract, multiply, and divide. The calculator only operates on two numbers at a time like a basic calculator found on the iPhone or on any default calculator application. 
--------
<p align='center'>
 <img width="366" alt="calcShot" src="https://user-images.githubusercontent.com/13335957/124001232-45385a00-d989-11eb-8b62-a130ccdbc5db.png">
</p>

# Plan
**Q:** What will be the interface?

**A:** The user will interact with the graphical user interface through a web browser built using HTML, CSS, and JavaScript.

**Q:** What will the inputs be?

**A:** Numbers and simple math operators accessed through the front-end interface.

**Q:** What will the outputs be?

**A:** The evaluated outcome of the math expression inputted by the user displayed on the application output screen section.

**Algorithm (Pseudocode):**

- [ ] Problem 1: Create User Interface

- [ ] Problem 2: Create Functionality

- [ ] Problem 3: Connect User Interface to Functions

# Divide and Conquer
Dividing the main problems described above into even smaller pieces to be able to efficiently finish the application with a plan and goals in mind.
## Problem 1: Create User Interface

* HTML Structure:
  * Calculator
    * Calculator Title
    * Output
    * Inputs
      * Row 1
        * Operation, Operation, Operation
      * Row 2
        * Number, Number, Number, Operation
      * Row 3
        * Number, Number, Number, Operation
      * Row 4
        * Number, Number, Number, Operation
      * Row 5
        * Number, Operation, Operation

* CSS
  * Center calculator
  * Align the rows inside calculator
  * setup CSS Grid for input buttons
  * choose font-family
  * add shadows
  * add animations
  * make the design responsive

## Problem 2: Create Functionality

* Add Function:
  * Usage: perform addition on two numbers returning the sum
  * Input: two numbers; order doesn't matter ex: add(2,7) => 2+7 = 9
  * Output: one number


* Subtract Function:
  * Usage: perform subtraction on two numbers returning the difference
  * Input: two numbers; order matters ex: subtract(6,2) => 6-2 = 4
  * Output: one number

* Multiply Function:
  * Usage: perform multiplication on two numbers returning the product
  * Input: two numbers; order doesn't matter ex: multiply(5,3) => 5x3 = 15
  * Output: one number

* Divide Function:
  * Usage: perform division on two numbers returning the quotient
  * Input: two numbers; order matters ex: divide(4,2) => 4/2 = 2
  * Output: one number
  * Cannot divide by zero, show error

* Operate Function:
  * Usage: performs user chosen operation on 2 numbers
  * Input: two numbers, operator function
  * Output: one number

## Problem 3: Connect User Interface to Functions

* Use DOM methods to add event functionality

