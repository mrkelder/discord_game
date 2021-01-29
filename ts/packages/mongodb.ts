import { MongoClient, ObjectID } from 'mongodb';
import { strictEqual } from 'assert';
import { green } from 'colors';

// npm run build && npm run start

// const client = new MongoClient('mongodb://localhost:27017', { useUnifiedTopology: true });
const url: string = 'mongodb://localhost:27017';

function main(func: Function) {
  MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
    strictEqual(null, err);
    console.log(green("Connected successfully to server"));

    const db = client.db('civa_game');

    func({ client, db, ObjectID });
  });
}

export default main;
