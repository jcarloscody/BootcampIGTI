import Sequelize from 'sequelize'



const sequelize = new Sequelize(
    "postgres://lakjazml:s5-0TMuxA8MXv3qHFQF5fZ2XT2AVCtEC@fanny.db.elephantsql.com/lakjazml",
    {
        dialect: "postgres",
        define: {
            timestamps: false
        }
    }
)

export default sequelize
