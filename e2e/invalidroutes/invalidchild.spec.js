'use strict';

describe('Child not found', function() {

    var page;

    beforeEach(function() {
        browser.get('/#!/page2/totallynotexistingchild');
        page = require('./invalidpage.po');
    });

    it('h1 should say "Not found"', function() {
        expect(page.h1.getText()).toMatch('Not found');
    });

    it('h3 should say "Sorry, the web page you are trying to access is no longer available"', function() {
        expect(page.h3.getText()).toMatch('Sorry, the web page you are trying to access is no longer available');
    });

});
