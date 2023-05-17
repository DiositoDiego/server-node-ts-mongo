import mongoose, { Document, Schema } from "mongoose";

const url = "mongodb+srv://20213tn096:node@cluster0.0fim22k.mongodb.net/";
const dbName = "proyecto";

const connectDB = async () => {
    try {
      await mongoose.connect(url + dbName);
      console.log('Conexión exitosa a MongoDB');
    } catch (error) {
      console.error('Error al conectar a MongoDB:', error);
    }
  };
export default connectDB;

/////////////////creacion de los schemas para los querys/////////////////////

interface Computer extends Document {
    _id: string;
    numSerie: string;
    modelo: string;
    iduser: string;
}

const ComputerSchema: Schema = new Schema({
    _id: String,
    numSerie: String,
    modelo: String,
    iduser: String,
}, {collection: 'computers'})

export const ComputerModel = mongoose.model<Computer>('computers', ComputerSchema);