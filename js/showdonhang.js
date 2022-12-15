


const lable = document.getElementById('lable')



document.getElementById('lable').onclick = function(){
   if(lable.style.display === 'block'){
    lable.innerHTML = 'Ẩn thông tin đơn hàng'
        lable.style.display = 'inline'
   }
   else{
    lable.innerHTML = 'Hiện thông tin đơn hàng'
    
    lable.style.display = 'block'
   }
}
   

