import mongoose from 'mongoose';
const connection ={};

async function dbConnect(){
   
    const db = await mongoose.connect( process.env.MONGO_URI ,{
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    });
    
    connection.isConnected=db.connections[0].readyState
    if(connection.isConnected){
        return;
    }   
 }


 export default dbConnect;
