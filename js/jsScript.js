function funcSelector() {
    console.log('Событие funcSelector работает');
    let selector = document.getElementById('selector');
    let noneSelector = document.getElementById('noneSelector');
    if (getComputedStyle(noneSelector).display == 'none'){
        selector.style.borderBottomLeftRadius = '0';
        selector.style.borderBottomRightRadius = '0';
        noneSelector.style.display = 'block';
    }else{
        selector.style.borderBottomLeftRadius = '20px';
        selector.style.borderBottomRightRadius = '20px';
        noneSelector.style.display = 'none';
    }
}

function noneModuleWindowArticles() {
    let noneArticles = document.getElementById('noneArticles');
    let button__open_moduleWindow = document.getElementById('button__open_moduleWindow');
    if (getComputedStyle(noneArticles).display == 'none'){
        noneArticles.style.display = 'flex';
        button__open_moduleWindow.firstElementChild.innerHTML = 'Скрыть';
    }else{
        noneArticles.style.display = 'none';
        button__open_moduleWindow.firstElementChild.innerHTML = 'Показать ещё';
    }
}