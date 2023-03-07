// require in your prefered module/library to make http requests (superagent, axios, etc)

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
function requestPromise(url,callee){
    
}

// // # 3 - Invoke the requestPromise() using then/catch for each websites object above

// // # 4 - Write the requestWrapper() function which interacts with the requestPromise() function

// // # 5 - Invoke the requestWrapper() for each websites object above
