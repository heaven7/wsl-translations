Package.describe({
  name: 'heaven7:wsl-translations',
  version: '0.0.1',
  summary: 'Translations package',
  git: 'https://github.com/heaven7/wsl-translations.git',
  documentation: 'README.md'
});

both = ['client','server'];

Package.onUse(function(api) {
    api.versionsFrom('1.1.0.2');

    api.use([
        'heaven7:wsl-core@0.0.1',
        'heaven7:wsl-i18n@0.0.1'
    ], both);

    api.imply('heaven7:wsl-i18n');
    api.addFiles('package-tap.i18n', both);

    api.addFiles([

        // wsl-events
        'i18n/wsl-events/de.i18n.json',
        'i18n/wsl-events/en.i18n.json',
        'i18n/wsl-events/es.i18n.json',

        // wsl-items
        'i18n/wsl-items/de.i18n.json',
        'i18n/wsl-items/en.i18n.json',
        'i18n/wsl-items/es.i18n.json',

        // wsl-locations
        'i18n/wsl-locations/de.i18n.json',
        'i18n/wsl-locations/en.i18n.json',
        'i18n/wsl-locations/es.i18n.json',

        // wsl-projects
        'i18n/wsl-projects/de.i18n.json',
        'i18n/wsl-projects/en.i18n.json',
        'i18n/wsl-projects/es.i18n.json',

        // wsl-fulfiller
        'i18n/wsl-fulfiller/de.i18n.json',
        'i18n/wsl-fulfiller/en.i18n.json',
        'i18n/wsl-fulfiller/es.i18n.json',

        // wsl-settings
        'i18n/wsl-settings/de.i18n.json',
        'i18n/wsl-settings/en.i18n.json',
        'i18n/wsl-settings/es.i18n.json',

        // wsl-tasks
        'i18n/wsl-tasks/de.i18n.json',
        'i18n/wsl-tasks/en.i18n.json',
        'i18n/wsl-tasks/es.i18n.json',

        // wsl-theme-base
        'i18n/wsl-theme-base/de.i18n.json',
        'i18n/wsl-theme-base/en.i18n.json',
        'i18n/wsl-theme-base/es.i18n.json',

        // wsl-useraccounts
        'i18n/wsl-useraccounts/de.i18n.json',
        'i18n/wsl-useraccounts/en.i18n.json',
        'i18n/wsl-useraccounts/es.i18n.json'

    ], both);

});
