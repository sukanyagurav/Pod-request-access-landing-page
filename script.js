const form = document.querySelector('form')
const error = document.querySelector('.error')
const input = document.querySelector('#email')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const email=input.value
    const emailPattern=/^([a-zA-Z0-9\.-]+)@([a-zA-z0-9-]+)(\.[a-z]{2,18})(\.[a-z]{2,8})?$/
    error.classList.remove('success')
    if(email === ''){
        errorMsg('Field is empty!!')
    }
    else if(!email.match(emailPattern)){
        errorMsg('Emaill address is invalid')
    }
    else{
        error.classList.remove('errorShow');
        error.classList.add('success')
        error.innerHTML='We have send an email';
        setTimeout(()=>{
            
            error.innerHTML='';
            input.value='';
            error.classList.remove('succes')
        },2500)
    }
})
function errorMsg(msg){
    error.classList.add('showError')
    error.innerHTML=msg
}