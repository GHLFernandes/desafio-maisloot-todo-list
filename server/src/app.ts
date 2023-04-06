import express, { Express } from 'express';
import mongoose, { ConnectOptions } from 'mongoose';
import cors from 'cors';
import taskRoutes from './routes';

const app: Express = express();

const corsOptions = {
  origin: 'https://desafio-maisloot-todo-list.vercel.app',
  optionsSuccessStatus: 200 
}

app.use(cors(corsOptions));
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
            console.log(`Server running on https://desafio-maisloot-todo-list-server.vercel.app`)
        )
    })
    .catch(error => {
        console.error(error);
    });
