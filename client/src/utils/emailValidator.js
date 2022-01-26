function emailValidator(email) {
    const regex = /.+@.+\..+/;
    return regex.test(email);
};

module.export = emailValidator;