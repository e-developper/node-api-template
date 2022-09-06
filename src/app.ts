import { createServer } from 'http'
import cors from 'cors'

import Server from './api/server'

try {
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
