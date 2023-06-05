module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define("usuario", {
        correo: {
            type: Sequelize.STRING
        },
        contrasenia: {
            type: Sequelize.STRING
        },
        nombre:{
            type: Sequelize.STRING
        },
        estatus: {
            type: Sequelize.BOOLEAN
        },
        fechaRegistro:{
            type: Sequelize.DATEONLY
        },
        fechaVigencia:{
            type: Sequelize.DATEONLY
        },
        rol_id:{
            type: Sequelize.INTEGER
        }
    });

    return Usuario;
};
