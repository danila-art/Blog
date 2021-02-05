function funcSelector() {
    console.log('Событие работает');
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
