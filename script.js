const wrapper=document.querySelector('.wrapper');
const navigator=document.querySelector('.programer');
const bthpoput=document.querySelector('.btnLogin-poput');
const contacts=document.querySelector('.contacts');
bthpoput.addEventListener('click',()=>{wrapper.classList.add('active-poput')});
contacts.addEventListener('click',()=>{navigator.classList.add('Contacts')});

