const iconMenu = document.querySelector('.nav-icon');
if (iconMenu){
    const headerNav = document.querySelector('.header-nav');
    iconMenu.addEventListener('click', function(){
        iconMenu.classList.toggle('active');
        headerNav.classList.toggle('active');
        
    });
}
