const chai = require('chai');
chai.use(require('chai-datetime'))
const expect = chai.expect;

const holidays = require('./index');

describe('Gregorian Calendar', function(){
	it('should return New year as holiday', function(){
		expect(holidays.isHoliday("2017-01-01")).to.be.true;
		expect(holidays.isHoliday("2018-01-01")).to.be.true;
		expect(holidays.isHoliday("2019-01-01")).to.be.true;
	})

	it('should NOT return 2nd of January as holiday', function(){
		expect(holidays.isHoliday("2017-01-02")).to.be.false;
		expect(holidays.isHoliday("2018-01-02")).to.be.false;
		expect(holidays.isHoliday("2019-01-02")).to.be.false;
	})

	it('should return Easter as holiday', function(){
		expect(holidays.isHoliday("2008-03-23")).to.be.true;
		expect(holidays.isHoliday("2017-04-16")).to.be.true;
		expect(holidays.isHoliday("2018-04-01")).to.be.true;
		expect(holidays.isHoliday("2019-04-21")).to.be.true;
	})

	it('should return Easter Monday as holiday', function(){
		expect(holidays.isHoliday("2008-03-24")).to.be.true;
		expect(holidays.isHoliday("2017-04-17")).to.be.true;
		expect(holidays.isHoliday("2018-04-02")).to.be.true;
		expect(holidays.isHoliday("2019-04-22")).to.be.true;
	})

	it('should return 1st of May as holiday', function(){
		expect(holidays.isHoliday("2017-05-01")).to.be.true;
		expect(holidays.isHoliday("2018-05-01")).to.be.true;
		expect(holidays.isHoliday("2019-05-01")).to.be.true;
	})

	it('should return End of WW2 as holiday', function(){
		expect(holidays.isHoliday("2017-05-08")).to.be.true;
		expect(holidays.isHoliday("2018-05-08")).to.be.true;
		expect(holidays.isHoliday("2019-05-08")).to.be.true;
	})

	it('should return Ascension as holiday', function(){
		expect(holidays.isHoliday("2008-05-01")).to.be.true;
		expect(holidays.isHoliday("2017-05-25")).to.be.true;
		expect(holidays.isHoliday("2018-05-10")).to.be.true;
		expect(holidays.isHoliday("2019-05-30")).to.be.true;
	})

	it('should return Pentecost as holiday', function(){
		expect(holidays.isHoliday("2008-05-11")).to.be.true;
		expect(holidays.isHoliday("2017-06-04")).to.be.true;
		expect(holidays.isHoliday("2018-05-20")).to.be.true;
		expect(holidays.isHoliday("2019-06-09")).to.be.true;
	})

	it('should return Pentecost Monday as holiday', function(){
		expect(holidays.isHoliday("2008-05-12")).to.be.true;
		expect(holidays.isHoliday("2017-06-05")).to.be.true;
		expect(holidays.isHoliday("2018-05-21")).to.be.true;
		expect(holidays.isHoliday("2019-06-10")).to.be.true;
	})

	it('should return French National day as holiday', function(){
		expect(holidays.isHoliday("2017-07-14")).to.be.true;
		expect(holidays.isHoliday("2018-07-14")).to.be.true;
		expect(holidays.isHoliday("2019-07-14")).to.be.true;
	})

	it('should return Assomption as holiday', function(){
		expect(holidays.isHoliday("2017-08-15")).to.be.true;
		expect(holidays.isHoliday("2018-08-15")).to.be.true;
		expect(holidays.isHoliday("2019-08-15")).to.be.true;
	})

	it('should return Toussaint as holiday', function(){
		expect(holidays.isHoliday("2017-11-01")).to.be.true;
		expect(holidays.isHoliday("2018-11-01")).to.be.true;
		expect(holidays.isHoliday("2019-11-01")).to.be.true;
	})

	it('should return End of WW1 as holiday', function(){
		expect(holidays.isHoliday("2017-11-11")).to.be.true;
		expect(holidays.isHoliday("2018-11-11")).to.be.true;
		expect(holidays.isHoliday("2019-11-11")).to.be.true;
	})

	it('should return Christmas as holiday', function(){
		expect(holidays.isHoliday("2017-12-25")).to.be.true;
		expect(holidays.isHoliday("2018-12-25")).to.be.true;
		expect(holidays.isHoliday("2019-12-25")).to.be.true;
	})

});