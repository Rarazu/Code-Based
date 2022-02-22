'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pelanggaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // relasi pelanggaran -> detail_pelanggaran (p -> c)
      // key : id_pelanggaran
      // p: pelanggaran
      // c: detail_pelanggaran_siswa
      // tipe: pelanggaran tercatat sebanyak beberapa kali di detail (one to many)
      this.hasMany(models.detail_pelanggaran_siswa, {
        foreignKey: "id_pelanggaran",
        as: "detail_pelanggaran_siswa"
      })

    }
  }
  pelanggaran.init({
    id_pelanggaran:{  //dikenalkan, karena bisa dianggap id
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nama_pelanggaran: DataTypes.STRING,
    poin: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'pelanggaran',
    tableName: 'pelanggaran'
  });
  return pelanggaran;
};