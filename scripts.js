var isPlaying = false;
var sound_files =[];

var vSurah ="";
var vAyaFrm ="";
var vAyaTo ="";
var vSurPad="";//vSurah.padStart(3,'0');
var vAyaFrmPad="";//vAyaFrm.padStart(3,'0');
var vAyaToPad="";//vAyaTo.padStart(3,'0');
var gCurAyaPad="";



function startPlaying() {

  vSurah =document.getElementById("surah").value;
  vAyaFrm =document.getElementById("ayaFrm").value;
  vAyaTo =document.getElementById("ayaTo").value;
  vSurPad=vSurah.padStart(3,'0');
  vAyaFrmPad=vAyaFrm.padStart(3,'0');
  vAyaToPad=vAyaTo.padStart(3,'0');



/*,
  [new Howl({
      src: ['http://download.quranicaudio.com/verses/Sudais/mp3/001001.mp3'],
      loop: false
    })
    new Howl({
      src: ['http://download.quranicaudio.com/verses/Sudais/mp3/001002.mp3'],
      loop: false
    }),
    new Howl({
      src: ['http://download.quranicaudio.com/verses/Sudais/mp3/001003.mp3'],
      loop: false
    }),
    new Howl({
      src: ['http://download.quranicaudio.com/verses/Sudais/mp3/001004.mp3'],
      loop: false
    }),
    new Howl({
      src: ['http://download.quranicaudio.com/verses/Sudais/mp3/001005.mp3'],
      loop: false
    })
  ];*/

for (var i = vAyaFrm; i <=vAyaTo; i++) {

  gCurAyaPad=(i+"").padStart(3,'0');



  sound_files.push(new Howl({
    src: ['http://download.quranicaudio.com/verses/Alafasy/mp3/'+vSurPad+gCurAyaPad+'.mp3'],
    loop: false
  }));


}


  for (var i = 0; i < sound_files.length - 1; ++i) {
    sound_files[i].on('end',
      (function(i) {
        return function() {
          sound_files[i + 1].play();
        }
      }(i))
    );
  }

  sound_files[i].on('end', function() {
    isPlaying = false;
    sound_files[0].play();
  })

   playStart();




  function playTrack(index) {
    alert(playTrack);
    console.log("playing " + index);
    sound_files[index].play();
    sound_files[index].once('end', function() {
      if (index < sound_files.length - 1)
        playTrack(index + 1);
      else
        isPlaying = false;
    });
  }
  //});
}
function playStart() {
  setTimeout(playAfterFewSec, 3000);
}
function playAfterFewSec() {
  if (!isPlaying) {
    isPlaying = true;
    sound_files[0].play();
  }
}

/* chkVals BEG
–––––––––––––––––––––––––––––––––––––––––––––––––– */
function chkVals() {
  const btns = document.querySelectorAll("button");
  var hasFilled=false;
  vSurah = document.getElementById("surah").value;//document.forms["signup-form"]["surah"].value;
  vAyaFrm = document.getElementById("ayaFrm").value;//document.forms["signup-form"]["ayaFrm"].value;
  vAyaTo = document.getElementById("ayaTo").value;

  if (vSurah == "") {
    hasFilled = false ;
  }else {
    hasFilled = true ;
  }
    hasFilled ? (document.getElementById("playBtn").disabled = false) : (document.getElementById("playBtn").disabled = true);

    //if (vAyaTo=="" && vAyaFrm!="") {
      //alert("if3");
      if (vAyaTo == "") {
      document.getElementById("ayaTo").value=vAyaFrm;
    }
    //}
}

// stop for sometime if needed
