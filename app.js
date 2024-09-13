
const name = document.getElementById('name');
const email = document.getElementById('email');
const age = document.getElementById('age');
const filled1 = document.getElementById('filled1');
const filled2 = document.getElementById('filled2');
const filled5 = document.getElementById('filled5');
const filled4 = document.getElementById('filled4');
const filled6 = document.getElementById('filled6')
const detail = document.getElementById('detail');
const submit = document.getElementById('submit');
const second = document.getElementById('second');
const edit = document.getElementById('edit');
const buy = document.getElementById('buy');
const qrcode = document.getElementById('qrcode');
const date = document.getElementById('date');




let gender = '';
document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();
    const selectedGender = document.querySelector('input[name="gender"]:checked');

    if (selectedGender) {
        gender = selectedGender.value;
    }

});



document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();
    filled1.innerHTML = name.value;
    filled2.innerHTML = email.value;
    filled5.innerHTML = age.value;
    filled4.innerHTML = gender;
    filled6.innerHTML = date.value;
    


})
document.getElementById('submit').addEventListener('click',function(){
    detail.style.display='none'
    second.style.display='block'
})
document.getElementById('submit').addEventListener('click',function(){
    qrcode.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + ticket;

})

edit.addEventListener('click',function(){
    detail.style.display='block'
    second.style.display='none'

})
buy.addEventListener('click',function(){
    alert('Sorry! We are working on payment Gateway')
})

let ticket = parseInt(Math.random()*1000000);








const tomorrow = new Date(date);
tomorrow.setDate(today.getDate() + 1);
const kal = tomorrow.toISOString().split('T')[0];


const validity = document.getElementById('validity');
validity.innerHTML=kal;





