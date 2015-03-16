/*global require*/
require.config({
    shim: {},
    packages: [],
    paths : {
        'lodash' : 'bower_components/lodash/lodash',
        'magic-focus-finder' : 'bower_components/magic-focus-finder/source/main'
    }
});

require(['magic-focus-finder', 'lodash'], function(magicFocusFinder, _) {
    'use strict';

    var titleGridRows = document.querySelectorAll('.title-grid-row');

    magicFocusFinder.start();

    [].forEach.call(titleGridRows, function(row) {
        row.addEventListener('moving-focus-right', function(event) {
            console.log('attempting to move to the right');
            // move the ROW to the left one index.
            debugger;
            event.currentTarget.style.transform = 'translateX(:xpx)'.replace(':x', event.currentTarget.getBoundingClientRect().left - 191);
        });

        row.addEventListener('moving-focus-left', function(event) {
            console.log('attempting to move to the left');
            // move the row to the right one index.
            event.currentTarget.style.transform = 'translateX(:xpx)'.replace(':x', event.currentTarget.getBoundingClientRect().left + 191);
        });

        row.addEventListener('moving-focus-up', function() {
            console.log('attempting to move up.');
            // move the grid DOWN one index
            row.style.transform = 'translateY(:ypx)'.replace(':y', row.getBoundingClientRect().top - 286);
        });

        row.addEventListener('moving-focus-down', function() {
            console.log('attempting to move down');
            // move the grid UP one index
        });
    });

});
