var gulp = require('gulp');
var bundler = require('aurelia-bundler');

var config = {
    force: true,
    configPath: 'config.js',
    bundles: {
        'dist/app-build': {
            includes: [

                // First, we bundle all css, html, and javascript in the root folder
                // and all subfolders. The bundler reads the mapping from the
                // config.js file, which by default uses the './dist/' folder.
                // '**/*.css!text',
                // '**/*.html!text',
                'app.js',
                'app.html!text',
                'index.html!text',

                // Next, we need to bundle all project dependencies. It is a good
                // idea to explicitly all required Aurelia libraries.
                'aurelia-bootstrapper',
                'aurelia-dependency-injection',
                'aurelia-framework',
                'aurelia-templating-binding',
                'aurelia-templating-resources',
                'aurelia-loader-default',

                // Next, we include the optional Aurelia dependencies. Your project
                // may use dependencies not listed here.
                'aurelia-router',
                'aurelia-templating-router',
                'aurelia-history-browser',
                'aurelia-logging-console',
                'aurelia-event-aggregator',

                // Last, we include any other project dependencies.
                'bootstrap'
            ],

            // Here we can specify what files not to bundle. I include a config.js
            // file in all of my projects that does NOT get deployed. I manually
            // create and upload this file to each deployment, with that deployment's
            // specific configuration. Therefore, I don't want to include it in
            // the bundle.
            excludes: [
                'config.js'
            ],

            // Lastly, since we are bundling for production, we want to minify as well.
            options: {
                minify: true
            }
        }
    }
};

// Once we declare the configuration, we can define the bundle task. Note:
// "It is almost always a good practice to run unbundle before bundling. The
// existing bundle injection and depCache should be cleared from config.js."
// (We will define the unbundle task in the next section.)
gulp.task('bundle', function() {
    return bundler.bundle(config);
});
