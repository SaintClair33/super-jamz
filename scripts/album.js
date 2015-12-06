var album_listing = {
 name: "The Colors",
 artist: "Pablo Picasso",
 label: "Cubism",
 year: "1881",
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
    + '  <td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>'
     + ' <td class="song-item-title">' + songName + '</td>'
     + ' <td class="song-item-duration">' + songLength + '</td>'
     + '</tr>'
     ;
    
    return template;
};

    //#Select elements that we want to populate with text dynamically
    var albumTitle = document.getElementsByClassName('album-view-title')[0];
    var albumArtist = document.getElementsByClassName('album-view-artist')[0];
    var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
    var albumImage = document.getElementsByClassName('album-cover-art')[0];
    var albumSongList = document.getElementsByClassName('album-view-song-list')[0];

    // Clear contents of album song list container
var setCurrentAlbum = function(album)
{
    //#2 Takes album passed in through setCurrentAlbum function and sets the 
    albumTitle.firstChild.nodeValue = album.name;
    albumArtist.firstChild.nodeValue = album.artist;
    albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
    albumImage.setAttribute('src', album.albumArtUrl);
    
    //#Clear contents of album song list container
    albumSongList.innerHTML = '';
    
    //#Build list of songs from album Javascript object
    for (i = 0; i < album.songs.length; i++)
    {
        albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].name, album.songs[i].length);
    }
};


var child = document.getElementsByClassName('album-view-title')[0];
var noParent = document.querySelector('html');

var findParentByClassName = function(element, targetClass) {
    var currentParent = element.parentElement;
    
    if (currentParent)
    {
        while (currentParent.className && currentParent.className != targetClass)
        {
            currentParent = currentParent.parentElement;
        }
        
        if (currentParent.className == targetClass)
        {
            return currentParent;
        }
        else
        {
            alert("No parent with that class name found.");
        }
    }
    else
    {
        alert("No parent found.");
    }
    
};

findParentByClassName(child, 'bannana');
var getSongItem = function(element) {
    switch (element.className) 
    {
        case 'album-song-button':
        case 'ion-play':
        case 'ion-pause':
            return findParentByClassName(element, 'song-item-number');
        case 'album-view-song-item':
            return element.querySelector('.song-item-number');
        case 'song-item-title':
        case 'song-item-duration':
            return findParentByClassName(element, 'album-view-song-item').querySelector('.song-item-number');
        case 'song-item-number':
            return element;
        default:
            return;
    }  
};
var clickHandler = function(targetElement) 
{
    
    var songItem = getSongItem(targetElement);
    if (currentlyPlayingSong === null) 
    {
         songItem.innerHTML = pauseButtonTemplate;
         currentlyPlayingSong = songItem.getAttribute('data-song-number');
    } 
    else if (currentlyPlayingSong === songItem.getAttribute('data-song-number')) 
    {
         songItem.innerHTML = playButtonTemplate;
         currentlyPlayingSong = null;
    }
    else if (currentlyPlayingSong !== songItem.getAttribute('data-song-number')) 
    {
         var currentlyPlayingSongElement = document.querySelector('[data-song-number="' + currentlyPlayingSong + '"]');
         currentlyPlayingSongElement.innerHTML = currentlyPlayingSongElement.getAttribute('data-song-number');
         songItem.innerHTML = pauseButtonTemplate;
         currentlyPlayingSong = songItem.getAttribute('data-song-number');
     }
    
};
var songListContainer = document.getElementsByClassName('album-view-song-list')[0];
var songRows = document.getElementsByClassName('album-view-song-item');

//Album button templates
var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
//Add EventListner click
var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';
// Store state of playing songs
var currentlyPlayingSong = null;



window.onload = function()
{
    setCurrentAlbum(album_listing);
    
    songListContainer.addEventListener('mouseover', function(event) {
         // Only target individual song rows during event delegation
         if (event.target.parentElement.className === 'album-view-song-item') 
         {
             //Select the song item number element relative to the table were mousing over and change the inner HTML to the play button:
             var songItem = getSongItem(event.target);

            if (songItem.getAttribute('data-song-number') !== currentlyPlayingSong) 
            {
                songItem.innerHTML = playButtonTemplate;
            }
         }
         
     });
    
    for (i = 0; i < songRows.length; i++)
    {
        songRows[i].addEventListener('mouseleave', function(event) {
            var songItem = getSongItem(event.target);
            var songItemNumber = songItem.getAttribute('data-song-number');
 
            // #2
            if (songItemNumber !== currentlyPlayingSong) 
            {
                 songItem.innerHTML = songItemNumber;
            }
        });
            
        songRows[i].addEventListener('click', function(event) {
             // Event handler call
            clickHandler(event.target);
            
            
        });
    }
    
    var albums = [album_listing, albumLogic, albumMarconi];
    var index = 1;
    albumImage.addEventListener("click", function(event) {
        setCurrentAlbum(albums[index]);
        index++;
        if(index == albums.length)
        {
            index = 0;
        }
    });
};