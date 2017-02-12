'use strict';

describe('page', function() {

    var page;

    beforeEach(function() {
        browser.get('/#!/page2/ballast1');
        page = require('./page.po');
    });

    it('there should be a Jumbotron', function() {
        expect(page.jumbotron).toBeDefined();
    });

    it('there should be a header inside Jumbotron', function() {
        expect(page.title).toBeDefined();
    });

    it('subheader should say \'This is a text page. Below are the child states.\' inside Jumbotron', function() {
        expect(page.subtitle.getText()).toMatch('This is a text page. Below are the child states.');
    });

    it('there should be 3 tabs', function() {
        expect(page.tabs.count()).toBe(3);
    });

});
