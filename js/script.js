let playClicked = false;
let imageCount = 0; 
let isFaseStarted = false;
let isFaseStarted2 = false;
let isFaseStarted3 = false; 

function restartApplication() {
    location.reload();
};

function showFaseScreen() {
    const splashScreen = document.querySelector('.homeScreen-container');
    const faseScreen = document.querySelector('.menu-container');

    if (!playClicked) {
        splashScreen.style.display = 'none';
        faseScreen.style.display = 'flex';
        playClicked = true;
    } 
}

const playButton = document.getElementById('play-button');
playButton.addEventListener('click', showFaseScreen);

function backToFaseScreen(faseNumber) {

    if(faseNumber === 1){
        const faseScreens = document.querySelector('.game-container');
        faseScreens.style.display = 'none';
        const faseScreen = document.querySelector('.menu-container');
        faseScreen.style.display = 'flex';
   
    }else if(faseNumber === 2){
        const faseScreens = document.querySelector('.game-container2');
        faseScreens.style.display = 'none';
        const faseScreen = document.querySelector('.menu-container');
        faseScreen.style.display = 'flex';
        
    }else if(faseNumber === 3){
        const faseScreens = document.querySelector('.game-container3');
        faseScreens.style.display = 'none';
        const faseScreen = document.querySelector('.menu-container');
        faseScreen.style.display = 'flex';
        
    }
   
}
function modal(){

    const btnModal1 = document.querySelector('#btn-modal1');
    const modal = document.querySelector('.homeScreen-container dialog');
    const btnClose = document.querySelector('#btn-close');

    btnModal1.onclick = function () {
        modal.show()
    }
    btnClose.onclick = function (){
        modal.close();
    }
}
modal();

const backToSplashButton = document.getElementById('btn-backMenu');
backToSplashButton.addEventListener('click', () => {
   
    const splashScreen = document.querySelector('.homeScreen-container');
    const faseScreen = document.querySelector('.menu-container');

    splashScreen.style.display = 'flex';
    faseScreen.style.display = 'none';
    playClicked = false;
    }
);
// Restante do código permanece o mesmo

function startFase(faseNumber) {    
    if(faseNumber === 1 ){
        const faseScreen = document.querySelector('.menu-container');
        const gameContainer = document.querySelector('.game-container');
        if(!isFaseStarted){
            faseScreen.style.display = 'none';
            gameContainer.style.display = 'flex';
            stageStart1();
            isFaseStarted = true;
        }else{
            faseScreen.style.display = 'none';
            gameContainer.style.display = 'flex';
        }
    }else if(faseNumber === 2){
        const faseScreen = document.querySelector('.menu-container');
        const gameContainer2 = document.querySelector('.game-container2');
        if(!isFaseStarted2){
            faseScreen.style.display = 'none';
            gameContainer2.style.display = 'flex';
           
            stageStart2();
            isFaseStarted2 = true;
        }else{
            faseScreen.style.display = 'none';
            gameContainer2.style.display = 'flex';
        }
    }else if(faseNumber === 3){
        const faseScreen = document.querySelector('.menu-container');
        const gameContainer3 = document.querySelector('.game-container3');
        if(!isFaseStarted3){
            faseScreen.style.display = 'none';
            gameContainer3.style.display = 'flex';
            
            stageStart3();
            isFaseStarted3 = true;
        }else{
            faseScreen.style.display = 'none';
            gameContainer3.style.display = 'flex';
        }
    }
  
}

const fase1Button = document.getElementById('fase1-button');
fase1Button.addEventListener('click', () => startFase(1));

const fase2Button = document.getElementById('fase2-button');
fase2Button.addEventListener('click', () => startFase(2));

const fase3Button = document.getElementById('fase3-button');
fase3Button.addEventListener('click', () => startFase(3));

function restart(faseNumber) {
    if(faseNumber === 1){
        const dropArea = document.querySelector('.drop-area');
        dropArea.innerHTML = '';
    
        const wordButtons = document.querySelectorAll('.word-button');
        wordButtons.forEach(button => button.classList.remove('selected'));
    
        const imageContainer = document.querySelector('.image-container');
        imageContainer.classList.remove('selected');
        
      
        imageCount = 0;

    }
    else if(faseNumber === 2){
        const dropArea = document.querySelector('.drop-area2');
        dropArea.innerHTML = '';
    
        const wordButtons = document.querySelectorAll('.word-button');
        wordButtons.forEach(button => button.classList.remove('selected'));
    
        const imageContainer = document.querySelector('.image-container2');
        imageContainer.classList.remove('selected');
    
        imageCount = 0;
    }
    else if(faseNumber === 3){
        const dropArea = document.querySelector('.drop-area3');
        dropArea.innerHTML = '';
    
        const wordButtons = document.querySelectorAll('.word-button');
        wordButtons.forEach(button => button.classList.remove('selected'));
    
        const imageContainer = document.querySelector('.image-container3');
        imageContainer.classList.remove('selected');
    
        imageCount = 0;
   
    }
}

