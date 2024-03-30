import inquirer from 'inquirer';

async function calculator() {
    const operations = [
        'Addition',
        'Subtraction',
        'Multiplication',
        'Modulus',
        'Division',
        'Exponent'
    ];

    const operationChoice = await inquirer.prompt([
        {
            type: 'list',
            name: 'operation',
            message: 'Select an operation:',
            choices: operations
        }
    ]);

    // Implement cases for each operation to take user input and perform calculations
    switch (operationChoice.operation) {
        case 'Addition':
            // Prompt the user for two numbers and perform addition
            break;
        case 'Subtraction':
            // Prompt the user for two numbers and perform subtraction
            break;
        // Implement similar cases for other operations
        default:
            console.log('Invalid operation');
    }
}

// Call the calculator function to start the application
calculator();


//--------------------------------------------------------------------------------------

// import inquirer from 'inquirer';
// interface CalculatorInput {
//     number1: number;
//     number2: number;
//     operator: string;
//   }

//   async function getCalculatorInput(): Promise<CalculatorInput> {
//     const input = await inquirer.prompt([
//       {
//         type: 'number',
//         name: 'number1',
//         message: 'Enter the first number:',
//       },
//       {
//         type: 'number',
//         name: 'number2',
//         message: 'Enter the second number:',
//       },
//       {
//         type: 'list',
//         name: 'operator',
//         message: 'Select an operator:',
//         choices: ['+', '-', '*', '/', '%', '^'],
//       },
//     ]);
  
//     return input;
//   }

//   function calculate(input: CalculatorInput): number {
//     switch (input.operator) {
//       case '+':
//         return input.number1 + input.number2;
//       case '-':
//         return input.number1 - input.number2;
//       case '*':
//         return input.number1 * input.number2;
//       case '/':
//  return input.number1 / input.number2;
//       case '%':
//         return input.number1 % input.number2;
//       case '^':
//         return input.number1 ** input.number2;
//       default:
//         throw new Error('Invalid operator');
//     }
//   }

//   async function startCalculator() {
//     const input = await getCalculatorInput();
//     const result = calculate(input);
  
//     console.log(`The result is ${result}`);
//   }

//   startCalculator();
