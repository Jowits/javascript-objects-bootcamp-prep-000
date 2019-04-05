var playlist = {Slowdive: 'Alison', MyBloodyValentine: 'Sometimes'};

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist,  { artistName: songTitle });
}