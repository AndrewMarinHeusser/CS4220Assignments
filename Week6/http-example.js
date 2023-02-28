const https = require('https');

const url = 'https://api.cdnjs.com/libraries?limit=10';

https
    .get(url, (res) => {
        const contentType = res.headers['content-type'];
        let body = '';

        res.on('data', (result) => {
            body += result;
        });

        res.on('end', () => {
            if (contentType.includes('application/json')) {
                try {
                    console.log(JSON.parse(body));
                } catch (err) {
                    console.log(err);
                }
            }
        });
    })
    .on('error', (err) => {
        console.log(err);
    });
