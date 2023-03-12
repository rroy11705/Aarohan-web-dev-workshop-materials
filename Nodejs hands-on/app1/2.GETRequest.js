import * as http from 'http';
http.get('http://example.com', (response) => {
    let data = '';

    // A chunk of data has been received.
    response.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received.
    response.on('end', () => {
        console.log(data);
    });

}).on("error", (error) => {
    console.error(`Error: ${error.message}`);
});