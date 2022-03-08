# Code-Based
## Langkah-langkah Code based dengan Sequelize

<ol>
        <li>Install perintah untuk “SEQUELIZE” di computer masing masing npm install -g sequelize-cli</li>
        <li>Install library pendukung dari sequelize (“sequelize”, “mysql2”) npm install —save sequelize mysql2</li>
        <li>Inisiasi struktur folder untuk sequelize di folder project kita : sequelize init</li>
        <li>Buat database baru lewat phpMyAdmin contoh “pelanggaran”</li>
        <li>Mengubah konfigurasi database di config/config.json (ubah pada bagian ‘database’ sesuai nama databse yg dibuat)</li>
        <li>Membuat file migration untuk menciptakan struktur table. 
            Note: buatlah file migration untuk table parent terlebih dahulu!</li>
            <ul>
                <li>
                    <b>Migration tabel siswa :</b> 
                    sequelize model:create --name siswa --attributes nis:string,nama:string,kelas:string,poin:integer
                </li>
                <li>
                    <b>Migration tabel user :</b>
                    sequelize model:create --name user --attributes nama_user:string,username:string,password:string
                </li>
                <li>
                    <b>Migration tabel pelanggaran :</b>
                    sequelize model:create --name pelanggaran --attributes nama_pelanggaran:string,poin:double  
                </li>
                <li>
                    <b>Migration tabel pelanggaran_siswa :</b>
                    sequelize model:create --name pelanggaran_siswa --attributes waktu:date,id_siswa:integer,id_user:integer                    
                </li>
                <li>
                    <b>Migration tabel detail_pelanggaran_siswa :</b>
                    sequelize model:create --name detail_pelanggaran_siswa --attributes id_pelanggaran_siswa:integer,id_pelanggaran:integer
                </li>
            </ul>
        <li>
            Review file migration dan models yang telah dibuat sesuai dengan nama yang ada pada database dan Relasi di setiap tabel
            <ul>
                <li>Pada models mengenalkan id sesuai table dibawah siswa.init dan mengenalkan nama table dibawah modelName </li>
                <li>Contoh seperti di bawah</li>
            </ul>
        </li>
        <li>Eksekusi file migrations untuk menciptakan tabel yang sudah didefinisikan
            <b>sequelize db:migrate</b>
            </br>
            Jika terdapat kekurangan / kesalahan dan ingin mengubah struktur table gunakan
            <ul>
                <li>sequelize db:migrate:undo:all</li>
                <li>ubah yang ingin diubah pada migrations dan model</li>
                <li>jangan lupa disave</li>
                <li>dan sequelize db:migrate kembali</li>
            </ul>
        </li>
    </ol>

```
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
```
