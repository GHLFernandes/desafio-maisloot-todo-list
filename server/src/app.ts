import express, { Express } from 'express';
import mongoose, { ConnectOptions } from 'mongoose';
import cors from 'cors';
import taskRoutes from './routes';

const app: Express = express();

const PORT: string | number = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(taskRoutes);

const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@todo-list.ttjg8n4.mongodb.net/?retryWrites=true&w=majority`;

if (!process.env.MONGO_USER || !process.env.MONGO_PASSWORD || !process.env.MONGO_DB) {
    console.error('MongoDB environment variables not defined');
    process.exit(1);
}

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
  } as ConnectOptions)
    .then(() => {
        app.listen(PORT, () => 
            console.log(`Server running on https://desafio-maisloot-todo-list-server-7gqt5yfx9-ghlfernandes.vercel.app:${PORT}`)
        )
    })
    .catch(error => {
        console.error(error);
    });
