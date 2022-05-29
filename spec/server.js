const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');

chai.should();

chai.use(chaiHttp);

describe('Mengisi diskon dan harga barang', () => {
  it('Berhasil menghitung harga barang setelah diskon', (done) => {
    let body = ({'price':10000,'discount':20})
    chai
      .request(server)
      .post('/api/discount')
      .send(body)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('price').eql({'price':8000});
        done(err);
      });
  });
});

describe('Tidak mengisi field harga barang dan diskon', () => {
  it('Gagal menghitung harga barang setelah diskon', (done) => {
    
    chai
      .request(server)
      .post('/api/discount')
      
      .end((err, res) => {
        res.body.should.have.property('message').eql('price and discount should have a value');
        done(err);
      });
  });
});
