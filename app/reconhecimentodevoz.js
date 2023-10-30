window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()
 
recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    chute = e.results [0] [0].trascript
    exibeChuteNaTela(chute)
    verificaSeOChutePossuiUmValorValido(chute)
}
    
