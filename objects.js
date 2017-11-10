var playlist = { artistName : 'songTitle'};

function  updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle

  return playlist
}

delete playlist.artistName;