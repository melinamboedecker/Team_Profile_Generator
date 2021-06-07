  const chalk = require('chalk');

  function questionValidation (input) {
      if (input === "") {
          console.log(chalk.red(`Please enter ${this.name}`));
          return false;
      };
      if (this.emailInput) {
        const isValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$/.test(input);
        if (!isValid) {
            console.log(chalk.red(" Please enter a valid email"));
        }
        return isValid;
      }
      if (this.idInput) {
          const isValid = /[0-9]/.test(input)
          if (!isValid) {
              console.log(chalk.red("Please enter a number"));
          }
          return isValid;
      }
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