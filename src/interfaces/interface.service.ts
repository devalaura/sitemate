import { ObjectId, WithId } from 'mongodb';
import Issue from '../database/model.issue';

export interface IService {
    createNewIssue(name: string, details: string): Promise<void>;
    getAllIssues(): Promise<Array<Issue> | undefined>
    getIssueById(id: string): Promise<WithId<Issue> | null | undefined>;
    updateIssueById(id: string, name: string, details: string): Promise<void>;
    deleteIssueById(id: string): Promise<void>; 
}
