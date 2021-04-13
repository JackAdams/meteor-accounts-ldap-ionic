// Mimic the events of the original form
// Make sure the key elements are there input[name=ldap] and input[name=password]
// Along with #login-buttons-password on the submit button

Template.ldapLoginButtonsIonic.helpers(_.extend(LDAP.formHelpers, {
  title : function () {
	  return (this.title === undefined) ? 'Sign In' : this.title;  
  },
  loggingIn : function () {
	  return Meteor.loggingIn();
  },
  extraFormFields: function () {
    return LDAP.extraFormFields.get();  
  }
}));

Template.ldapLoginButtonsIonic.events(LDAP.formEvents);

// This is a reactive-var, so needs to be `set`
LDAP.customFormTemplate.set("ldapLoginButtonsIonic");