import Application from './app';
import dotenv from 'dotenv';

dotenv.config();

const application = new Application();
const port = process.env.PORT ? Number(process.env.PORT) : 8080;
console.log(port, process.env.PORT);

application.init();
application.start(port);