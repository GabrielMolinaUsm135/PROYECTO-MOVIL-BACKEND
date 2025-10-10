import { Column, DataType, Table, Model, PrimaryKey, AllowNull } from "sequelize-typescript";

@Table({tableName: "teclado"})
class Teclado extends Model{
    @Column({type: DataType.STRING(50), primaryKey: true, allowNull: false, field: 'id'})
    declare id: string

    @Column({type: DataType.STRING(35), allowNull: false, field: 'nombre'})
    declare nombre: string

    @Column({type: DataType.STRING(75), allowNull: false, field: 'descripcion'})
    declare descripcion: string

    @Column({type: DataType.INTEGER, allowNull: false, field: 'precio'})
    declare precio: number
}

export default Teclado

//id varchar(4)
//nombre varchar(35)
//descripcion varchar(75)
//precio int(10)