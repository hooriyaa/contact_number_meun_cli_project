#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
console.log("\t", "-".repeat(70), "\t");
console.log(chalk.yellowBright("\t\tWelcome To My Cli Typescript Project - 'CONTACTS NUMBERS MENU'\t\t"));
console.log("\t", "-".repeat(70), "\t");
let contacts = [];
let contactsSerialNo = 1;
async function contactMenuInput() {
    const inputContact = await inquirer.prompt({
        type: "list",
        name: "contact",
        message: "Select any one option:",
        choices: ["Add Contact", "View Contact", "Close Menu"],
    });
    let { contact } = inputContact; //destruction
    if (contact === "Add Contact")
        addContact();
    if (contact === "View Contact")
        viewContact();
    if (contact === "Close Menu")
        console.log(chalk.bold.yellowBright.italic(`\nThank you for using our contact menu!!`));
}
contactMenuInput();
async function addContact() {
    let inputContactDetails = await inquirer.prompt([
        {
            name: "personName",
            type: "input",
            message: "Enter your name please:",
        },
        {
            name: "phoneName",
            type: "input",
            message: "Enter your contact please:",
        },
    ]);
    const { personName, phoneName } = inputContactDetails;
    contacts.push({
        ID: contactsSerialNo++,
        Name: personName,
        phoneNumber: phoneName,
    });
    console.log(chalk.bold.magentaBright(`\nNew contact number has been added!!!\n`));
    contactMenuInput();
}
function viewContact() {
    if (contacts.length > 0)
        contacts.forEach((user) => {
            console.log(`\n${user.ID}, Person Name:${chalk.bold.blueBright(user.Name)} ---- Contact Number: ${chalk.greenBright(user.phoneNumber)}`);
        });
    else {
        console.log(chalk.red("\nNo contact available...\n"));
    }
}
