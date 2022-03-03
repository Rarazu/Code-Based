# Code-Based
## Langkah-langkah Code based dengan Sequelize

1. Install perintah untuk “SEQUELIZE” di computer masing masing npm install -g sequelize-cli
2. Install library pendukung dari sequelize (“sequelize”, “mysql2”) npm install —save sequelize mysql2
3. Inisiasi struktur folder untuk sequelize di folder project kita : sequelize init
4. Buat database baru lewat phpMyAdmin contoh “pelanggaran”
5. Mengubah konfigurasi database di config/config.json (ubah pada bagian ‘database’ sesuai nama databse yg dibuat)
6. Membuat file migration untuk menciptakan struktur table. 
Note: buatlah file migration untuk table parent terlebih dahulu!
a. Migration tabel siswa :
sequelize model:create --name siswa --attributes nis:string,nama:string,kelas:string,poin:integer
b. Migration tabel user :
sequelize model:create --name user --attributes nama_user:string,username:string,password:string
c. Migration tabel pelanggaran :
sequelize model:create --name pelanggaran --attributes nama_pelanggaran:string,poin:double
d. Migration tabel pelanggaran_siswa :
sequelize model:create --name pelanggaran_siswa --attributes waktu:date,id_siswa:integer,id_user:integer
e. Migration tabel detail_pelanggaran_siswa :
sequelize model:create --name detail_pelanggaran_siswa --attributes id_pelanggaran_siswa:integer,id_pelanggaran:integer

7. Review file migration dan models yang telah dibuat sesuai dengan nama yang ada pada database dan Relasi di setiap tabel

Pada models mengenalkan id sesuai table dibawah siswa.init dan mengenalkan nama table dibawah modelName 

Contoh: 

siswa.init({
    id_siswa:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nis: DataTypes.STRING,
    nama: DataTypes.STRING,
    kelas: DataTypes.STRING,
    poin: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'siswa',
    tableName: 'siswa'
  });

8. Eksekusi file migrations untuk menciptakan tabel yang sudah didefinisikan
sequelize db:migrate
