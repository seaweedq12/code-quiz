# 04 Web APIs: Code Quiz

## Task

In this weeks 

## URL

https://seaweedq12.github.io/password-generator-2/

## Work

1. Firstly when the generate button is pressed the user is prompt to a input in which the user is ask to enter the length of the password between 8 and 128 characters.
![prompt](./assets/images/prompt.png)

If the user cancels or places a incorrect in put the generator will return a Error message
![error](./assets/images/error.png)

2. In the first work after the user inputs a correct number four confirms will pop up. But in the remade code four prompt about the types character in which the user will select with a "y" for yes and "n" for no.
![typeprompt](./assets/images/typeprompt.png)

But if the user enters  any another input other then "y" or "n" and alert will pop up saying "Error, please answer with a y or n" and prompt the user again. This will repeat until the user inputs a "y" or "n".
 ![error2](./assets/images/error2.png)

4. In this version the user cancel anytime to restart the process. when cancelled a mesaage will pop up
 ![cancel](./assets/images/cancel.png)

5. when the user answers all the prompt a password matching the user in put will be shown

**Example 1** - 8 letters with lowercase and special letters
![example1](./assets/images/example1.png)

**Example 2** - 47 letters with uppercase, numbers and special letters
![example2](./assets/images/example2.png)
I did a console.log on the result.length to length input is correct 

**Example 3** - 85 letters with lowercase and numbers
![example3](./assets/images/example3.png)
I did a console.log on the result.length to length input is correct 

**Example 4** - 128 letter with all types
![example4](./assets/images/example4.png)
I did a console.log on the result.length to length input is correct 