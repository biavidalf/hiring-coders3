import { createServer } from 'http';
import { parse } from 'querystring';

const server = createServer((req, res) => {
    switch(req.url){
        case '/status': {
            res.writeHead(200, {
                'Content-Type': 'application/json',
            });
            res.write(
                JSON.stringify({
                    status: 'Okay',
                })
            );
            res.end();
            break;
        }
        case '/authenticated': {
            let data = '';
            req.on('data', chunck => data += chunck);

            req.on('end', () => {
                const params = parse(data);
                res.end();
            });
            break;
        }
        default: {
            res.writeHead(404, 'Service not found.');
            res.end();
        }
    }
});

const PORT = process.env.PORT ?  parseInt(process.env.PORT) : 8000;
const HOSTNAME = '127.0.0.1';

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server is listening at http://${HOSTNAME}:${PORT}`);
});