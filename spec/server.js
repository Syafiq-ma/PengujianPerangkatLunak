const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');

chai.should();

chai.use(chaiHttp);

describe('Mengisi diskon dan harga barang', () => {
  it('Berhasil menghitung harga barang setelah diskon', (done) => {
    chai
      .request(server)
      .post('/api/discount')
      .send({price:10000,discount:20})
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('price').eql(8000);
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
        //res.should.have.status(404);
        res.body.should.have.property('message').eql('price and discount should have a value');
        done(err);
      });
  });
});
