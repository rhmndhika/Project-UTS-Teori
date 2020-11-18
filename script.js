var num = 0;
var modal;

function menambah(){
    let tabel = document.getElementById("users").querySelector("tbody");
    let nim = document.getElementById("nim").value;
    let nama = document.getElementById("nama").value;
    let alamat = document.getElementById("alamat").value;
    
    if(nim == '' && nim != 'number' && nama == '' && alamat == ''){
        warningdata();
    }else{
        menambahdata();
        
    let colnim = '<td id="nim'+num+'">'+nim+'</td>';
    let colnama = '<td id="nama'+num+'">'+nama+'</td>';
    let colalamat = '<td id="alamat'+num+'">'+alamat+'</td>';
    let btn1 = '<button type="button" class="btnedit" id="edit'+num+'" onclick = "edit(this.id)"> Edit </button>';
    let btn2 = '<button type="button" class="btndel" id="hilang'+num+'" onclick = "hilang(this.id)"> Delete </button>';
    let btn = '<td>' + btn1 + btn2 + '</td>';

    let newRow = '<tr id="'+num+'">' + colnim + colnama + colalamat + btn + '</tr>';
    
    tabel.innerHTML += newRow;

    num = num + 1;

    document.getElementById("form").reset(); 
    }
}
   

function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();

    m = checkTime(m);
    s = checkTime(s);

    document.getElementById('jam').innerHTML = h+":"+m+":"+s;
    var t = setTimeout(function(){startTime()},500);
}

function checkTime(i) {
    if (i<10) {i = "0" + i};  
    return i;
}

function edit(id_edit){

    var y = id_edit.substring(4);
    editdata();
    document.getElementById("nimedit").value = document.getElementById("nim"+y).innerHTML;
    document.getElementById("namaedit").value = document.getElementById("nama"+y).innerHTML;
    document.getElementById("alamatedit").value = document.getElementById("alamat"+y).innerHTML;
    document.getElementById("save").onclick = 
    
    function simpan(){
        var newnama = document.getElementById("namaedit").value;
        var newalamat = document.getElementById("alamatedit").value;
        document.getElementById("nama"+y).value = newnama;
        document.getElementById("nama"+y).innerHTML = newnama;
        document.getElementById("alamat"+y).value = newalamat;
        document.getElementById("alamat"+y).innerHTML = newalamat;
        tampil();    
    }
}

function hilang(id_hilang){
    var x = id_hilang.substring(6);
    document.getElementById(x).outerHTML = '';
    modal_deleted.style.display = "block";
}

