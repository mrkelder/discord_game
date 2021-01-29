import { MongoClient, ObjectID } from 'mongodb';
import { strictEqual } from 'assert';
import { green } from 'colors';

const url = 'mongodb://localhost:27017';

// FIXME: find out what to put insted of "any" type

/* eslint-disable */
interface mongoArgs {
  client: any;
  db: any;
  ObjectID: any;
}
/* eslint-enable */

function main(func: (obj: mongoArgs) => void): void {
  MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
    strictEqual(null, err);
    console.log(green("Connected successfully to server"));

    const db = client.db('civa_game');

    func({ client, db, ObjectID });
  });
}

export default main;
