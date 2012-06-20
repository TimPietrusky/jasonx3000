/*
 * jasonx3000
 *
 * visual vomit caused by stupid CSS trolling - or like I would say: jasonx3000
 *
 * 2012 by tim-pietrusky.de
 *
 * Licensed under VVL 1.33b7 - tim-pietrusky.de/license
 */

function domLoaded_lab() {
    if (document.readyState === 'complete') {
        // Init
    } else {
        setTimeout(function() {
            domLoaded_lab();
        }, 25);
    }
}

// DOM loaded
domLoaded_lab();