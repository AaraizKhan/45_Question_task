function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    let album = { artist: artist, title: title };
    if (tracks !== undefined) {
        }
    return album;
}

// Creating dictionaries representing different albums
let album1 = make_album('Artist1', 'Album1');
let album2 = make_album('Artist2', 'Album2', 12);
let album3 = make_album('Artist3', 'Album3', 8);

// Printing each album information
console.log(album1);
console.log(album2);
console.log(album3);
