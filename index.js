import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';



import usersRoutes from './routes/users.js';
import LoginRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());                                                                                                         
                         
app.use('/', usersRoutes);
app.use('/', LoginRoutes);
app.use(cors());



app.listen(PORT, () => console.log('Server Running on port: http://localhost${PORT}'));
