# Regex Utility Library - NOTE: Do not do this without first meeting with your lead instructor!

Everything you learn in JavaScript can be represented and remembered with a `function` you create. The goal of this project is to create an interactive utility library of all the JavaScript operations and functions you learn.

Utility libraries are an important feature of any [high level programming language](https://en.wikipedia.org/wiki/High-level_programming_language).

[jQuery](https://jquery.com/) is a library we have been using so far—it primarily helps with selecting elements on the DOM, listening for events, and manipulating the DOM, but it also has some utility functions. Other popular utility libraries: [Lodash](https://lodash.com/) (all-purpose utilities), [Math.js](https://mathjs.org/) (utilities for better mathematic functions), and [Moment.js](https://momentjs.com/) (utilities for handling dates and times).

Are you ready to build your own?

## Step 1: Fork and clone this app

What and what?

**Forking** makes a copy of someone else's Github repository and puts this copy in your own Github repositories.

**Cloning** this newly forked repository copies it onto your computer for local editing. All changes that you push will now go to your fork in your repositories.

### Walkthrough

In your coding folder on your computer, create a folder for this project.

View this page on Github. Go to the top of the page and click "Fork".

If given the option, select your username.

You will be taken to a new repo under your Github username. Click "Clone or download", and copy the URL you are given.

In your terminal, go to the folder you created for this project.

Enter the following:

`git clone TheUrlYouCopiedFromGithub .` **Note the period at the end!**

This will clone the forked repo into the folder you've created.

You don't need to do anything else to connect it to Github. All your changes will be pushed to the right repo. Simply make changes then commit & push!

### More reading

[Difference between Git Clone and Git Fork](https://www.toolsqa.com/git/difference-between-git-clone-and-git-fork/)

[What is the difference between Forking and Cloning on GitHub?](https://stackoverflow.com/questions/7057194/what-is-the-difference-between-forking-and-cloning-on-github)

[How do you clone a Git repository into a specific folder?](https://stackoverflow.com/questions/651038/how-do-you-clone-a-git-repository-into-a-specific-folder)

## Step 2: Add JavaScript functions to your library

Create simple functions that demonstrate a working knowledge JavaScript operations and functions. Create your own name for each function—**the name must be unique** and must be the same for the function in `functions.js` and `index.html`. Write a short description that makes sense for you. In the comments of your function, list the arguments and the return value this function accepts.

Add functions to the `functions.js` file.

Add a new Bootstrap column to `index.html` by copying and pasting everything between and including `<!-- start column -->` and `<!-- end column -->` editing the **function name**, its **description**, and **the number of inputs** it has.

### List of functions

**Complete everything** in [JavaScript Algorithms and Data Structures Certification > Regular Expressions](https://www.freecodecamp.org/learn/).

As you complete each one, create simple utility functions that demonstrate a working knowledge of these lessons:

-  Match Literal Strings
-  Match Single Character with Multiple Possibilities
-  Match Single Characters Not Specified
-  Match Characters that Occur One or More Times
-  Find One or More Criminals in a Hunt
-  Match Beginning String Patterns
-  Match Ending String Patterns
-  Match All Letters and Numbers
-  Match Everything But Letters and Numbers
-  Match All Numbers
-  Match All Non-Numbers
-  Match Non-Whitespace Characters
-  Positive and Negative Lookahead
-  Check For Mixed Grouping of Characters
-  Use Capture Groups to Search and Replace
-  Remove Whitespace from Start and End

## Step 3: Apply your learning to White Bear

### On `index.html`

When a user creates an email under "Nice to meet you" lets add some new logic to our email validation when the user clicks "Let's go!":

Let's verify that the user entered something that resembles a valid email address. For our purposes, a valid email address consists of the following, in order:

1. Starting with at least one alphanumeric character
2. An `@` character
3. At least one alphanumeric character
4. A `.` character
5. Ending with at least 2 alphabetical characters

If the user's email does not meet these criteria, show an error message: "Please enter a valid email address."

### On `all-cards.html`

When the user enters text into the "Search for a word" input and then clicks "Search" we should console.log what the user entered. However, we want to "sanitize" the user's input. Our API will only accepts alphabetical words separated by a space. Follow these steps to properly sanitize their input:

1. Replace all non-alphabetical characters with spaces.
2. All whitespace with 2 or more spaces should be converted to single spaces.
3. [Trim](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim) space at the beginning and end of the search string
4. [Lowercase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) all characters.

So a search input of `1. Help Me---This is hard!!!` should console.log `help me this is hard`.

## Step 4: Move on to the next Waypoint!