function nextPhases(faseNumber){

    const gameContainer = document.querySelector('.game-container');
    const gameContainer2 = document.querySelector('.game-container2');
    const gameContainer3 = document.querySelector('.game-container3');;
    if(faseNumber === 1){
        if(!isFaseStarted2){
            gameContainer.style.display = 'none';
            gameContainer2.style.display = 'flex';
            stageStart2();
        }else{
            gameContainer.style.display = 'none';
            gameContainer2.style.display = 'flex';
        }
       
    }
    else if(faseNumber === 2){
        if(!isFaseStarted3){
            gameContainer2.style.display = 'none';
            gameContainer3.style.display = 'flex';
            stageStart3();
        }else{
            gameContainer2.style.display = 'none';
            gameContainer3.style.display = 'flex';
        }
    }
}

function modalErro(text){
    Swal.fire({
        iconColor: 'red',
        icon: 'error',
        text: text,
        width: '500px',
        background: 'rgb(27, 102, 27)',
        color: 'white',
        showConfirmButton: false,
        showCloseButton: true,
        customClass: {
            popup: 'custom-swal2-modal'
          }
    })
}

function modalWin(text){
    Swal.fire({
        iconColor: 'rgb(10, 207, 10)',
        icon: 'success',
        text: text,
        background: 'rgb(27, 102, 27)',
        color: 'white',
        width: '380px',
        showConfirmButton: false,
        showCloseButton: true
    })
}

function modalInfo(){
    const btnModal1 = document.querySelector('#btn-modal1');
    const modal = document.querySelector('.homeScreen-container dialog').scrollTop = 100;
    const btnClose = document.querySelector('#btn-close');
    modal.show()

    btnClose.onclick = function (){
        modal.close();
    }
}


