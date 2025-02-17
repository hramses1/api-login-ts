import mongoose from "mongoose";


interface Options {
    mongoUrl: string;
    dbName: string;

}




export class MongoDataBase {

    static async connect(options: Options): Promise<void> {

         const { mongoUrl, dbName } = options;


        // TODO: Connect to the database
        try {
            mongoose.connect(mongoUrl, {
                dbName: dbName,
            });
            console.log('Connected to the database');
        
        
        
        } catch (error) {
            console.log('Error connecting to the database');
            throw new Error('Error connecting to the database');
        }
    }



}