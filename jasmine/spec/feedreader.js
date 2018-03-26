$(function () {
    // FIRST TEST SUITE

    // VARIABLES USED IN TEST
    let entriesStart,
        entriesEnd;

    // RSS FEEDS SUITE
    describe('RSS Feeds', function () {

        // IS ALLFEEDS DEFINED / NOT EMPTY?
        it('feeds are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // ALLFEEDS HAVE URL / URL NOT EMPTY?
        it('urls are defined', function () {
            for (let i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });

        // ALL FEEDS HAVE NAME / NAME NOT EMPTY?
        it('names are defined', function () {
            for (let i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });


    // MENU TEST SUITE
    describe('The Menu', function () {

        // IF TRUE, MENU IS HIDDEN
        it('menu element is hidden', function () {
            expect($('body').hasClass('menu-hidden')).toEqual(true);
        });

        // TOGGLE MENU CLICK EVENT
        it('working toggle on click event', function () {
            // CALL MENU-ICON-LINK
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    // INITIAL ENTRIES TEST SUITE
    describe('New Feed Selection', function() {
       let entries;

       beforeEach(function(done) {
           loadFeed(0, (function() {
               entries = $(".feed").html();
           }));
           done();
       });

       it('content changes when a new feed is loaded', function (done) {
           loadFeed(1, done);
           expect($(".feed").html()).not.toEqual(entries);
       });
   });
}());
