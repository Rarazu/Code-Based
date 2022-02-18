'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pelanggaran_siswa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // relasi: pelanggaran_siswa -> siswa (child -> parent)
      // parent: siswa, child: pelanggaran_siswa
      // tipe: 1 pelanggaran_siswa dilakukan oleh 1 siswa(one to one)
      this.belongsTo(models.siswa, {
        foreignKey: "id_siswa",
        as: "siswa"
      })

      // relasi: pelanggaran_siswa -> user
      // parent: user, child: pelanggaran_siswa
      // tipe: 1 pelanggaran_siswa dicatat oleh 1 user(one to one)
      this.belongsTo(models.user, {
        foreignKey: "id_user",
        as: "user"
      })

      // relasi: pelanggaran_siswa -> detail_pelanggaran_siswa
      // parent: pelanggaran_siswa, child: detail_pelanggaran_siswa
      // tipe: 1 pelanggaran_siswa mempunyai banyak detail_pelanggaran_siswa(one to many)
    }
  }
  pelanggaran_siswa.init({
    id_pelanggaran_siswa:{  //dikenalkan, karena bisa dianggap id
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    waktu: DataTypes.DATE,
    id_siswa: DataTypes.INTEGER,
    id_user: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'pelanggaran_siswa',
    tableName: 'pelanggaran_siswa'
  });
  return pelanggaran_siswa;
};