import express, { Request, Response } from 'express';
import cors from 'cors';
require('dotenv').config();

import ServiceIssues from './src/service/service';
import RepositoryIssues from './src/repository/repository';
import MongoDBConnection from './src/database/connection';

async function App(): Promise<void> {
    const app = express();
    app.use(express.json());

    app.use(cors());
    
    const MONGO_URI = "mongodb+srv://public:sitemate-2024@issues-challenge.afrpwdo.mongodb.net/?retryWrites=true&w=majority&appName=issues-challenge";
    const MONGO_DB_NAME = "sitemate";
    const MONGO_DB_COLLECTION = "issues";

    const collection = await new MongoDBConnection(MONGO_URI).connect(MONGO_DB_NAME, MONGO_DB_COLLECTION);
    const repository = new RepositoryIssues(collection);
    const service = new ServiceIssues(repository);
    
    app.post('/', async (req: Request, res: Response): Promise<any> => {
        const { name, details } = req.body;
        const id = await service.createNewIssue(name, details);
    
        return res.status(201).json({ id });
    });
    
    app.get('/', async (_: Request, res: Response): Promise<any> => {
        const issues = await service.getAllIssues();
    
        if (!issues) return res.status(204).json({ error: "No records to show in the moment." });
    
        return res.status(200).json(issues);
    });
    
    app.get('/:id', async (req: Request, res: Response): Promise<any> => {
        const { id } = req.params;
        const issue = await service.getIssueById(id);
    
        if (!issue) return res.status(204).json({ error: "No records to show in the moment." });
    
        return res.status(200).json(issue);
    });
    
    app.put('/:id', async (req: Request, res: Response): Promise<any> => {
        const { id } = req.params;
        const { name, details } = req.body;
        await service.updateIssueById(id, name, details);
    
        return res.status(204).json();
    });
    
    app.delete('/:id', async (req: Request, res: Response): Promise<any> => {
        const { id } = req.params;
    
        await service.deleteIssueById(id);
    
        return res.status(204).json();
    });

    const PORT = process.env.PORT || 80;
    app.listen(PORT, () => {
        console.log(`App is runing on port ${PORT}.`);
    })
}App();
