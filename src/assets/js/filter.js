const filterItem = document.querySelectorAll('.allcourses-cards-item');
let filterBtn = document.querySelector('.allcourses-tabs_nav_content');

filterBtn.addEventListener('click', event =>{
    if (event.target.tagName !== "LI") return false;
    
    let filterClass = event.target.dataset['f'];
    
    filterItem.forEach( elem => {
        elem.classList.remove('filter-hide')
        if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
            elem.classList.add('filter-hide')
        };
    });
});
