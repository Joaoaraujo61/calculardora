const http = require('http');
const fs = require('fs');
const path = require('path'); // Módulo para lidar com caminhos de arquivos

const port = 3000;

const server = http.createServer((req, res) => {
    // Determina o caminho do arquivo solicitado
    let filePath = req.url === '/' ? 'index.html' : req.url.substring(1);
    const extname = path.extname(filePath);

    // Define o tipo de conteúdo com base na extensão do arquivo
    let contentType = 'text/html';
    switch (extname) {
        case '.js':
            contentType = 'application/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
        case '.gif':
            contentType = 'image/gif';
            break;
        default:
            contentType = 'text/html';
    }

    // Lê o arquivo solicitado
    fs.readFile(filePath, (err, data) => {
        if (err) {
            // Se o arquivo não for encontrado, responde com um erro 404
            if (err.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('Arquivo não encontrado');
            } else {
                // Outros erros, responde com um erro 500
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Erro interno no servidor');
            }
        } else {
            // Se o arquivo for lido com sucesso, responde com o conteúdo do arquivo
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
        }
    });
});

// Faz o servidor ouvir na porta definida
server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
