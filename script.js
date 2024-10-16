const aside = document.querySelector('aside')
const menus = document.querySelectorAll('section')

function toggleAside() {
    aside.classList.toggle('open')
}

function openMenu(section) {
    let selectedMenu = document.getElementById(section)

    menus.forEach(menu => {
        menu.classList.remove('open')
    })
    selectedMenu.classList.add('open')
}

const indicator = document.createElement('div');
indicator.id = 'indicator';
aside.appendChild(indicator);

function openApp(app, btn, title) {
    let appDiv = document.getElementById(app);
    const apps = document.querySelectorAll('.app');
    const btnApps = document.querySelectorAll('.appBtn');
    const header = document.querySelector('header h3');

    apps.forEach(a => {
        a.classList.remove('open');
    });
    appDiv.classList.add('open');

    btnApps.forEach(btnApp => {
        btnApp.classList.remove('active');
    });
    btn.classList.add('active');

    header.innerHTML = title;

    const btnTop = btn.offsetTop - 10;  
    indicator.style.transform = `translateY(${btnTop}px)`;
}

document.addEventListener('DOMContentLoaded', () => {
    const activeBtn = document.querySelector('aside button.active');
    if (activeBtn) {
        const btnTop = activeBtn.offsetTop;
        indicator.style.transform = `translateY(${btnTop - 10}px)`;  // Inicializa a posição do indicador
    }
});



function newFile(fileType) {
    
}

function togglePopUp(popUp) {
    let popUpId = document.getElementById(popUp);
    popUpId.classList.toggle('active');
    
    document.body.classList.toggle('pop-up-active');
}

  
  