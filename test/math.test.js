var sqlite3 = require('..');

if( process.env.NODE_SQLITE3_MATH_FUNCTIONS === 'no' ){
    describe('math', function() {
        it(
            'skips MATH_FUNCTIONS tests when --sqlite=/usr (or similar) is tested',
            function(){}
        );
    });
} else {
    describe('math', function() {
        var db;

        before(function(done) {
            db = new sqlite3.Database(':memory:', done);
        });

        it('should select pow', function(done) {
            db.run('SELECT pow(2, ?)', 3, done);
        });
    });
}
