import mongoose from 'mongoose';

const connectarBD = async ()=>{
    try {
        const conection = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        const url =`%{conection.connection.host}:${conection.connection.port}`;
        console.log(`Conectado a la base de datos en ${url}`);
    } catch (error) {
        console.log(`error: ${error.message}`);
        process.exit(1);
    }
}

export default connectarBD;