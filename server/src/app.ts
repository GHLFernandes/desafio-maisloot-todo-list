import express, { Express } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import taskRoutes from './routes';

const app: Express = express();

const PORT: string | number = process.env.PORT || 4000;

app.use(cors());
app.use(taskRoutes);

const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@todo-list.ttjg8n4.mongodb.net/?retryWrites=true&w=majority`;
const options = { 
    bufferCommands: false,
    dbName: process.env.MONGO_DB,
    user: process.env.MONGO_USER,
    pass: process.env.MONGO_PASSWORD,
    autoIndex: false,
    autoCreate: true,
};

if (!process.env.MONGO_USER || !process.env.MONGO_PASSWORD || !process.env.MONGO_DB) {
    console.error('MongoDB environment variables not defined');
    process.exit(1);
}

mongoose.connect(uri, options)
    .then(() => {
        app.listen(PORT, () => 
            console.log(`Server running on http://localhost:${PORT}`)
        )
    })
    .catch(error => {
        console.error(error);
    });
