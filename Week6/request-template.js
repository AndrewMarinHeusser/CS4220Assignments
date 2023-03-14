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

//requestPromise('http://www.spotify.com/us/', 'promise').then((info) => {console.log(info);}).catch((error)=>{console.log(error);})

// // # 3 - Invoke the requestPromise() using then/catch for each websites object above

requestPromise(websites.dummyjson.url, 'promise').then((response) => console.log(response)).catch((error) => console.error(error));
requestPromise(websites.spotify.url, 'promise').then((response) => console.log(response)).catch((error) => console.error(error));
requestPromise(websites.nasa.url, 'promise').then((response) => console.log(response)).catch((error) => console.error(error));
requestPromise(websites.unknown.url, 'promise').then((response) => console.log(response)).catch((error) => console.error(error));

// // # 4 - Write the requestWrapper() function which interacts with the requestPromise() function

 const requestWrapper = async (url, callee) => {
    try {
        const response = await requestPromise(url, callee);
        console.log(response);
    } catch (error) {
        console.error(error);
    }
};

// // # 5 - Invoke the requestWrapper() for each websites object above
requestWrapper(websites.dummyjson.url, 'async/await');
requestWrapper(websites.spotify.url, 'async/await');
requestWrapper(websites.nasa.url, 'async/await');
requestWrapper(websites.unknown.url, 'async/await');

