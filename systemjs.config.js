(function(global) {

  // map tells the System loader where to look for things
  var map = {
    'dist':                       'dist', // 'dist',
    'rxjs':                       'node_modules/rxjs',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    '@angular':                   'node_modules/@angular',
    'ng2-toasty':                 'node_modules/ng2-toasty',
    'ng2-dnd':                    'node_modules/ng2-dnd',
    'ng2-slim-loading-bar':       'node_modules/ng2-slim-loading-bar'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'dist':                       { main: 'boot.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'ng2-toasty':                 { defaultExtension: 'js' },
    'ng2-dnd':                    { defaultExtension: 'js' },
    'ng2-slim-loading-bar':       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { defaultExtension: 'js' },
  };

  var packageNames = [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/http',
    '@angular/forms',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    '@angular/testing',
    '@angular/upgrade',
  ];

  // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
  packageNames.forEach(function(pkgName) {
    packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
  });

  var config = {
    map: map,
    packages: packages
  }

  // filterSystemConfig - index.html's chance to modify config before we register it.
  if (global.filterSystemConfig) { global.filterSystemConfig(config); }

  System.config(config);

})(this);