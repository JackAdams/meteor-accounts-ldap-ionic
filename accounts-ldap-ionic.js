// Mimic the events of the original form
// Make sure the key elements are there input[name=ldap] and input[name=password]
// Along with #login-buttons-password on the submit button

Template.ldapLoginButtonsIonic.helpers(_.extend(LDAP.formHelpers, {
  title : function () {
	return (this.title === undefined) ? 'Sign In' : this.title;  
  },
  loggingIn : function () {
	return Meteor.loggingIn();
  }
}));

Template.ldapLoginButtonsIonic.events({
  'submit form' : function (evt) {
	// Because this is a form elememt, whereas the original "form" wasn't
	// we need to prevent the default behaviour of submitting the form
    evt.preventDefault();
  }
});

Template.ldapLoginButtonsIonic.events(LDAP.formEvents);

// This is a reactive-var, so needs to be `set`
LDAP.customFormTemplate.set("ldapLoginButtonsIonic");