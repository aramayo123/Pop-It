const menuButtom = document.querySelector('#mobile-menu');
if(menuButtom)
    menuButtom.addEventListener('click', e => {
        const menu = document.querySelector('#nav-bar-mobile-links');
        if(menu.style.display == "block")
            menu.style.display="none";
        else
            menu.style.display="block";
    })
