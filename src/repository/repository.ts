import { Collection, ObjectId } from "mongodb";
import { IRepository } from "../interfaces/interface.repository";
import Issue from "../database/model.issue";

class RepositoryIssues implements IRepository {
    collection: Collection<Issue> | undefined;

    constructor(collection: Collection<Issue> | undefined) {
        this.collection = collection;
    };

    async createNewIssue(issue: Issue): Promise<void> {
        try {
            await this.collection?.insertOne(issue);
        } catch (error: any) {
            console.log("Failed to create new issue register.");
        }
    }

    async getAllIssues(): Promise<Array<Issue> | undefined> {
        try {
            return await this.collection?.find().toArray();
        } catch (error: any) {
            console.log("Failed to get all issues registers.");
            return;
        }
    }

    async getIssueById(id: ObjectId): Promise<Issue | undefined> {
        try {
            const issues = await this.getAllIssues();
            return issues?.find(issue => issue._id = id);
        } catch (error: any) {
            console.log("Failed to get issue register by id.");
            return;
        }
    }
    
    async updateIssueById(issue: Issue): Promise<void> {
        try {
            await this.collection?.findOneAndUpdate(
                { _id: issue._id }, 
                { $set: { name: issue.name, details: issue.details } });
        } catch (error: any) {
            console.log("Failed to update issue register.");
        }
    }

    async deleteIssueById(id: ObjectId): Promise<void> {
        try {
            await this.collection?.findOneAndDelete({ _id: id });
        } catch (error: any) {
            console.log("Failed to delete issue register.");
        }
    }

}

export default RepositoryIssues;