function stageStart1() {
    let selectedButton = null;
    let originalWord = 'LISTA';
    let shuffledWordTemp = 'SALIT'; 
  
    function createWordButtons(shuffledWord) {
        const randomWordElement = document.getElementById('random-word');
        randomWordElement.innerHTML = '';

        for (let i = 0; i < shuffledWord.length; i++) {
            const letter = shuffledWord[i];
            const button = document.createElement('button');
            button.classList.add('word-button');
            button.textContent = letter;
            button.addEventListener('click', () => selectButton(button));
            randomWordElement.appendChild(button);
        }
    }

    function selectButton(button) {
        if (!playClicked) {
            return;
        }

        if (selectedButton === button) {
            selectedButton.classList.remove('selected');
            selectedButton = null;
        } else {
            if (selectedButton) {
                selectedButton.classList.remove('selected');
            }
            selectedButton = button;
            selectedButton.classList.add('selected');
        }

        const imageContainer = document.querySelector('.image-container');
        if (selectedButton) {
            imageContainer.classList.add('selected');
        } else {
            imageContainer.classList.remove('selected');
        }
    }

    createWordButtons(shuffledWordTemp);

    let imageCount = 0;
    const maxImages = 5;

    const counterMove = document.querySelector('.game-container #counter');
 
    function dragStartHandler(event) {
        if (!playClicked || !selectedButton) {
            modalErro('SELECIONE UMA LETRA PARA PODER ARRASTAR A IMAGEM');
            event.preventDefault();
            return;
        }
        if (
            selectedButton &&
            (event.target.classList.contains("image-left") ||
                event.target.classList.contains("image-right"))
        ) {
            const wordButtons = document.querySelectorAll('.word-button');
            const selectedButtonIndex = Array.from(wordButtons).indexOf(selectedButton);
            const lastIndex = wordButtons.length - 1;
    
            if (
                event.target.classList.contains("image-left") &&
                selectedButtonIndex === 0 // Verifica se é a primeira letra
            ) {
                modalErro('NÃO É POSSÍVEL MOVER A PRIMEIRA LETRA PARA ESQUERDA');
                event.preventDefault();
            } else if (
                event.target.classList.contains("image-right") &&
                selectedButtonIndex === lastIndex // Verifica se é a primeira letra
            ) {
                modalErro('NÃO É POSSÍVEL MOVER A ÚLTIMA LETRA PARA DIREITA');
            } else {
                event.dataTransfer.setData("text/plain", event.target.src);
                event.dataTransfer.setData("text/custom", event.target.className);
            }
        } else {
            event.preventDefault();
        }
    }

    function dragOverHandler(event) {
        event.preventDefault();
    }

    function dropHandler(event) {
        event.preventDefault();

        if (!selectedButton) {
            return;
        }

        if (imageCount >= maxImages) {
            modalErro('LIMITE MáxIMO DE 5 MOVIMENTOS ATINGIDO!');
            return;
        }

        if (event.target.className === "drop-area" && event.dataTransfer.types.includes("text/plain")) {
            const imageUrl = event.dataTransfer.getData("text");
            const imgElement = document.createElement("img");
            imgElement.src = imageUrl;
            imgElement.className = "image";
            imgElement.draggable = false;
            event.target.appendChild(imgElement);

            const customData = event.dataTransfer.getData("text/custom");
            if (customData === "image-left" && selectedButton.previousElementSibling) {
                selectedButton.parentElement.insertBefore(
                    selectedButton,
                    selectedButton.previousElementSibling
                );
            } else if (customData === "image-right" && selectedButton.nextElementSibling) {
                selectedButton.parentElement.insertBefore(
                    selectedButton,
                    selectedButton.nextElementSibling.nextElementSibling
                )
            }
            imageCount++;
            counterMove.innerHTML = 5 - imageCount;
        }
    }
    const dropArea = document.querySelector('.drop-area');
    dropArea.addEventListener('dragover', dragOverHandler);
    dropArea.addEventListener('drop', dropHandler);

    const imageLeft = document.querySelector('.image-left');
    const imageRight = document.querySelector('.image-right');
    

    imageLeft.addEventListener('dragstart', dragStartHandler);
    imageRight.addEventListener('dragstart', dragStartHandler);

    let touchStartX, touchEndX;
    let touchImageElement = null;

    function touchStartHandler(event) {
        if (!playClicked || !selectedButton) {
            event.preventDefault();
            return;
        }
        if (
            selectedButton &&
            (event.target.classList.contains("image-left") ||
                event.target.classList.contains("image-right"))
        ) {
            const wordButtons = document.querySelectorAll('.word-button');
            const selectedButtonIndex = Array.from(wordButtons).indexOf(selectedButton);
            const lastIndex = wordButtons.length - 1;
    
            if (
                event.target.classList.contains("image-left") &&
                selectedButtonIndex === 0
            ) {
                modalErro('NÃO É POSSÍVEL MOVER A PRIMEIRA LETRA PARA ESQUERDA');
                event.preventDefault();
                return;
            } else if (
                event.target.classList.contains("image-right") &&
                selectedButtonIndex === lastIndex
            ) {
                modalErro('NÃO É POSSÍVEL MOVER A ÚLTIMA LETRA PARA DIREITA');
                event.preventDefault();
                return;
            }
    
            touchStartX = event.changedTouches[0].clientX;
            touchImageElement = event.target;
            event.preventDefault();
        } else {
            event.preventDefault();
        }
    }
    
    function touchEndHandler(event) {
        event.preventDefault();
    
        if (!selectedButton) {
            return;
        }
    
        if (imageCount >= maxImages) {
            modalErro('LIMITE MÁXIMO DE MOVIMENTOS ATINGIDO');
            return;
        }
    
        touchEndX = event.changedTouches[0].clientX;
    
        if (Math.abs(touchEndX - touchStartX) > 50) {
            const imageUrl = touchImageElement.src; 
            const imgElement = document.createElement("img");
            imgElement.src = imageUrl;
            imgElement.className = "image";
            imgElement.draggable = false;
            const dropArea = document.querySelector('.drop-area');
            dropArea.appendChild(imgElement);
    
            const customData = touchImageElement.className; 
            if (customData === "image-left" && selectedButton.previousElementSibling) {
                selectedButton.parentElement.insertBefore(
                    selectedButton,
                    selectedButton.previousElementSibling
                );
            } else if (customData === "image-right" && selectedButton.nextElementSibling) {
                selectedButton.parentElement.insertBefore(
                    selectedButton,
                    selectedButton.nextElementSibling.nextElementSibling
                )
            }
    
            imageCount++;
            counterMove.innerHTML = 5 - imageCount;
        }
    }
    
    imageLeft.addEventListener('touchstart', touchStartHandler);
    imageRight.addEventListener('touchstart', touchStartHandler);

    imageLeft.addEventListener('touchend', touchEndHandler);
    imageRight.addEventListener('touchend', touchEndHandler);
   

    function verifyWord() {
        const randomWordElement = document.getElementById('random-word');
        const shuffledRandom = randomWordElement.textContent;

        if (shuffledRandom === originalWord) {
            modalWin('PARABÉNS, A PALAVRA FOI DESEMBARALHADA CORRETAMENTE! CLIQUE EM "PRÓXIMA FASE" PARA AVANÇAR DE FASE.');
            const nextPhase = document.querySelector('#next-phase');
            const statusFase2 = document.getElementById('fase2-button');
            const img2 = document.getElementById('img2');
            img2.src = './imgs/unlocked.png'; 
            statusFase2.disabled = false;
            statusFase2.style.cursor = 'pointer';
            nextPhase.style.display = 'flex';
        } else {
            modalErro('PALAVRA DESEMBARALHADA INCORRETAMENTE! CLIQUE NO BOTÃO "RESTART" PARA REINICIAR A FASE.')
        }
    }
    function restartStage1(){
        restart(1);
        selectedButton = null;
        imageCount = 0;
        counterMove.innerHTML = 5;
        createWordButtons(shuffledWordTemp);
    }

    const verifyButton = document.getElementById('verify-button');
    verifyButton.addEventListener('click', verifyWord);

    const restartButton = document.getElementById('restart-button');
    restartButton.addEventListener('click', restartStage1);

   
    fase1Button.addEventListener('click', () => startFase(1));

    const backToFaseButton = document.getElementById('back-to-fase');
    backToFaseButton.addEventListener('click', () => backToFaseScreen(1));


    const nextPhase = document.getElementById('next-phase');
    nextPhase.addEventListener('click', () => nextPhases(1)); 
}

