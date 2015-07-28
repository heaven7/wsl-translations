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
    api.addFiles('package-tap.i18n', both);

    api.use([
        'heaven7:wsl-core',
        'heaven7:wsl-i18n'
    ], both);

    api.imply('heaven7:wsl-i18n');

    api.addFiles([
        'i18n/wsl-theme-base/de.i18n.json',
        'i18n/wsl-theme-base/en.i18n.json',
        'i18n/wsl-theme-base/es.i18n.json'
    ], both);

});