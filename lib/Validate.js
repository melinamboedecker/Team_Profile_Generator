  const chalk = require('chalk');

  function questionValidation (input) {
      //checks for entry
      if (input === "") {
          console.log(chalk.red(`Please enter ${this.name}`));
          return false;
      };
      //checks if emailInput is true then checks format and logs comment if not correct format
      if (this.emailInput) {
        const isValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$/.test(input);
        if (!isValid) {
            console.log(chalk.red(" Please enter a valid email"));
        }
        return isValid;
      }
      //checks if idInput true then logs comment if entry not a number
      if (this.idInput) {
          const isValid = /[0-9]/.test(input)
          if (!isValid) {
              console.log(chalk.red("Please enter a number"));
          }
          return isValid;
      }
      //checks if phoneNumberInput is true then logs comment if not correct number of numerical characters
      if (this.phoneNumberInput) {
          const isValid = /^([01]{1})?[\-\.\s]?\(?(\d{3})\)?[\-\.\s]?(\d{3})[\-\.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/.test(input);
          if (!isValid) {
              console.log(chalk.red("Please enter a valid phone number"));
          }
          return isValid;
      }
  return true;
}

module.exports = questionValidation;