var playlist = {Slowdive: 'Alison', MyBloodyValentine: 'Sometimes'};

function updatePlaylist(playlist, artistName, songTitle){
   Object.assign({}, playlist,  { artistName: songTitle });
   return playlist;
}
