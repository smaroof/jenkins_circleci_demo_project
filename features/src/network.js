const Person = require("./shouty");
const { defineParameterType } = require('@cucumber/cucumber')

defineParameterType({
    name: 'Person',
    regexp: /Lucy|Sean/,
    transformer: name => new Person(name)
  })
  module.exports = defineParameterType;