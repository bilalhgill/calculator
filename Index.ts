import * as inquirer from "inquirer";
import chalk from "chalk";

enum operator {
    Add = "Adddtion",
    subtract = "Subtraction",
    Multiply = "Multiplication",
    Divide = "Division",

    
}


const prompt = inquirer.createPrompModule();

function validateNumber(input: string): boolean | string {
if (isNaN(parseFloat(input)))
{
    return " Please enter a number"
}

}


async function main(){
    const input = await prompt([{
        type: "input",
        name: "num1",
        message: "Please enter a number",
        validate: validateNumber,
    },
    {
        type: "input",
        name: "operator",
        message: "Seelect operator: ",
        Choices: Object.values(operator),
    },
    {
        type: "input",
        name: "num2",
        message: "Please enter Second number",
        validate: validateNumber,
    }
    
])
const num1  = parseFloat(input.num1);
const num2 = parseFloat(input.num2);
let result: number;

const selectedOperator = input.operator as Operator;
let result : number;

if (selectedOperator === Operator.Add)
{
    result = num1 + num2;
    console.log(chalk.green.bgRedBright(`result = ${result}`))
}else if (selectedOperator === Operator.Divide){
    result = num1 / num2;
    console.log(chalk.yellow.bgRedBright(`result = ${result}`))
}else if (selectedOperator === Operator.Multiply){
    result = num1 * num2;
    console.log(chalk.yellow.bgRedBright(`result = ${result}`))
}else if (selectedOperator === Operator.sub){
    result = num1 - num2;
    console.log(chalk.yellow.bgRedBright(`result = ${result}`))
}

}


main();