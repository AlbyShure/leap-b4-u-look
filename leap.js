$('#play').on('click', function() {
  $('audio')[0].play();
});

$('#pause').on('click', function() {
  $('audio')[0].pause();
});

$('#play-more').on('click', function() {
  $('#audio-file').attr('src',
'Song.wav')
});

$('#play-back').on('click', function() {
  $('#audio-file').attr('src',
'Song.mp3')
});

$('#play-mott').on('click', function() {
  $('#audio-file').attr('src',
'Primo.mp3');
});
