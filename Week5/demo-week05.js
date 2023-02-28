// // -- Promises vs Callbacks and "Callback Hell" ---------------------------------------
// // -- Below Psuedo Code - will not actually execute ---------------------------------------

// const downloadImage = () => {};
// const processImage = () => {};
// const saveImage = () => {};
// const uploadImage = () => {};

// const url = '';
// downloadImage(url, (error, image) => {
//     if (!error) {
//         // things to do for image download
//         processImage(image, (error, processed) => {
//             if (!error) {
//                 // things to do for image proccessing
//                 saveImage(processed, (error, saved) => {
//                     if (!error) {
//                         uploadImage(saved, (error, uploaded) => {
//                             if (!error) {
//                                 console.log('finally done');
//                             } else {
//                                 console.log(error);
//                             }
//                         });
//                     } else {
//                         console.log(error);
//                     }
//                 });
//             } else {
//                 console.log(error);
//             }
//         });
//     } else {
//         console.log(error);
//     }
// });

// downloadImage(url)
//     .then((image) => processImage(image))
//     .then((processed) => saveImage(processed))
//     .then((saved) => uploadImage(saved))
//     .then((uploaded) => {
//         console.log('finally done');
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// // -- Setup ---------------------------------------------------------------------------
const catalog = {
    elden_ring: {
        name: 'Elden Ring',
        size: '50 GB',
        download_time: 500,
        settings: {
            performance_mode: true,
            resolution: '3840 x 2160',
            field_of_view: 90
        }
    },
    bioshock: {
        name: 'Bioshock',
        size: '25 GB',
        download_time: 250,
        settings: {
            performance_mode: false,
            resolution: '1440 x 1080',
            field_of_view: 90
        }
    },
    destiny: {
        name: 'Destiny 2',
        size: '105 GB',
        download_time: 1050,
        settings: {
            performance_mode: true,
            resolution: '3840 x 2160',
            field_of_view: 110
        }
    },
    legend_of_zelda: {
        name: 'The Legend of Zelda: Breath of the Wild',
        size: '14 GB',
        download_time: 140,
        settings: {
            performance_mode: false,
            resolution: '1280 x 720',
            field_of_view: 48
        }
    }
};

// // -- Callbacks -------------------------------------------------------------------------------

// write function to mimic download time - accepts a game object and a callback function
const mimicDownloadCB = (game, callback) => {
    const downloadTime = game ? game.download_time : 0;

    setTimeout(() => {
        if (!game) {
            callback({ error: 'Game is not available' });
        } else {
            callback(null, {
                ready: true,
                name: game.name,
                settings: game.settings
            });
        }
    }, downloadTime);
};

// write function to select game - accepts a catalog object and selection as a string
const playGameCB = (games, selection) => {
    mimicDownloadCB(games[selection], (error, success) => {
        if (!error) {
            console.log(success);
        } else {
            console.error(error);
        }
    });
};

playGameCB(catalog, 'elden_ring');
playGameCB(catalog, 'bioshock');
playGameCB(catalog, 'overwatch');

// // -- Promises --------------------------------------------------------------------------------

// write function to mimic download time - accepts a game object
const mimicDownloadPromise = (game) => {
    const downloadTime = game ? game.download_time : 0;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!game) {
                reject({ error: 'Game is not available' });
            } else {
                resolve({
                    ready: true,
                    name: game.name,
                    settings: game.settings
                });
            }
        }, downloadTime);
    });
};

// write function to select game - accepts a catalog object and selection as a string
const playGamePromise = (games, selection) => {
    return new Promise((resolve, reject) => {
        resolve(games[selection]);
    });
};

// use Promises functions
playGamePromise(catalog, 'elden_ring')
    .then((game) => {
        return mimicDownloadPromise(game);
    })
    .then((downloaded) => {
        console.log(downloaded);
    })
    .catch((error) => {
        console.error(error);
    });

playGamePromise(catalog, 'bioshock')
    .then((game) => {
        return mimicDownloadPromise(game);
    })
    .then((downloaded) => {
        console.log(downloaded);
    })
    .catch((error) => {
        console.error(error);
    });

playGamePromise(catalog, 'overwatch')
    .then((game) => {
        return mimicDownloadPromise(game);
    })
    .then((downloaded) => {
        console.log(downloaded);
    })
    .catch((error) => {
        console.error(error);
    });

// // -- Async/Await with Promises ----------------------------------------------------------------

// write function to select game - accepts a catalog object and selection as a string
const selectGame = async (games, selection) => {
    try {
        const selected = await playGamePromise(games, selection);
        const downloaded = await mimicDownloadPromise(selected);

        console.log(downloaded);
    } catch (error) {
        console.error(error);
    }
};
selectGame(catalog, 'elden_ring');
selectGame(catalog, 'bioshock');
selectGame(catalog, 'overwatch');
