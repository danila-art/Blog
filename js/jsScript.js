function funcSelector() {
    console.log('Событие funcSelector работает');
    let selector = document.getElementById('selector');
    let noneSelector = document.getElementById('noneSelector');
    if (getComputedStyle(noneSelector).display == 'none') {
        selector.style.borderBottomLeftRadius = '0';
        selector.style.borderBottomRightRadius = '0';
        noneSelector.style.display = 'block';
    } else {
        selector.style.borderBottomLeftRadius = '20px';
        selector.style.borderBottomRightRadius = '20px';
        noneSelector.style.display = 'none';
    }
}

function noneModuleWindowArticles() {
    let noneArticles = document.getElementById('noneArticles');
    let button__open_moduleWindow = document.getElementById('button__open_moduleWindow');
    if (getComputedStyle(noneArticles).display == 'none') {
        noneArticles.style.display = 'flex';
        button__open_moduleWindow.firstElementChild.innerHTML = 'Скрыть';
        let button__open_moduleWindowRect = button__open_moduleWindow.getBoundingClientRect();
        let bodyRect1 = document.body.getBoundingClientRect();
        let buttonHeight = button__open_moduleWindowRect.top - bodyRect1.top;
        let noneArticlesHeight = noneArticles.clientHeight;
        console.log(bodyRect1);
        console.log(button__open_moduleWindowRect);
        console.log(buttonHeight);
        console.log(noneArticlesHeight);
            window.scrollTo({
                top: buttonHeight,
                behavior: "smooth"
            })
    } else {
        noneArticles.style.display = 'none';
        button__open_moduleWindow.firstElementChild.innerHTML = 'Показать ещё';
    }
}

function noneModuleWindowPortfolio() {
    let noneWindowPortfolio = document.getElementById('noneWindowPortfolio');
    let buttonOpenPortfolioModule = document.getElementById('buttonOpenPortfolioModule');
    if (getComputedStyle(noneWindowPortfolio).display == 'none') {
        noneWindowPortfolio.style.display = 'block';
        buttonOpenPortfolioModule.firstElementChild.innerHTML = 'Скрыть';
        let buttonPortfolioRect = buttonOpenPortfolioModule.getBoundingClientRect();
        let bodyRect = document.body.getBoundingClientRect();
        let buttonHeight = buttonPortfolioRect.top - bodyRect.top;
        window.scrollTo({
            top: buttonHeight + 600,
            behavior: "smooth"
        })
    } else {
        noneWindowPortfolio.style.display = 'none';
        buttonOpenPortfolioModule.firstElementChild.innerHTML = 'Показать ещё';
    }
}