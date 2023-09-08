import  express   from "express";
import { port } from "./config/confic.js";
import connectdb from "./config/db.js";
import employeroute from "./routes/employe.js";
import cors from 'cors';
import path  from "path";

const PORT = port || 4000

const app = express();

app.use(express.json())

var whitelist = ['http://localhost:9000', 'http://localhost:5173'];

var corsOptionsDelegate = function (req, callback) {
    var corsOptions;
    if (whitelist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true };  // Reflect (enable) the requested origin in the CORS response
    } else {
        corsOptions = { origin: false };  // Disable CORS for this request
    }
    callback(null, corsOptions);  // Callback expects two parameters: error and options
};

app.use(cors(corsOptionsDelegate));






app.use("/api/v1/test",employeroute);


if (process.env.NODE_ENV === 'production') {

    const __dirname = path.resolve();
    app.use(express.static(path.join(__dirname, '/frontend/dist')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'));
    });
} else {
    app.get('/api', (req, res) => {
        res.send('API is running');
    });
}


app.use((req, res, next) => {
    next(customError(404, `${req.originalUrl} the page that you're looking is not found not found`));
});

app.use((error, req, res, next) => {

    const status = error.status || 500;
    const message = error.message || "Internal Server Error";

    res.status(status).send(message);

});

connectdb()


app.listen(PORT, ()=>{

    console.log(`app listening on port ${port}`);
});