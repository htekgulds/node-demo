var hex2rgb = require('../src/js/lib/hex2rgb');
var expect	= require('chai').expect;

describe('hex to rgb conversion', function () {
	
	it('should fail with less than 3 characters', function(done) {

		hex2rgb('#ff', function(err) {

			expect(err).to.exist;
			done();
		});
	});

	it('should fail with more than 6 characters', function(done) {

		hex2rgb('#fffffff', function(err) {

			expect(err).to.exist;
			done();
		});
	});

	it('should fail with more than 3 and less than 6 characters', function(done) {

		hex2rgb('#ffff', function(err) {

			expect(err).to.exist;
			done();
		});
	});

	it('should convert hex to rgb successfully', function (done) {

		hex2rgb('#ffffff', function (err, rgb) {
			
			expect(err).to.be.null;
			expect(rgb).to.deep.equal([255, 255, 255]);
			done();
		})
		
	});
});