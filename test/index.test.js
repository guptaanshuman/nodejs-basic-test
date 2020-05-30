const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

const app = require('../server');

chai.use(chaiHttp);

describe('/api', () => {
    describe('/GET', () => {
        it('should return welcome message', (done) => {
            chai.request(app)
            .get('/api')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('Welcome to CI/CD!');
                res.body.should.have.property('success').eql(true);

                done();

            });
        });
    });
    describe('/train', () => {
        describe('/GET', () => {
            it('should return train list', (done) => {
                chai.request(app)
                .get('/api/train')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.train.should.be.a('array');
                    res.body.train[0].should.have.property('train');
                    res.body.train[0].should.have.property('number');
                    res.body.should.have.property('success').eql(true);

                    done();
                });
            });
        });
    });
});