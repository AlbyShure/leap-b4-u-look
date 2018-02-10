alert("If you are on a smartphone or tablet, you may experience glitched out spots or a non-animated background because this website is not optimized for mobile use. You will also have to press the song buttons twice before listening. Thank You."
)

$('#play').on('click', function() {
  $('audio')[0].play();
});

$('#alone').on('click', function() {
  $('#audio-file').attr('src',
'Alone.mp4');
$('audio')[0].play();
});

$('#plan').on('click', function() {
  $('#audio-file').attr('src',
'Sleep Away.mp3');
$('audio')[0].play();
});

$('#views').on('click', function() {
  $('#audio-file').attr('src',
'Perfect Views.mp4');
$('audio')[0].play();
});


$('#pause').on('click', function() {
  $('audio')[0].pause();
});

$('#kalimba').on('click', function() {
  $('#audio-file').attr('src',
'Kalimba.mp3');
$('audio')[0].play();
});

$('#play-1').on('click', function() {
  $('#audio-file').attr('src',
'Song.wav');
$('audio')[0].play();
});

$('#play-2').on('click', function() {
  $('#audio-file').attr('src',
'Song.mp3');
$('audio')[0].play();
});

$('#play-3').on('click', function() {
  $('#audio-file').attr('src',
'Primo.mp3');
$('audio')[0].play();
});

$('#play-4').on('click', function () {
  $('#audio-file').attr('src',
'Arazu.mp3');
$('audio')[0].play();
});


$('#play-5').on('click', function () {
  $('#audio-file').attr('src',
'Kintsugi.mp3');
$('audio')[0].play();
});

$('#play-6').on('click', function () {
  $('#audio-file').attr('src',
'Lilypads.mp3');
$('audio')[0].play();
});

$('#play-7').on('click', function () {
  $('#audio-file').attr('src',
'zZz.mp3');
$('audio')[0].play();
});

$('#play-f').on('click', function () {
  $('#audio-file').attr('src',
'Fly.mp3');
$('audio')[0].play();
});

$('#play-h').on('click', function () {
  $('#audio-file').attr('src',
'Hiding.wav');
$('audio')[0].play();
});

$('#play-s').on('click', function () {
  $('#audio-file').attr('src',
'Still Looking.mp3');
$('audio')[0].play();
});

$('#play-9').on('click', function () {
  $('#audio-file').attr('src',
'Memories.mp3');
$('audio')[0].play();
});

$('#play-w').on('click', function () {
  $('#audio-file').attr('src',
'We Rise.wav');
$('audio')[0].play();
});

$('#play-10').on('click', function () {
  $('#audio-file').attr('src',
'Endeavors.mp3');
$('audio')[0].play();
});

$('#play-11').on('click', function () {
  $('#audio-file').attr('src',
'Your Soul.mp3');
$('audio')[0].play();
});

$('#play-12').on('click', function () {
  $('#audio-file').attr('src',
'Falling.wav');
$('audio')[0].play();
});
