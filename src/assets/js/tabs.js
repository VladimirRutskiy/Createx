const tabsBtn = document.querySelectorAll('.tabs-btn')
const tabsItems = document.querySelectorAll('.tabs-item')


if (tabsBtn && tabsItems) {
    function onTabClickButton(item){
        item.addEventListener('click', function(){
            let currentBtn = item;
            let tabId = currentBtn.getAttribute('data-tab');
            let currentTab = document.querySelector(tabId);

            if (! currentBtn.classList.contains('btn-active')){
                tabsBtn.forEach(function(item) {
                    item.classList.remove('btn-active')
                });
                tabsItems.forEach(function(item) {
                    item.classList.remove('tab-active')
                });

                currentBtn.classList.add('btn-active');
                currentTab.classList.add('tab-active');
            }
        });
    }

    tabsBtn.forEach(item => onTabClickButton(item));
    document.querySelector('.tabs-btn').click();

}

