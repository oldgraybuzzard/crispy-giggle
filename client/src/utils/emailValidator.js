// create a function to grab an email parameter
function emailValidator(email) {
  // use regex to match key components of an email address `xxx@xx.xxx`
  const regex = /.+@.+\..+/;
  // return a test that will give us true or false.
  return regex.test(email);
}

module.export = emailValidator;
