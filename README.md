# Firebase Data Type Mismatch Error
This repository demonstrates a common yet easily overlooked error in Firebase data handling. The issue arises when accessing a field in a document that has an unexpected data type. This is demonstrated in the `bug.js` file.  The `bugSolution.js` file provides a robust solution to prevent such issues.

## Problem
The `bug.js` file shows code that assumes the 'age' field in a user document is always a number.  However, if the data in Firebase is inconsistent (e.g., 'age' is sometimes a string or null), the code will throw an error.

## Solution
The `bugSolution.js` file addresses this by including thorough type checking and handling of potential null values before attempting to perform calculations or other operations on the retrieved data.

## How to Reproduce
1.  Set up a Firebase project and create a collection named 'users'.
2.  Add a document to the 'users' collection with inconsistent data types for the 'age' field in some documents (e.g., String or null).
3.  Run the `bug.js` code to observe the error.
4.  Run the `bugSolution.js` code to see how the issue can be avoided. 