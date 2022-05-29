const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app/server');

chai.should();

chai.use(chaiHttp);

describe('Mengisi diskon dan harga barang', () => {
  it('Berhasil menghitung harga barang setelah diskon', (done) => {
    chai
      .request(server)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('success').eql(true);
        res.body.should.have.property('message').eql('API is live...');
        done(err);
      });
  });
});

describe('Tidak mengisi field harga barang dan diskon', () => {
  it('Gagal menghitung harga barang setelah diskon', (done) => {
    
    chai
      .request(server)
      .get('/date')
      .request.body({
          "price":50000,
          "discount":20
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('message').eql('SUCCESS');
        done(err);
      });
  });
});
