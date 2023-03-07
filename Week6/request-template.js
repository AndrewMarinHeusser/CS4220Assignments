// require in your prefered module/library to make http requests (superagent, axios, etc)

const superagent = require('superagent');

const websites = {
    dummyjson: {
        name: 'Dummy JSON',
        url: 'https://dummyjson.com/products/1'
    },
    spotify: {
        name: 'Spotify',
        url: 'http://www.spotify.com/us/'
    },
    nasa: {
        name: 'NASA',
        url: 'https://www.nasa.gov/error/'
    },
    unknown: {
        name: 'Unknown',
        url: null
    }
};

// // # 2 - Write the requestPromise() function which uses your http request module
const requestPromise = (url, callee) => {
    return new Promise((resolve,reject) => {
        if(!url|| !url.trim()){
            reject({
                url:url,
                statusCode: null,
                callee:callee
            });
        }
        else{
            const start = Date.now();
            superagent.get(url).end((error, response) =>{
                const end = Date.now();
                if(error || !response.ok){
                    reject({
                        url: url,
                        statusCode: response ? response.status : null,
                        callee: callee
                    });
                }
                else{
                    resolve({
                        url: url,
                        duration: end - start,
                        statusCode: response.status,
                        contentType: response.header['content-type'],
                        callee: callee
                    });
                }
            });
        }
    });
};

// // # 3 - Invoke the requestPromise() using then/catch for each websites object above

// // # 4 - Write the requestWrapper() function which interacts with the requestPromise() function

// // # 5 - Invoke the requestWrapper() for each websites object above
