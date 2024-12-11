# Simple-calculator
1. HTML Structure
Container (<div class="calculator">): Encapsulates the calculator interface.
Input Field (<input type="text">): Displays the current input and results. It is readonly to prevent direct user editing.
Buttons (<button>): Includes numeric buttons (0–9), operation buttons (+, -, *, /, .), an equals (=) button for calculating results, and a clear (C) button.

2. CSS Styling
The calculator's style makes it visually appealing with:
A centered layout (flexbox is used for centering the calculator on the screen).
A clean and modern design (rounded corners, shadows, and responsive button grid).
Buttons are styled with hover effects to enhance user experience.

3. JavaScript Logic
appendValue(value): Appends the clicked button's value (number or operator) to the input field.
clearResult(): Clears the input field by setting its value to an empty string.
calculate():
Uses eval() to evaluate the mathematical expression entered in the input field.
Displays the result in the input field.
Wraps the evaluation in a try-catch block to handle invalid expressions, showing an alert if the input is incorrect.

4. Button Functions
Number Buttons: Add their respective numbers to the input field.
Operator Buttons: Append the mathematical operators to the input.
Equals Button (=): Calls calculate() to evaluate the input.
Clear Button (C): Resets the input field to an empty state.

5. Interactive Features
Clicking buttons updates the display (appendValue).
Error handling ensures invalid expressions (e.g., 2++2) do not break the calculator and alerts the user instead.
Visual feedback is provided through button hover effects.
