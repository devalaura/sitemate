import { ObjectId } from 'mongodb';
import Issue from '../database/model.issue';

export interface IRepository {
    createNewIssue(issue: Issue): Promise<void>;
    getAllIssues(): Promise<Array<Issue> | undefined>;
    getIssueById(id: ObjectId): Promise<Issue | undefined>;
    updateIssueById(issue: Issue): Promise<void>;
    deleteIssueById(id: ObjectId): Promise<void>; 
}
