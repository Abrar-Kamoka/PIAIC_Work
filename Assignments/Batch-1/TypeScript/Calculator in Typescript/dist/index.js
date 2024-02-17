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
    switch (operationChoice.operation) {
        case 'Addition':
            break;
        case 'Subtraction':
            break;
        default:
            console.log('Invalid operation');
    }
}
calculator();
//# sourceMappingURL=index.js.map