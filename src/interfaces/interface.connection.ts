import { Collection } from "mongodb";
import Issue from "../database/model.issue";

export interface IConnection {
    connect(dbName: string, collectionName: string): Promise<Collection<Issue> | undefined>;
}