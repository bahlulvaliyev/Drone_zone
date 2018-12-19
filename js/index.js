$(document).ready(()=>{
    $(".first-section__hamburger--menu").on('click', ()=>{ 
        $(".first-header__list").slideToggle(700);
        $(".burger_menu").toggle(600);
        $(".close_menu").toggle(700);
    });
});