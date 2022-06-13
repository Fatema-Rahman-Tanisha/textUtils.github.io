var text = document.getElementById('text')
var removeSpaceButton =  document.getElementById('removeSpace')
var capitalize =  document.getElementById('Capitalize')
var removePunc =  document.getElementById('removePunc')
var smallT = document.getElementById('smallText')
var showLength = document.getElementById('showLength')
var punc = [',',';',':',"[","]","{","}","(",")","'",'"', "|","&","#","!",'.',"/"]
removeSpaceButton.onclick = function() {
    text.value = text.value.replaceAll(" ","")
}
capitalize.onclick = function() {
    text.value = text.value.toUpperCase()
}
smallT.onclick = function() {
    text.value = text.value.toLowerCase()
}
showLength.onclick = function () {
    showLength.innerHTML = text.value.length
}
removePunc.onclick = function() {
    for (let i = 0; i < punc.length; i++) {
            text.value = text.value.replaceAll(punc[i], "")
        
    }
}