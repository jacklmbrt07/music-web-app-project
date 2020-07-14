

/*----- constants -----*/
const artistURL = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=radiohead`;

/*----- app's state (variables) -----*/
let userArtist;
/*----- cached element references -----*/
const $artistName = $('#artist-name');
const $artistPortrait = $('#artist-portrait img');
const $artistBio = $('#artist-bio');
const $artistOrigin = $('#origin');
const $artistBirth = $('#year-formed');
const $artistDeath = $('#year-disbanded');
const $artistGenre = $('#genre');
const $input = $('input[type="text"]')

/*----- event listeners -----*/
// $('form').on('submit', handleGetData);
handleGetData();
/*----- functions -----*/
//initialize modal

// retrieve ajax from server
function handleGetData(event) {
    // event.preventDefault()
    userArtist = $input.val();
    $.ajax({
        url: "https://www.theaudiodb.com/api/v1/json/1/search.php?s=radiohead" //+ userArtist
    }).then(
        (data) => {
            artistData = data.artists[0];
            render();
        },
        (error) => {
            console.log('error is ' + error);
        }
    )
}

function render(){
    $artistName.html(artistData.strArtist);
    $artistPortrait.attr('src', artistData.strArtistThumb);
    $artistBio.html(artistData.strBiographyEN);
    $artistOrigin.html(artistData.strCountry);
    $artistBirth.html(artistData.intFormedYear);
    $artistDeath.html(artistData.strDisbanded === null ? "Present" : artistData.strDisbanded);
    $artistGenre.html(artistData.strGenre)
}
    
// APIKEY should be set to 1
    // Return Artist details from artist name
    // theaudiodb.com/api/v1/json/{APIKEY}/search.php?s={Artist name}
    // Example - theaudiodb.com/api/v1/json/1/search.php?s=coldplay
    
    // Return all Album details from artist name
    // theaudiodb.com/api/v1/json/{APIKEY}/searchalbum.php?s={Artist name}
    
    // Return single album details from artist + album name
    // theaudiodb.com/api/v1/json/{APIKEY}/searchalbum.php?s={Artist name}&a={Album name}
    
    // Return single album details from album name
    // theaudiodb.com/api/v1/json/{APIKEY}/searchalbum.php?a={Album name}
    
    // Return track details from artist/track name
    // theaudiodb.com/api/v1/json/{APIKEY}/searchtrack.php?s={Artist_Name}&t={Single_Name}
    
    // Return Discography for an Artist with Album names and year only
    // theaudiodb.com/api/v1/json/{APIKEY}/discography.php?s={Artist_Name}
    
    // Return Discography for an Artist with Album names and year only using known MBID
    // theaudiodb.com/api/v1/json/{APIKEY}/discography-mb.php?s={Music_Brainz_Artist_ID}
    
    
    //  Artist Data
    // Return individul Artist details using known TADB_Artist_ID
    // theaudiodb.com/api/v1/json/{APIKEY}/artist.php?i={artistid}
    
    // Return individual Artist info using a known MusicBrainz_Artist_ID
    // theaudiodb.com/api/v1/json/{APIKEY}/artist-mb.php?i={mb_artist_id}
    
    
    //  Album Data
    // Return All Albums for an Artist using known TADB_Artist_ID
    // theaudiodb.com/api/v1/json/{APIKEY}/album.php?i={artistid}
    
    // Return individual Album info using known TADB_Album_ID
    // theaudiodb.com/api/v1/json/{APIKEY}/album.php?m={albumid}
    
    // Return individual Album info using a known MusicBrainz_Release-Group_ID
    // theaudiodb.com/api/v1/json/{APIKEY}/album-mb.php?i={mb_release-group_id}
    
    
    //  Track Data
    // Return All Tracks for Album from known TADB_Album_ID
    // theaudiodb.com/api/v1/json/{APIKEY}/track.php?m={albumid}
    
    // Return individual track info using a known TADB_Track_ID
    // theaudiodb.com/api/v1/json/{APIKEY}/track.php?h={trackid}
    
    // Return individual track info using a known MusicBrainz_Recording_ID
    // theaudiodb.com/api/v1/json/{APIKEY}/track-mb.php?i={mb_recording_id}
    
    
    //  Music Videos
    // Return all the Music videos for a known TADB_Artist_ID
    // theaudiodb.com/api/v1/json/{APIKEY}/mvid.php?i=(artistid}
    
    // Return all the Music videos for a known Music_Brainz_ID
    // theaudiodb.com/api/v1/json/{APIKEY}/mvid-mb.php?i=(MbArtistID}
    
    // Return a Music DVD from artist/mdvd name
    // theaudiodb.com/api/v1/json/{APIKEY}/searchmdvd.php?s={Artist_Name}&a={Music_Dvd_Name}
    
    