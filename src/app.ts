import { createServer } from 'http'
// import { initializeApp, cert } from 'firebase-admin/app'
import admin from 'firebase-admin'
import { QuerySnapshot, DocumentData, DocumentSnapshot, WriteResult } from 'firebase-admin/firestore'

import cors from 'cors'

import Server from './api/server'

const firebaseConfig = require('../nodeApiSecretKey.json')

try {

    admin.initializeApp({
        credential: admin.credential.cert(firebaseConfig),
        databaseURL: 'https://data-base-name.firebaseio.com'
    })

    const firestore = admin.firestore()

    // create new collection and new doc
    firestore.collection('users').doc().create({
        rapahel: 'nome certo RAFAEL'
    }).then((data: WriteResult) => {
        console.log('object create with sucess', data);
        
    })

    // add new data to a collection
    firestore.collection('test-collection').add({ newTest: 'this is one test on firestore' }).then((documentRef) => {
        console.log(`Added document at ${documentRef.path})`);
    });


    // Show all documents data from a collection
    firestore.collection('test-collection').get().then((data: QuerySnapshot) => {
        data.forEach(documentSnp => {
            console.log(documentSnp.data());
        })
    })

    // show the data from a specific document
    firestore
        .collection('fwdd7dLeTrpn0sMjMih9')
        .doc('AVpHSxOHXzbWh694EB55')
        .get()
        .then((data: DocumentSnapshot) => {
            console.log(data.data());
        })

    const app = new Server().app
    app.use(cors({
        origin: ['http://localhost:3000'] // change the port to front-end port
    }))

    // Generic error
    app.use((_req, res) => {
        res.status(404).json('Error - not found')
    })

    const server = createServer(app)

    server.listen(8080, () => {
        console.log(`node server is listening on port 8080 in development mode`);
    })

    server.on('close', () => {
        console.log('node server closed');
    })
} catch (error) {
    console.log(error);
}
