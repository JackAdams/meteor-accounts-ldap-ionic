Package.describe({
  name: 'babrahams:accounts-ldap-ionic',
  version: '0.4.0',
  summary: 'Gives babrahams:accounts-ldap package a form in the Ionic style',
  git: 'https://github.com/JackAdams/meteor-accounts-ldap-ionic',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use(['templating', 'underscore', 'less@2.5.0_2', 'sacha:spin@2.3.1'], 'client');
  api.use('babrahams:accounts-ldap@0.7.0');
  api.addFiles('accounts-ldap-ionic.css', 'client');
  api.addFiles('accounts-ldap-ionic.html', 'client');
  api.addFiles('accounts-ldap-ionic.js', 'client');
  api.imply('babrahams:accounts-ldap');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('babrahams:accounts-ldap-ionic');
  api.addFiles('accounts-ldap-ionic-tests.js');
});
