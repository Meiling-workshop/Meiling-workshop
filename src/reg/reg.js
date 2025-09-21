window.onload = function(){
    var regtel = /^1[3|4|5|7|8][0-9]{9}$/;
    var tel = document.querySelector('#tes');
    tel.onclick = function(){
        if (regtel.test(this.value)){
            console.log('right');
            
        }else{
            console.log('wrong');
            
        }
    }
}