function stageStart2() {
    let selectedButton = null;
    let originalWord = 'WHILE';
    let shuffledWordTemp = 'IHEWL'; 

    isFaseStarted2 = true;
  
    function createWordButtons(shuffledWord) {
        const randomWordElement = document.getElementById('random-word2');
        randomWordElement.innerHTML = '';

        for (let i = 0; i < shuffledWord.length; i++) {
            const letter = shuffledWord[i];
            const button = document.createElement('button');
            button.classList.add('word-button2');
            button.textContent = letter;
            button.addEventListener('click', () => selectButton(button));
            randomWordElement.appendChild(button);
        }
    }

    function selectButton(button) {
        if (!playClicked) {
            return;
        }

        if (selectedButton === button) {
            selectedButton.classList.remove('selected');
            selectedButton = null;
        } else {
            if (selectedButton) {
                selectedButton.classList.remove('selected');
            }
            selectedButton = button;
            selectedButton.classList.add('selected');
        }

        const imageContainer = document.querySelector('.image-container2');
        if (selectedButton) {
            imageContainer.classList.add('selected');
        } else {
            imageContainer.classList.remove('selected');
        }
    }

    createWordButtons(shuffledWordTemp);

    let imageCount = 0;
    const maxImages = 4;

    const counterMove = document.querySelector('.game-container2 #counter');

    function dragStartHandler(event) {
        if (!playClicked || !selectedButton) {
            modalErro('SELECIONE UMA LETRA PARA PODER ARRASTAR A IMAGEM');
            event.preventDefault();
            return;
        }
        if (
            selectedButton &&
            (event.target.classList.contains('image-left2') ||
                event.target.classList.contains('image-right2') ||
                event.target.classList.contains('image-jump-right2') ||
                event.target.classList.contains('image-jump-left2'))
        ) {
            const wordButtons = document.querySelectorAll('.word-button2');
            const selectedButtonIndex = Array.from(wordButtons).indexOf(selectedButton);
            const lastIndex = wordButtons.length - 1;
    
            if (
                event.target.classList.contains("image-left2") &&
                selectedButtonIndex === 0 // Verifica se é a primeira letra
            ) {
                modalErro('NÃO É POSSÍVEL MOVER A PRIMEIRA LETRA PARA ESQUERDA');
                event.preventDefault();
                return;
            } else if (
                event.target.classList.contains('image-right2') &&
                selectedButtonIndex === lastIndex // Verifica se é a primeira letra
            ) {
                modalErro('NÃO É POSSÍVEL MOVER A ÚLTIMA LETRA PARA DIREITA');
                event.preventDefault();
                return;
            } else if (
                event.target.classList.contains("image-jump-left2") &&
                (selectedButtonIndex === 0 || selectedButtonIndex === 1) // Verifica se é a primeira ou a segunda letra
            ) {
                modalErro('NÃO É POSSÍVEL MOVER A SEGUNDA LETRA PARA ESQUERDA COM ESTE COMANDO');
                event.preventDefault();
                return;
            } else if (
                event.target.classList.contains("image-jump-right2") &&
                (selectedButtonIndex === lastIndex - 1 || selectedButtonIndex === lastIndex) // Verifica se é a penúltima ou a última letra
            ) {
                modalErro('NÃO É POSSÍVEL MOVER A PENÚLTIMA LETRA PARA A DIREITA COM ESTE COMANDO');
                event.preventDefault();
                return;
            } else {
                event.dataTransfer.setData("text/plain", event.target.src);
                event.dataTransfer.setData("text/custom", event.target.className);
            }
        } else {
            event.preventDefault();
        }
    }

    function dragOverHandler(event) {
        event.preventDefault();
    }

    function dropHandler(event) {
        event.preventDefault();

        if (!selectedButton) {
            return;
        }

        if (imageCount >= maxImages) {
            modalErro('LIMITE MÁXIMO DE 4 MOVIMENTOS ATINGIDO.');
            return;
        }

        if (event.target.className === "drop-area2" && event.dataTransfer.types.includes("text/plain")) {
            const imageUrl = event.dataTransfer.getData("text");
            const imgElement = document.createElement("img");
            imgElement.src = imageUrl;
            imgElement.className = "image";
            imgElement.draggable = false;
            event.target.appendChild(imgElement);

            const customData = event.dataTransfer.getData("text/custom");
            if (customData === "image-left2" && selectedButton.previousElementSibling) {
                selectedButton.parentElement.insertBefore(
                    selectedButton,
                    selectedButton.previousElementSibling
                );
            } else if (customData === "image-right2" && selectedButton.nextElementSibling) {
                selectedButton.parentElement.insertBefore(
                    selectedButton,
                    selectedButton.nextElementSibling.nextElementSibling
                );
            } else if (customData === "image-jump-right2" && selectedButton.nextElementSibling.nextElementSibling) {
                selectedButton.parentElement.insertBefore(
                    selectedButton,
                    selectedButton.nextElementSibling.nextElementSibling.nextElementSibling
                );
            } else if (customData === "image-jump-left2" && selectedButton.previousElementSibling) {
                selectedButton.parentElement.insertBefore(
                    selectedButton,
                    selectedButton.previousElementSibling.previousElementSibling
                );
            }
            imageCount++;
            counterMove.innerHTML = 4 - imageCount;
        }
    }
    let touchStartX, touchEndX;
    let touchImageElement = null;
    
    function touchStartHandler(event) {
        if (!playClicked || !selectedButton) {
            event.preventDefault();
            return;
        }
        
        if (
            selectedButton &&
            (event.target.classList.contains('image-left2') ||
                event.target.classList.contains('image-right2') ||
                event.target.classList.contains('image-jump-right2') ||
                event.target.classList.contains('image-jump-left2'))
        ) {
            const wordButtons = document.querySelectorAll('.word-button2');
            const selectedButtonIndex = Array.from(wordButtons).indexOf(selectedButton);
            const lastIndex = wordButtons.length - 1;
    
            if (
                event.target.classList.contains("image-left2") &&
                selectedButtonIndex === 0
            ) {
                modalErro('NÃO É POSSÍVEL MOVER A PRIMEIRA LETRA PARA ESQUERDA');
                event.preventDefault(); 
                return;
            } else if (
                event.target.classList.contains("image-right2") && selectedButtonIndex === lastIndex
            ) {
                modalErro('NÃO É POSSÍVEL MOVER A ÚLTIMA LETRA PARA DIREITA');
                event.preventDefault();
                return;
            } else if (
                event.target.classList.contains("image-jump-left2") &&
                (selectedButtonIndex === 0 || selectedButtonIndex === 1)
            ) {
                modalErro('NÃO É POSSÍVEL MOVER A SEGUNDA LETRA PARA ESQUERDA COM ESTE COMANDO');
                event.preventDefault();
            } else if (
                event.target.classList.contains("image-jump-right2") &&
                (selectedButtonIndex === lastIndex - 1 || selectedButtonIndex === lastIndex) 
            ) {
                modalErro('NÃO É POSSÍVEL MOVER A PENÚLTIMA LETRA PARA A DIREITA COM ESTE COMANDO');
                event.preventDefault();
            }
    
            touchStartX = event.changedTouches[0].clientX;
            touchImageElement = event.target;
            event.preventDefault();
        } else {
            event.preventDefault();
        }
    }
    
    function touchEndHandler(event) {
        event.preventDefault();
    
        if (!selectedButton) {
            return;
        }
    
        if (imageCount >= maxImages) {
            modalErro('LIMITE MÁXIMO DE 3 MOVIMENTOS ATINGIDO.');
            return;
        }
    
        touchEndX = event.changedTouches[0].clientX;
    
        if (Math.abs(touchEndX - touchStartX) > 50) {
            const imageUrl = touchImageElement.src;
            const imgElement = document.createElement("img");
            imgElement.src = imageUrl;
            imgElement.className = "image";
            imgElement.draggable = false;
            const dropArea2 = document.querySelector('.drop-area2');
            dropArea2.appendChild(imgElement);
    
            const customData = touchImageElement.className;
            if (customData === "image-left2" && selectedButton.previousElementSibling) {
                selectedButton.parentElement.insertBefore(
                    selectedButton,
                    selectedButton.previousElementSibling
                );
            } else if (customData === "image-right2" && selectedButton.nextElementSibling) {
                selectedButton.parentElement.insertBefore(
                    selectedButton,
                    selectedButton.nextElementSibling.nextElementSibling
                );
            } else if (customData === "image-jump-right2" && selectedButton.nextElementSibling.nextElementSibling) {
                selectedButton.parentElement.insertBefore(
                    selectedButton,
                    selectedButton.nextElementSibling.nextElementSibling.nextElementSibling
                );
            } else if (customData === "image-jump-left2" && selectedButton.previousElementSibling) {
                selectedButton.parentElement.insertBefore(
                    selectedButton,
                    selectedButton.previousElementSibling.previousElementSibling
                );
            }
            imageCount++;
            counterMove.innerHTML = 4 - imageCount;
        }
    }

    const dropArea2 = document.querySelector('.drop-area2');
    dropArea2.addEventListener('dragover', dragOverHandler);
    dropArea2.addEventListener('drop', dropHandler);
    

    const imageLeft2 = document.querySelector('.image-left2');
    const imageRight2 = document.querySelector('.image-right2')
    const imageJumpRight2 = document.querySelector('.image-jump-right2');
    const imageJumpLeft2 = document.querySelector('.image-jump-left2');

    imageLeft2.addEventListener('dragstart', dragStartHandler);
    imageRight2.addEventListener('dragstart', dragStartHandler);
    imageJumpRight2.addEventListener('dragstart', dragStartHandler);
    imageJumpLeft2.addEventListener('dragstart', dragStartHandler);
    
    imageLeft2.addEventListener('touchstart', touchStartHandler);
    imageRight2.addEventListener('touchstart', touchStartHandler);
    imageJumpRight2.addEventListener('touchstart', touchStartHandler);
    imageJumpLeft2.addEventListener('touchstart', touchStartHandler);

    imageLeft2.addEventListener('touchend', touchEndHandler);
    imageRight2.addEventListener('touchend', touchEndHandler);
    imageJumpRight2.addEventListener('touchend', touchEndHandler);
    imageJumpLeft2.addEventListener('touchend', touchEndHandler);

function verifyWord2() {
    const randomWordElement = document.getElementById('random-word2');
    const shuffledRandom = randomWordElement.textContent;

    if (shuffledRandom === originalWord) {
        modalWin('PARABÉNS, A PALAVRA FOI DESEMBARALHADA CORRETAMENTE. CLIQUE NO BOTÃO "PRÓXIMA FASE" PARA AVANÇAR DE FASE.');
            const nextPhase = document.getElementById('next-phase2');
            const statusFase3 = document.getElementById('fase3-button')
            const img3 = document.getElementById('img3');
            
            img3.src = "./imgs/unlocked.png"; 
            nextPhase.style.display = 'flex';
            statusFase3.disabled = false;
            statusFase3.style.cursor = 'pointer';

    } else {
        modalErro('PALAVRA DESEMBARALHADA INCORRETAMENTE. CLIQUE NO BOTÃO "RESTART" PARA REINICIAR A FASE.')
        }
    }

    function restartStage2(){
        restart(2);
        imageCount = 0;
        counterMove.innerHTML = 4;
        selectedButton = null;
        createWordButtons(shuffledWordTemp);
    }
    const verifyButton = document.getElementById('verify-button2');
    verifyButton.addEventListener('click', verifyWord2);

    const restartButton = document.getElementById('restart-button2');
    restartButton.addEventListener('click', restartStage2);

    const backToFaseButton = document.getElementById('back-to-fase2');
    backToFaseButton.addEventListener('click', () => backToFaseScreen(2));

    const nextPhase = document.getElementById('next-phase2');
    nextPhase.addEventListener('click', () => nextPhases(2));
}

