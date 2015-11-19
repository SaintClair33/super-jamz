var albumListing = {
 name: 'The Colors',
 artist: 'Pablo Picasso',
 label: 'Cubism',
 year: '1881',
 albumArtUrl: 'assets/images/album_covers/01.png',
 songs: [
     { name: 'Blue', length: '4:26' },
     { name: 'Green', length: '3:14' },
     { name: 'Red', length: '5:01' },
 ]
};

var albumMarconi = {
 name: 'The Telephone',
 artist: 'Guglielmo Marconi',
 label: 'EM',
 year: '1909',
 albumArtUrl: 'assets/images/album_covers/20.png',
 songs: [
     { name: 'Hello, Operator?', length: '1:01' },
     { name: 'Ring, ring, ring', length: '5:01' },
     { name: 'Fits in your pocket', length: '3:21'},
     { name: 'Can you hear me now?', length: '3:14' },
     { name: 'Wrong phone number', length: '2:15'}
]
 };

var albumLogic = {
    name: 'The Incredible Story',
    artist: 'Logic',
    label: 'Columbia',
    year: '2015',
    albumArtURL: 'assets/images/album_covers/hanuman.png',
    songs: [
        { name: 'City of Stars', length: '3:03' },
        { name: 'InnerMission', length: '3:37' },
        { name: 'Young Jesus', length: '3:55' }
]
 };

var createSongRow = function(songNumber, songName, songLength)
{
    var template =
       '<tr class="album-view-song-item">'
     + ' <td class="song-item-number">' + songNumber + '</td>'
     + ' <td class="song-item-title">' + songName + '</td>'
     + ' <td class="song-item-duration">' + songLength + '</td>'
     + '</tr>'
     ;
    
    return template;
};

    //#Assign the album info by grabbing element class name
    var albumTitle = document.getElementsByClassName('album-view-title')[0];
    var albumArtist = document.getElementsByClassName('album-view-artist')[0];
    var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
    var albumImage = document.getElementsByClassName('album-cover-art')[0];
    var albumSongList = document.getElementsByClassName('album-view-song-list')[0];

    //#2 Takes album passed in through setCurrentAlbum function and sets the
var setCurrentAlbum = function(album)
{
    albumTitle.firstChild.nodeValue = album.name;
    albumArtist.firstChild.nodeValue = album.artist;
    albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
    albumImage.setAttribute('src', album.albumArtUrl);
    
    //#3
    albumSongList.innerHTML = '';
    
    //#4
    for (i = 0; i < album.songs.length; i++)
    {
        albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].name, album.songs[i].length);
    }
};

window.onload = function()
{
    setCurrentAlbum(albumListing);
    var albums = [albumListing, albumMarconi, albumLogic];
    var index  = 1;
    albumImage.addEventListener("click", function(event) {
        setCurrentAlbum(albums[index]);
        index++;
        if(index  == albums.length)
        {
            index = 0;
        }
    });
        
                            
        
};