import express, { Express } from 'express';
import mongoose, { ConnectOptions } from 'mongoose';
import cors from 'cors';
import taskRoutes from './routes';

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(taskRoutes);

const uri: string = `mongodb+srv://gfernandes:7QYCowspdQwrv1WF@todo-list.ttjg8n4.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
  } as ConnectOptions)
    .then(() => {
        app.listen(() => 
            console.log(`Server running on https://desafio-maisloot-todo-list-server-7gqt5yfx9-ghlfernandes.vercel.app`)
        )
    })
    .catch(error => {
        console.error(error);
    });
