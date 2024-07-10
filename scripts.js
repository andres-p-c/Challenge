const inputText = document.getElementById('input-text');
const encryptBtn = document.getElementById('encrypt-btn');
const decryptBtn = document.getElementById('decrypt-btn');
const messageText = document.getElementById('message-text');

encryptBtn.addEventListener('click', () => {
  const texto = inputText.value;
  const textoEncriptado = encriptar(texto);
  messageText.value = textoEncriptado;
});

decryptBtn.addEventListener('click', () => {
  const textoEncriptado = messageText.value;
  const textoDesencriptado = desencriptar(textoEncriptado);
  messageText.value = textoDesencriptado;
});

function encriptar(texto) {
  let textoEncriptado = '';
  for (let i = 0; i < texto.length; i++) {
    let charCode = texto.charCodeAt(i);
    charCode += 3; // Desplazamiento de 3 posiciones
    textoEncriptado += String.fromCharCode(charCode);
  }
  return textoEncriptado;
}

function desencriptar(textoEncriptado) {
  let textoDesencriptado = '';
  for (let i = 0; i < textoEncriptado.length; i++) {
    let charCode = textoEncriptado.charCodeAt(i);
    charCode -= 3; // Desplazamiento de 3 posiciones
    textoDesencriptado += String.fromCharCode(charCode);
  }
  return textoDesencriptado;
}