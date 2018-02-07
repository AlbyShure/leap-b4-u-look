alert("If you are on a smartphone or tablet, you may experience glitched out spots or a non-animated background because this website is not optimized for mobile use. You will also have to press the song buttons twice before listening. Thank You."
)


$('#play').on('click', function() {
  $('audio')[0].play();
});

$('#plan').on('click', function() {
  $('#audio-file').attr('src',
'Sleep Away.mp3');
});

$('#pause').on('click', function() {
  $('audio')[0].pause();
});

$('#kalimba').on('click', function() {
  $('#audio-file').attr('src',
'Kalimba.mp3')
});

$('#play-1').on('click', function() {
  $('#audio-file').attr('src',
'Song.wav')
});

$('#play-2').on('click', function() {
  $('#audio-file').attr('src',
'Song.mp3')
});

$('#play-3').on('click', function() {
  $('#audio-file').attr('src',
'Primo.mp3');
});

$('#play-4').on('click', function () {
  $('#audio-file').attr('src',
'Arazu.mp3');
});


$('#play-5').on('click', function () {
  $('#audio-file').attr('src',
'Kintsugi.mp3');
});

$('#play-6').on('click', function () {
  $('#audio-file').attr('src',
'Lilypads.mp3');
});

$('#play-7').on('click', function () {
  $('#audio-file').attr('src',
'zZz.mp3');
});

$('#play-8').on('click', function () {
  $('#audio-file').attr('src',
'Sovereign.mp3');
});

$('#play-f').on('click', function () {
  $('#audio-file').attr('src',
'Fly.mp3');
});

$('#play-h').on('click', function () {
  $('#audio-file').attr('src',
'Hiding.wav');
});

$('#play-s').on('click', function () {
  $('#audio-file').attr('src',
'Still Looking.mp3');
});

$('#play-9').on('click', function () {
  $('#audio-file').attr('src',
'Memories.mp3');
});

$('#play-w').on('click', function () {
  $('#audio-file').attr('src',
'We Rise.wav');
});

$('#play-10').on('click', function () {
  $('#audio-file').attr('src',
'Endeavors.mp3');
});

$('#play-11').on('click', function () {
  $('#audio-file').attr('src',
'Your Soul.mp3');
});

$('#play-12').on('click', function () {
  $('#audio-file').attr('src',
'Falling.wav');
});
