function make_album(artist_name: string, album_title: string, num_tracks=0) {

    var album = {
        artist: artist_name,
        title: album_title,       
    };

    if(num_tracks){
        let album_track={
            artist: artist_name,
            title: album_title,   
            tracks: num_tracks,
        }
        return album_track;
    }
    return album;
}

console.log(make_album('Ustad Saami','Pakistan Is for the Peaceful'));
console.log(make_album('Noori','Peeli Patti Aur Raja Jani Ki Gol Dunya'));
console.log(make_album('Atif Aslam','Meri Kahani',12));
console.log(make_album('Bohemia','Thousand Thoughts'));


