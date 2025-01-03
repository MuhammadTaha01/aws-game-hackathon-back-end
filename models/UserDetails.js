import { Model, DataTypes } from "sequelize";
import sequelize from '../config/connection.js';

class UserDetails extends Model {}

UserDetails.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        score: {
            type: DataTypes.INTEGER,
            allowNull: false, // UserDetails adds record only after user plays the game and receives a score
        },
    },{
        sequelize,
        timestamps: false,
    }
);

export default UserDetails;