function stageStart3() {
    let selectedButton = null;
    let originalWord = 'PILHA';
    let shuffledWordTemp = 'HIAPL'; 
    isFaseStarted3 = true;

    function createWordButtons(shuffledWord) {
        const randomWordElement = document.getElementById('random-word3');
        randomWordElement.innerHTML = '';

        for (let i = 0; i < shuffledWord.length; i++) {
            const letter = shuffledWord[i];
            const button = document.createElement('button');
            button.classList.add('word-button3');
            button.textContent = letter;
            button.addEventListener('click', () => selectButton(button));
            randomWordElement.appendChild(button);
        }
    }
    function selectButton(button) {
        if (!playClicked) {
            return;
        }

        if (selectedButton === button) {
            selectedButton.classList.remove('selected');
            selectedButton = null;
        } else {
            if (selectedButton) {
                selectedButton.classList.remove('selected');
            }
            selectedButton = button;
            selectedButton.classList.add('selected');
        }

        const imageContainer3 = document.querySelector('.image-container3');
        if (selectedButton) {
            imageContainer3.classList.add('selected');
        } else {
            imageContainer3.classList.remove('selected');
        }
    }

    createWordButtons(shuffledWordTemp);

    let imageCount = 0;
    const maxImages = 10;

    function dragStartHandler(event) {
        if (!playClicked || !selectedButton) {
            modalErro('SELECIONE UMA LETRA PARA PODER ARRASTAR A IMAGEM');
            event.preventDefault();
            return;
        }
        if (
            selectedButton &&
            (event.target.classList.contains("image-jump-right3") ||
                event.target.classList.contains("image-jump-left3"))
        ) {
            const wordButtons = document.querySelectorAll('.word-button3');
            const selectedButtonIndex = Array.from(wordButtons).indexOf(selectedButton);
            const lastIndex = wordButtons.length - 1;
    
            if (event.target.classList.contains("image-jump-left3") &&
                (selectedButtonIndex === 0 || selectedButtonIndex === 1)
            ) {
                modalErro('NÃO É POSSÍVEL MOVER A PRIMEIRA OU PENÚLTIMA LETRA PARA ESQUERDA COM ESTE COMANDO');
                event.preventDefault();
            } else if (event.target.classList.contains("image-jump-right3") &&
                (selectedButtonIndex === lastIndex - 1 || selectedButtonIndex === lastIndex)
            ) {
                modalErro('NÃO É POSSÍVEL MOVER A PRIMEIRA OU PENÚLTIMA LETRA PARA DIREITA COM ESTE COMANDO');
                event.preventDefault();
            } else {
                event.dataTransfer.setData("text/plain", event.target.src);
                event.dataTransfer.setData("text/custom", event.target.className);
            }
        } else {
            event.preventDefault();
        }
    }
    function dragOverHandler(event) {
        event.preventDefault();
    }

    function dropHandler(event) {
        event.preventDefault();

        if (!selectedButton) {
            return;
        }

        if (imageCount >= maxImages) {
            alert("LIMITE MÁXIMO DE 5 MOVIMENTOS ATINGIDOS");
            return;
        }
        if (event.target.className === "drop-area3" && event.dataTransfer.types.includes("text/plain")) {
            const imageUrl = event.dataTransfer.getData("text");
            const imgElement = document.createElement("img");
            imgElement.src = imageUrl;
            imgElement.className = "image";
            imgElement.draggable = false;
            event.target.appendChild(imgElement);

            const customData = event.dataTransfer.getData("text/custom");
            if (customData === "image-jump-right3" && selectedButton.nextElementSibling.nextElementSibling) {
                selectedButton.parentElement.insertBefore(
                    selectedButton,
                    selectedButton.nextElementSibling.nextElementSibling.nextElementSibling
                );
            } else if (customData === "image-jump-left3" && selectedButton.previousElementSibling) {
                selectedButton.parentElement.insertBefore(
                    selectedButton,
                    selectedButton.previousElementSibling.previousElementSibling
                );
            }
            imageCount++;
            counterMove.innerHTML = 3 - imageCount;
        }
    }

    let touchStartX, touchEndX;
    let touchImageElement = null;
    const counterMove = document.querySelector('.game-container3 #counter');
    
    function touchStartHandler(event) {
        if (!playClicked || !selectedButton) {
            event.preventDefault();
            return;
        }
        if (
            selectedButton &&
            (event.target.classList.contains('image-jump-right3') ||
                event.target.classList.contains('image-jump-left3'))
        ) {
            const wordButtons = document.querySelectorAll('.word-button3');
            const selectedButtonIndex = Array.from(wordButtons).indexOf(selectedButton);
            const lastIndex = wordButtons.length - 1;
            if (
                event.target.classList.contains("image-jump-left3") &&
                (selectedButtonIndex === 0 || selectedButtonIndex === 1)
            ) {
                modalErro('NÃO É POSSÍVEL MOVER A SEGUNDA LETRA PARA ESQUERDA COM ESTE COMANDO');
                event.preventDefault();
                return;
            } else if (
                event.target.classList.contains("image-jump-right3") &&
                (selectedButtonIndex === lastIndex - 1 || selectedButtonIndex === lastIndex) 
            ) {
                modalErro('NÃO É POSSÍVEL MOVER A PENÚLTIMA LETRA PARA A DIREITA COM ESTE COMANDO');
                event.preventDefault();
                return;
            }
    
            touchStartX = event.changedTouches[0].clientX;
            touchImageElement = event.target;
            event.preventDefault();
        } else {
            event.preventDefault();
        }
    }
    
    function touchEndHandler(event) {
        event.preventDefault();
    
        if (!selectedButton) {
            return;
        }
    
        if (imageCount >= maxImages) {
            modalErro('LIMITE MÁXIMO DE 5 MOVIMENTOS ATINGIDO.');
            return;
        }
    
        touchEndX = event.changedTouches[0].clientX;
    
        if (Math.abs(touchEndX - touchStartX) > 50) {
            const imageUrl = touchImageElement.src;
            const imgElement = document.createElement("img");
            imgElement.src = imageUrl;
            imgElement.className = "image";
            imgElement.draggable = false;
            const dropArea3 = document.querySelector('.drop-area3');
            dropArea3.appendChild(imgElement);
    
            const customData = touchImageElement.className;
            if (customData === "image-jump-right3" && selectedButton.nextElementSibling.nextElementSibling) {
                selectedButton.parentElement.insertBefore(
                    selectedButton,
                    selectedButton.nextElementSibling.nextElementSibling.nextElementSibling
                );
            } else if (customData === "image-jump-left3" && selectedButton.previousElementSibling) {
                selectedButton.parentElement.insertBefore(
                    selectedButton,
                    selectedButton.previousElementSibling.previousElementSibling
                );
            }
            imageCount++;
            counterMove.innerHTML = 3 - imageCount;
        }
    }

    const dropArea3 = document.querySelector('.drop-area3');
    dropArea3.addEventListener('dragover', dragOverHandler);
    dropArea3.addEventListener('drop', dropHandler);
    

    const imageJumpRight3 = document.querySelector('.image-jump-right3');
    const imageJumpLeft3 = document.querySelector('.image-jump-left3');

    imageJumpRight3.addEventListener('dragstart', dragStartHandler);
    imageJumpLeft3.addEventListener('dragstart', dragStartHandler);
    
    imageJumpRight3.addEventListener('touchstart', touchStartHandler);
    imageJumpLeft3.addEventListener('touchstart', touchStartHandler);
   
    imageJumpRight3.addEventListener('touchend', touchEndHandler);
    imageJumpLeft3.addEventListener('touchend', touchEndHandler);

    function verifyWord3() {
        const randomWordElement = document.getElementById('random-word3');
        const shuffledRandom = randomWordElement.textContent;
    
        if (shuffledRandom === originalWord) {
            modalWin('PARABÉNS! A palavra foi desembaralhada corretamente! VOCÊ CONCLUIU AS TRÊS FASES');
            const btnRestartGame = document.getElementById('restartAPP');
            btnRestartGame.style.display = 'flex';
            btnRestartGame.addEventListener('click', restartApplication);
    
        } else {
            modalErro('PALAVRA DESEBARALHADA INCORRETAMENTE. CLIQUE NO BOTÃO "RESTART" PARA REINICIAR A FASE.')
        }
    }

    function restartStage3(){
        restart(3);
        imageCount = 0;
        counterMove.innerHTML = 3;
        selectedButton = null;
        createWordButtons(shuffledWordTemp);
    }
    
    const verifyButton = document.getElementById('verify-button3');
    verifyButton.addEventListener('click', verifyWord3);

    const restartButton = document.getElementById('restart-button3');
    restartButton.addEventListener('click', restartStage3);

    const backToFaseButton = document.getElementById('back-to-fase3');
    backToFaseButton.addEventListener('click', () => backToFaseScreen(3));

    const nextPhase = document.getElementById('next-phase3');
    nextPhase.addEventListener('click', () => nextPhases(1));
}

