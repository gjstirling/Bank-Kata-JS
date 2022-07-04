# Bank Kata JS 

### Installation 

Clone this repo into a directory of your choice. You will also need an up to date version of node to run this locally through the terminal. In the root directory run the follwoing command to install dependencies: 
```npm install```

### Usage

Open using a code editor, from the root folder use the following command to run an example usage of the program: 
```
node src/main.js 
```

Tests can be run by entering the command: 
```
npm test 
```

## Approach 

From the specification it is clear the user has three possible interactions with the program. These are deposit, withdraw and printing a bank statement. Due to this I choose to model my interface as an account class with dependencies on some lower level classes to manage creating/storing transactions and creating statements. 

The transaction class is used to create and store transactions while the statement class is used to format those transactions. The account class provides the link between the classes and the user. 

### Domain model
![Domain Model Image](https://github.com/gjstirling/Bank-Kata-JS/blob/main/public/Domain%20model.png)

# Specification 

### Requirements

* You should be able to interact with your code via a REPL like IRB or Node.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

## Self-assessment

Once you have completed the challenge and feel happy with your solution, here's a form to help you reflect on the quality of your code: https://docs.google.com/forms/d/1Q-NnqVObbGLDHxlvbUfeAC7yBCf3eCjTmz6GOqC9Aeo/edit
