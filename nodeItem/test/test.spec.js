require('should');
describe('this is a test',function () {
  it('this is a suit',function (done) {
    [1,2,3].indexOf(5).should.equal(-1);
    done();
  })
})