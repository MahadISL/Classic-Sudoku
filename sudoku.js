

window.onload = loadGame = () => {
    setGame();
}


const setGame = () => {
    //Difits 1-9
    for(i=0; i<=9; i++){
        // <div id=i class=number>i</div>
        let number = document.createElement('div');
        number.id = i;
        number.innerText = i;
        number.classList.add('number');
        document.getElementById('digits').appendChild(number);
    }
}