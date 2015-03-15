/*global require*/
require.config({
    shim: {},
    packages: [],
    paths : {
        'lodash' : 'bower_components/lodash/lodash',
        'magic-focus-finder' : 'bower_components/magic-focus-finder/source/main'
    }
});

require(['magic-focus-finder'], function(magicFocusFinder) {
    'use strict';

    magicFocusFinder.start();

    window.alert('your momma');
});
