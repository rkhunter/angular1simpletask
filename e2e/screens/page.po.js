/*
 * This file uses the Page Object pattern to define the main page for tests.
 * See docs/coding-guide/e2e-tests.md for more info.
 */

'use strict';

var Page = function() {
    this.jumbotron = element(by.css('.jumbotron'));
    this.title = this.jumbotron.element(by.css('h1'));
    this.subtitle = this.jumbotron.element(by.css('p'));
    this.tabs = this.jumbotron.element(by.css('.nav-tabs')).all(by.css('li'));
};

module.exports = new Page();
