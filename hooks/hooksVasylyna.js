describe('level 1', function() {

    before(function() { console.log("L1 - before - upper describe") });
    beforeEach(function() { console.log("L1 - beforeEach - upper describe") });
    after(function() { console.log("L1 - after - - upper describe") });
    afterEach(function() { console.log("L1 - afterEach - - upper describe") });

    it('L1 test A', function() {});
    it('L1 test B', function() {});

    describe('level 2', function() {

        before(function() { console.log("L2 - before - - inner describe") });
        beforeEach(function() { console.log("L2 - beforeEach - inner describe") });
        after(function() { console.log("L2 - after - inner describe") });
        afterEach(function() { console.log("L2 - afterEach - inner describe") });

        it('L2 test A', function() {});
        it('L2 test B', function() {});
    });
});