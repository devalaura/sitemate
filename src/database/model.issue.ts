import { ObjectId } from 'mongodb';

class Issue {
    _id: ObjectId;
    name: string;
    details: string;

    constructor(name: string, details: string, id: ObjectId = new ObjectId()) {
        this._id = id;
        this.name = name;
        this.details = details;
    }

}

export default Issue;
