import { MongoClient, ObjectID } from 'mongodb';
import { strictEqual } from 'assert';

const url = 'mongodb://localhost:27017';

/* eslint-disable */
interface mongoArgs {
  client: object;
  db: object;
  ObjectID: Function;
}
/* eslint-enable */

function main(func: (obj: mongoArgs) => void): void {
  MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
    strictEqual(null, err);
    const db = client.db('civa_game');
    func({ client, db, ObjectID });
  });
}

export default main;
