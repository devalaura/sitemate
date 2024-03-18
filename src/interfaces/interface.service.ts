import { ObjectId } from 'mongodb';
import Issue from '../database/model.issue';

export interface IService {
    createNewIssue(name: string, details: string): Promise<ObjectId>;
    getAllIssues(): Promise<Array<Issue> | undefined>
    getIssueById(id: string): Promise<Issue | undefined>;
    updateIssueById(id: string, name: string, details: string): Promise<void>;
    deleteIssueById(id: string): Promise<void>; 
}
