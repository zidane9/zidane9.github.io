var total = [0, 0, 0, 0];
var allResponder = 0;

var noUrut1 = {
  nama: "Dono",
  umur: 35,
  pendidikan: "SMA",
  program: "membuat banyak kegiatan-kegiatan bersama, seperti acara agustusan."
}

var noUrut2 = {
  nama: "Donald",
  umur: 39,
  pendidikan: "SMP",
  program: "membuat RT kita bersih hijau berbunga."
}

var noUrut3 = {
  nama: "Bamba",
  umur: 31,
  pendidikan: "D3",
  program: "membuat RT kita menjadi RT yang memiliki teknologi hotspot."
}

var calonRT = [noUrut1, noUrut2, noUrut3];

function terimaKasih(calon) {
  console.log("Terima kasih telah memilih "+calon.nama+", "+calon.umur+
              " tahun, pendidikan "+calon.pendidikan+" sebagai calon ketua RT, \n"+
               "Saya akan "+calon.program);
}

function voteRT(calon) {
  if(calon == noUrut1) {
    total[0] += 1;
    terimaKasih(calon);
  } else if(calon == noUrut2) {
    total[1] += 1;
    terimaKasih(calon);
  } else if(calon == noUrut3) {
    total[2] += 1;
    terimaKasih(calon);
  } else {
    total[3] += 1;
    console.log("Sayang sekali anda memilih untuk tidak memilih.")
  }
  allResponder++;
}

function printHasil(){
  var persentase = [0, 0, 0, 0];
  for(var i=0;i<calonRT.length;i++){
    persentase[i] = Math.trunc(total[i]/allResponder*100);
    console.log("Calon RT no urut "+(i+1)+" "+calonRT[i].nama+" mendapat "+persentase[i]+" % suara");
  }
  console.log("Responder yg memilih untuk tidak memilih sebanyak "+(100-persentase[0]-persentase[1]-persentase[2])+" %");
}

voteRT(noUrut3);
voteRT(noUrut1);
voteRT(noUrut3);
voteRT(noUrut2);
voteRT(noUrut3);
voteRT(noUrut1);
voteRT(noUrut3);
voteRT(noUrut1);
voteRT(noUrut3);
voteRT(null);
printHasil();
