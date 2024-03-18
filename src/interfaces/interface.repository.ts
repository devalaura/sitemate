import { ObjectId, WithId } from 'mongodb';
import Issue from '../database/model.issue';

export interface IRepository {
    createNewIssue(issue: Issue): Promise<void>;
    getAllIssues(): Promise<Array<Issue> | undefined>;
    getIssueById(id: ObjectId): Promise<WithId<Issue> | null | undefined>;
    updateIssueById(id: ObjectId, issue: Issue): Promise<void>;
    deleteIssueById(id: ObjectId): Promise<void>; 
}
