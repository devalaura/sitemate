import { Collection, MongoClient, ServerApiVersion } from 'mongodb';
import { IConnection } from '../interfaces/interface.connection';
import Issue from './model.issue';

class MongoDBConnection implements IConnection {
    client: MongoClient;

    constructor(uri: string) {
        this.client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });
    }

    async connect(dbName: string, collectionName: string): Promise<Collection<Issue> | undefined> {
        try {
            await this.client.connect();

            const db = this.client.db(dbName);

            await db.command({ ping: 1 });

            console.log("Pinged your deployment. You successfully connected to MongoDB!");

            return db.collection<Issue>(collectionName);
        } catch (error: any) {
            console.log("Failed to connect to database!");
            return;
        }
      
    }    
    
}

export default MongoDBConnection;