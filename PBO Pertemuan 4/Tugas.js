class Kapal {
    constructor(nama, tahunPembuatan) {
      this.nama = nama;
      this.tahunPembuatan = tahunPembuatan;
    }
  
    informasiKapal() {
      return `Kapal ini bernama ${this.nama} dan dibuat pada tahun ${this.tahunPembuatan}`;
    }
  }
  
  class KapalPenumpang extends Kapal {
    constructor(nama, tahunPembuatan, kapasitasPenumpang) {
      super(nama, tahunPembuatan);
      this.kapasitasPenumpang = kapasitasPenumpang;
    }
  
    informasiPenumpang() {
      return `${super.informasiKapal()} dengan kapasitas penumpang ${this.kapasitasPenumpang}`;
    }
  }
  
  class PembelianTiket extends KapalPenumpang {
    constructor(nama, tahunPembuatan, kapasitasPenumpang, hargaTiket) {
      super(nama, tahunPembuatan, kapasitasPenumpang);
      this.hargaTiket = hargaTiket;
    }
  
    beliTiket(jumlahTiket) {
      const totalHarga = this.hargaTiket * jumlahTiket;
      return `Pembelian ${jumlahTiket} tiket berhasil. Total harga: Rp${totalHarga}. Kapal: ${this.nama}, Kapasitas: ${this.kapasitasPenumpang}, Harga per tiket: Rp${this.hargaTiket}`;
    }
  }
  
  class PembelianRuangan extends KapalPenumpang {
    constructor(nama, tahunPembuatan, kapasitasPenumpang, hargaRuangan) {
      super(nama, tahunPembuatan, kapasitasPenumpang);
      this.hargaRuangan = hargaRuangan;
    }
  
    beliRuangan(jumlahRuangan) {
      const totalHarga = this.hargaRuangan * jumlahRuangan;
      return `Pembelian ${jumlahRuangan} ruangan berhasil. Total harga: Rp${totalHarga}. Kapal: ${this.nama}, Kapasitas: ${this.kapasitasPenumpang}, Harga per ruangan: Rp${this.hargaRuangan}`;
    }
  }
  
  const pembelianTiket1 = new PembelianTiket("Kapal Laut Budiono Siregar", 2010, 500, 200000);
  
  const pembelianRuangan1 = new PembelianRuangan("Kapal Laut Budiono Siregar", 2010, 500, 1500000);
  
  console.log(pembelianTiket1.beliTiket(3));  // Membeli 3 tiket
  console.log(pembelianRuangan1.beliRuangan(2));  // Membeli 2 ruangan
  