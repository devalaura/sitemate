import { ObjectId } from "mongodb";
import { IService } from "../interfaces/interface.service";
import Issue from "../database/model.issue";
import { IRepository } from "../interfaces/interface.repository";

class ServiceIssues implements IService {
    repository: IRepository;
    
    constructor(repository: IRepository) {
        this.repository = repository;
    }

    async createNewIssue(name: string, details: string): Promise<ObjectId> {
        const issue = new Issue(name, details);

        await this.repository.createNewIssue(issue);

        return issue._id;
    }

    async getAllIssues(): Promise<Array<Issue> | undefined> {
        return await this.repository.getAllIssues();
    }

    async getIssueById(id: string): Promise<Issue  | undefined> {
        const objectId = new ObjectId(id);

        return await this.repository.getIssueById(objectId);
    }

    async updateIssueById(id: string, name: string, details: string): Promise<void> {
        const objectId = new ObjectId(id);
        const issue = new Issue(name, details, objectId);

        await this.repository.updateIssueById(issue);
    }

    async deleteIssueById(id: string): Promise<void> {
        const objectId = new ObjectId(id);

        await this.repository.deleteIssueById(objectId);
    }

}

export default ServiceIssues;