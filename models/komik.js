module.exports = (sequelize, DataTypes) => {
  const Komik = sequelize.define('Komik', {
    id: {
        type: DataTypes.INTEGER,
        autiIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,

    },
    description: {
        type: DataTypes.STRING,
    },
    author: {
        type: DataTypes.STRING,
    },
    imageType: DataTypes.STRING,
    imageName: DataTypes.STRING,
    imageData: DataTypes.BLOB('long'),
    });
    return Komik;
}