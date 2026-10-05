const navigation=document.querySelectorAll('nav a[href^="#"]');navigation.forEach(link=>link.addEventListener('click',()=>{navigation.forEach(item=>item.classList.remove('active'));link.classList.add('active')}));

const modal=document.getElementById('schedule-dialog');document.querySelector('.schedule-open').addEventListener('click',()=>modal.showModal());modal.querySelector('.close').addEventListener('click',()=>modal.close());modal.addEventListener('click',e=>{if(e.target===modal)modal.close()});
