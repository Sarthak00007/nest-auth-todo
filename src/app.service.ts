import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongodb';

import clientPromise from './db/Connection';

@Injectable()
export class AppService {
  async getHello(req, res) {
    const client = await clientPromise;
    const db = client.db('test-todo');
    const collection = db.collection('allNewPosts ');
    switch (req.method) {
      case 'POST':
        const bodyObject = req.body;
        const myPost = await collection.insertOne(bodyObject);
        const myPostId = new ObjectId(myPost.insertedId);
        const newData = await collection.findOne({ _id: myPostId });
        res.json(newData);
        break;
      case 'GET':
        const allPosts = await collection.find({}).toArray();
        res.json({ status: 200, data: allPosts });
        break;
    }
  }
}
