const toggleBtn = document.getElementsByClassName('toggle-button')[0];
const navLinks = document.getElementsByClassName('nav-links')[0];

toggleBtn.addEventListener('click', () =>{
    navLinks.classList.toggle('left_Button');
})

const frnt_pg_class = document.querySelectorAll('.front-page');
const btm_pg_class = document.querySelectorAll('.bottom-article');

currentIndex = 0;
currentIndex_bottom = 0;

function right_Button(){
    let nextIndex = currentIndex + 1 <= frnt_pg_class.length - 1 ? currentIndex + 1: 0;

    const currentGroup = document.querySelector(`[data-index="${currentIndex}"]`);
    const nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

    currentGroup.dataset.status = 'unknown';
    nextGroup.dataset.status = 'current';

    currentIndex = nextIndex;
    
    let nextIndex_bottom = currentIndex_bottom + 1 <= btm_pg_class.length - 1 ? currentIndex_bottom + 1: 0;

    const currentGroup_bottom = document.querySelector(`[data-bottom_index="${currentIndex_bottom}"]`);
    const nextGroup_bottom = document.querySelector(`[data-bottom_index="${nextIndex_bottom}"]`);

    currentGroup_bottom.dataset.bottom_status = 'unknown';
    nextGroup_bottom.dataset.bottom_status = 'current';

    currentIndex_bottom = nextIndex_bottom;
}

function left_Button(){
    let nextIndex = currentIndex + 1 >= frnt_pg_class.length - 1 ? currentIndex - 1: frnt_pg_class.length - 1;

    const currentGroup = document.querySelector(`[data-index="${currentIndex}"]`);
    const nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

    currentGroup.dataset.status = 'unknown';
    nextGroup.dataset.status = 'current';

    currentIndex = nextIndex;
    
    nextIndex_bottom = currentIndex_bottom + 1 >= btm_pg_class.length - 1 ? currentIndex_bottom - 1: btm_pg_class.length - 1;

    const currentGroup_bottom = document.querySelector(`[data-bottom_index="${currentIndex_bottom}"]`);
    const nextGroup_bottom = document.querySelector(`[data-bottom_index="${nextIndex_bottom}"]`);

    currentGroup_bottom.dataset.bottom_status = 'unknown';
    nextGroup_bottom.dataset.bottom_status = 'current';

    currentIndex_bottom = nextIndex_bottom;
}
    
const desc = document.querySelector('.all-description-section');
const main_Contnt = document.querySelector('.all-main-content');
const grid_item = document.querySelectorAll('.grid-item');

const grid_philo = document.querySelectorAll('.grid-philo');
const grid_ce = document.querySelectorAll('.grid-ce');
const grid_cs = document.querySelectorAll('.grid-cs');

const description = document.querySelectorAll('.description');
const desc_philo = document.querySelectorAll('.description-philo');
const desc_cs = document.querySelectorAll('.description-cs');
const desc_ce = document.querySelectorAll('.description-ce');

// the description's home button icon functionality
const home_icon_bttn = document.getElementById('home_icon_bttn');
home_icon_bttn.addEventListener('click', e => {
    main_Contnt.classList.replace('display-none', 'display-block');
    desc.classList.replace('display-block', 'display-none');
    description.forEach(desc => {
        if(desc.classList.contains('display-block') || desc.classList.contains('display-none')){
            desc.classList.remove('display-block');
            desc.classList.remove('display-none');
        }
    })
})

function clickInfo(elmntName, descName, clssName, clssNum){
    if(elmntName.classList.contains(clssName)){
        main_Contnt.classList.add('display-none');
        desc.classList.add('display-block')
        if(desc.classList.contains('display-none')){
            desc.classList.replace('display-none', 'display-block');
        }
        
        description.forEach(e =>{
            e.classList.add('display-none');
        })
        descName[clssNum].classList.replace('display-none', 'display-block');
    }
}

grid_philo.forEach(el =>{
    el.addEventListener('click', e =>{
        clickInfo(el, desc_philo, 'grid-philo-1', 0);
        clickInfo(el, desc_philo, 'grid-philo-2', 1);
        clickInfo(el, desc_philo, 'grid-philo-3', 2);
        clickInfo(el, desc_philo, 'grid-philo-4', 3);
    });
})
grid_ce.forEach(el =>{
    el.addEventListener('click', e =>{
        clickInfo(el, desc_ce, 'grid-ce-1', 0);
        clickInfo(el, desc_ce, 'grid-ce-2', 1);
        clickInfo(el, desc_ce, 'grid-ce-3', 2);
    });
})
grid_cs.forEach(el =>{
    el.addEventListener('click', e =>{
        clickInfo(el, desc_cs, 'grid-cs-1', 0);
        clickInfo(el, desc_cs, 'grid-cs-2', 1);
        clickInfo(el, desc_cs, 'grid-cs-3', 2);
        clickInfo(el, desc_cs, 'grid-cs-4', 3);
    });
})

 

