module.exports = (sequelize, DataType) => {
    const Carreras = sequelize.define('Carreras', {
        num_sec: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fecha: {
            type: DataType.DATE,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        hora_inicio: {
            type: DataType.TIME,
            allowNull: false,
            defaultValue: false
        },
        hora_fin: {
            type: DataType.TIME,
            allowNull: false,
            defaultValue: false
        },
        kms: {
            type: DataType.DOUBLE,
            allowNull: false,
            defaultValue: false
        },
        recorrido: {
            type: DataType.STRING,
            allowNull: false,
            defaultValue: false
        },
        tipo_de_ejercicio: {
            type: DataType.STRING,
            allowNull: false,
            defaultValue: false
        },
        peso: {
            type: DataType.DOUBLE,
            allowNull: false,
            defaultValue: false
        }
    },
    {
        timestamps: false
    });

    return Carreras;
};