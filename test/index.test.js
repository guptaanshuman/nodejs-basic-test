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
    describe('/books', () => {
        describe('/GET', () => {
            it('should return book list', (done) => {
                chai.request(app)
                .get('/api/books')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.books.should.be.a('array');
                    res.body.books.length.should.be.eql(3);
                    res.body.books[0].should.have.property('title');
                    res.body.books[0].should.have.property('author');
                    res.body.should.have.property('success').eql(true);

                    done();
                });
            });
        });
    });
});