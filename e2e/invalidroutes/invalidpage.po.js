/*
 * This file uses the Page Object pattern to define the main page for tests.
 * See docs/coding-guide/e2e-tests.md for more info.
 */

'use strict';

var Page = function() {
    this.h1 = element(by.css('h1'));
    this.h3 = element(by.css('h3'));
};

module.exports = new Page();
