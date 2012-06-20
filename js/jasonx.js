/**
 * Pinky - 1 of 111001100110110111
 *
 * Pinky is a binary clock based on CSS3, HTML and oldschool JavaScript.
 *
 * 2012 by Tim Pietrusky - www.tim-pietrusky.de
 * Free for all and everything.
 *
 */

//var date,
//    bin,
//    body,
//    active,
//    navigation,
//    binary;
//
//body = document.body;
//binary = document.getElementById('binary');
//
//active = {
//    domElement : document.getElementById('active'),
//
//    secondsx : false,
//    minutesx : false,
//    hoursx : false,
//
//    secondsxString : 'secondsx',
//    minutesxString : 'minutesx',
//    hoursxString : 'hoursx',
//
//    secondsxDec : '',
//    minutesxDec : '',
//    hoursxDec : '',
//
//    format : 24,
//    afterElement : '',
//
//    display : true,
//
//    getActive : function() {
//        if (active.secondsx) return active.secondsxString;
//        if (active.minutesx) return active.minutesxString;
//        if (active.hoursx) return active.hoursxString;
//    },
//
//    setNext : function(elementString, bin) {
//        active.reset();
//        active[elementString] = true;
//        active[elementString + 'Dec'] = bin;
//    },
//
//    reset : function() {
//        active.secondsx = false;
//        active.minutesx = false;
//        active.hoursx = false;
//    },
//
//    toggleFormat : function() {
//        if (active.format == 24) {
//            active.format = 12;
//        } else {
//            active.format = 24;
//        }
//
//        return active.format;
//    },
//
//    toggleDisplay : function() {
//        active.display = !active.display;
//
//        if (active.display) {
//            active.domElement.style.display = 'block';
//        } else {
//            active.domElement.style.display = 'none';
//        }
//
//        return active.display;
//    },
//
//    /**
//     * Add element after this.
//     *
//     * @param params
//     *
//     * @returns String afterElement
//     */
//    after : function(params) {
//        active.afterElement = '';
//
//        if (active.format == 12) {
//            active.afterElement = ' am';
//
//            if (params._hours > 11) {
//                active.afterElement = ' pm';
//            }
//        }
//
//        return active.afterElement;
//    }
//};
//
//navigation = {
//    init : function() {
//        navigation.button.rotate.register();
//        navigation.button.timeformat.register();
//        navigation.button.digital.register();
//    },
//
//    /*
//     * @TODO: 20120324 [TimPietrusky] - Button-Factory! Now! FUCK!
//     */
//    button : {
//        root : {
//            domElement : document.getElementsByClassName('button-root')[0],
//            register : function() {
//                /* onclick */
//                document.getElementsByClassName('button-root')[0].onclick = function() {
//                    window.location.href = "http://www.tim-pietrusky.de";
//                };
//            }
//        },
//        rotate : {
//            domElement : '',
//            register : function() {
//                // Get
//                navigation.button.rotate.domElement = document.getElementsByClassName('button-rotate')[0];
//
//                // Set content
//                navigation.button.rotate.domElement.innerHTML = '&#8635;';
//
//                /* onclick */
//                document.getElementsByClassName('button-rotate')[0].onclick = function() {
//                    if (binary.className == 'rotated') {
//                        binary.className = '';
//                        // Set content
//                        navigation.button.rotate.domElement.innerHTML = '&#8635;';
//
//                    } else {
//                        binary.className = 'rotated';
//                         // Set content
//                        navigation.button.rotate.domElement.innerHTML = '&#8634;';
//                    }
//                }
//            }
//        },
//
//        timeformat : {
//            domElement : '',
//            register : function() {
//                // Get
//                navigation.button.timeformat.domElement = document.getElementsByClassName('button-timeformat')[0];
//
//                // Set content
//                navigation.button.timeformat.domElement.innerHTML = '24';
//
//                // click
//                navigation.button.timeformat.domElement.onclick = function() {
//                    navigation.button.timeformat.domElement.innerHTML = active.toggleFormat();
//                };
//            }
//        },
//
//        digital : {
//            domElement : '',
//            lg : {
//                labelOn : '&#8801;',
//                titleOn : 'digital on',
//                labelOff : '&#8800;',
//                titleOff : 'digital off'
//            },
//            register : function() {
//                // Get
//                navigation.button.digital.domElement = document.getElementsByClassName('button-digital')[0],
//
//                // Set content
//                navigation.button.digital.domElement.innerHTML = navigation.button.digital.lg.labelOn;
//                navigation.button.digital.domElement.title = navigation.button.digital.lg.titleOn;
//
//                // click
//                navigation.button.digital.domElement.onclick = function() {
//                    if (active.toggleDisplay()) {
//                        navigation.button.digital.domElement.innerHTML = navigation.button.digital.lg.labelOn;
//                        navigation.button.digital.domElement.title = navigation.button.digital.lg.titleOn;
//                    } else {
//                        navigation.button.digital.domElement.innerHTML = navigation.button.digital.lg.labelOff;
//                        navigation.button.digital.domElement.title = navigation.button.digital.lg.titleOff;
//                    }
//                };
//            }
//        }
//    }
//};
//
//function toBin(dec, positions) {
//    bin = parseInt(dec).toString(2);
//    bin = fill(bin, positions);
//    return bin;
//};
//
//function fill(value, positions) {
//    value = value.toString();
//
//    while (value.length < positions) {
//        value = '0' + value;
//    }
//
//    return value;
//}
//
//function updateClock() {
//    date = new Date;
//
//    var _hours    = date.getHours(),
//        _hoursDec = date.getHours(),
//        _minutes  = date.getMinutes(),
//        _seconds  = date.getSeconds();
//
//    // Timeformat: 24/12
//    if (active.format === 12) {
//        if (_hours > 12) {_hoursDec = _hours - 12;}
//        if (_hours == 0) {_hoursDec = 12;}
//    }
//
//    // To binary
//    _hours   = toBin(_hoursDec, 5),
//    _minutes = toBin(date.getMinutes(), 6),
//    _seconds = toBin(date.getSeconds(), 6);
//
//    // Render
//    toScreen('hours', _hours);
//    toScreen('minutes', _minutes);
//    toScreen('seconds', _seconds);
//
//    if (active.getActive() == null) {
//        active[active.secondsxString] = true;
//        active.secondsxDec = _seconds;
//        active.minutesxDec = _minutes;
//        active.hoursxDec = _hours;
//    } else {
//        if (active.hoursxDec != _hours) {
//            active.setNext(active.hoursxString, _hours);
//        } else if (active.minutesxDec != _minutes) {
//            active.setNext(active.minutesxString, _minutes);
//        } else if (active.secondsxDec != _seconds) {
//            active.setNext(active.secondsxString, _seconds);
//        }
//    }
//
//    if (active.display) {
//        active.domElement.className = active.getActive();
//
//        setTimeout(function() {
//            active.domElement.innerHTML = fill(_hoursDec, 2) + ':' + fill(date.getMinutes(), 2) + ':' + fill(date.getSeconds(), 2);
//
//            // Timeformat: 24/12
//            active.domElement.innerHTML += active.after({'_hours' : date.getHours()});
//
//            setTimeout(function() {
//                active.domElement.className = ' ';
//            }, 200);
//        }, 50);
//    }
//};
//
///*
// * toScreen(selector, value)
// *
// * @param String selector
// * @param String value
// *
// * Display changes to the screen
// *
// */
//function toScreen(selector, value) {
//    var childs,
//        element;
//
//    childs = document.getElementsByClassName(selector)[0].getElementsByTagName('div');
//
//    for(var i = 0; i < value.length; i++) {
//        element = childs[i];
//        element.className = '';
//
//        if (value.charAt(i) == 1) {
//            element.className = 'true';
//        }
//    }
//};
//
///*
// * jQuery 1.7.3pre
// * 20120324 [TimPietrusky] - added
// *
// * @see http://james.padolsey.com/jquery/#v=git&fn=jQuery.fn.hasClass
// */
//document.hasClass, active.hasClass = function (selector) {
//    var className = " " + selector + " ",
//        i = 0,
//        l = this.length;
//    for (; i < l; i++) {
//        if (this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf(className) > -1) {
//            return true;
//        }
//    }
//
//    return false;
//};
//
//
///* http://stackoverflow.com/a/7088499 */
///*while (document.readyState !== 'complete') {
//    navigation.init();
//    setInterval(updateClock, 1000);
//
//    break;
//}*/

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
