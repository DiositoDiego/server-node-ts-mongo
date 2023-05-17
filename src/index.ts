import express, { Application, Request, Response, NextFunction } from 'express';
import ComputerRouter from './modules/computer/adapters/computer.controller';
import connectDB from './utils/dbconfig';
const app: Application = express();
const cors = require('cors');

connectDB();

app.use(express.json());
app.use(cors({
    origin: '*'
}));
app.use((req: Request, res: Response, next: NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Acces-Control-Allow-Credentials", "true");
    res.header("Acces-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Acces-Control-Allow-Headers", "Content-Type, Accept, Authorization, Access-Control-Allow-Request-Method");
    next();
})

app.get('/ping', (req: Request, res: Response) => {
    console.log('pinged');
    res.send('pong');
})
app.use('/computers', ComputerRouter);
app.listen(3001, () => {
    console.log('Server running on port 3001');
})