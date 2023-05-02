function checkMaBN(){
    let regex=/^BN-\d{5}$/;
    let mabn=document.getElementById("mabn").value
    let error=document.getElementById("idError")
    if(mabn==""){
        error.innerHTML="Không được để rỗng"
        error.style.color="red"
        return false;
    }
    if(!regex.test(mabn)){
        error.innerHTML="Mã bệnh nhân có dạng BN-YYYYY"
        error.style.color="red"
        return false;
    }
    else{
        error.innerHTML="Hợp lệ"
        error.style.color="black"
        return true;
    }
}

function checkMatKhau(){
    let regex=/.{6,}/g
    let mk=document.getElementById("mk").value
    let error=document.getElementById("idError2")
    if(!regex.test(mk)){
        error.innerHTML="Mật khẩu chứa ít nhất 6 ký tự bất kỳ"
        error.style.color="red"
        return false;
    }
    else{
        error.innerHTML="Hợp lệ"
        error.style.color="black"
        return true;
    }
}

function checkNgayKham(){
    let nk=document.getElementById("nk").value
    let today =new Date()
    let error=document.getElementById("idError3")
    if(nk==""){
        error.innerHTML="Ngày khám không được bỏ trống"
        error.style.color="red"
        return false;
    }
    if(nk < today.getTime() ){
        error.innerHTML="Ngày khám phải sau ngày hiện tại"
        error.style.color="red"
        return false
    }
    else{
        error.innerHTML="Hợp lệ"
        error.style.color="black"
        return true;
    }
}

var bam=document.getElementById("datlich");


bam.onclick=function(){
    checkMaBN();
    checkMatKhau();
    checkNgayKham();

    
    if( checkMaBN()==true && checkMatKhau()==true && checkNgayKham()==true){
        
        var mabn=document.getElementById("mabn").value;
        var mk=document.getElementById("mk").value;
        var nk=document.getElementById("nk").value;
        var sum=tinhtoan();
        var ck=document.getElementById("ck").value;

        

        var table = document.getElementById("tbl")

        var stt = table.rows.length;

        var row = table.insertrow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);

        cell1.innerHTML=stt;
        cell2.innerHTML=mabn;
        cell3.innerHTML=mk;
        cell4.innerHTML=nk;
        cell5.innerHTML=sum;
        cell6.innerHTML=ck;
    }
}
   
function tinhtoan(){
    let sum=0;
    let yc1=document.getElementById("yc1")
    let yc2=document.getElementById("yc2")
    let yc3=document.getElementById("yc3")

    if(yc1.checked==true)
        sum=sum+500000;
    if(yc2.checked==true)
        sum=sum+500000;
    if(yc3.checked==true)
        sum=sum+500000;
    return sum;
}

function xoaTrang(){
    document.getElementById("mabn").value=""
    document.getElementById("mk").value=""
    document.getElementById("nk").value=""
    document.getElementById("yc1").checked=false;
    document.getElementById("yc2").checked=false;
    document.getElementById("yc3").checked=false;
    document.getElementById("ck").value="Ngoại tổng quát"
}