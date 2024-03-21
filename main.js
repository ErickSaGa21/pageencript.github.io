function encrypt(text) {
    let mappings = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };
    let encryptedText = "";
    for (let char of text) {
        if (char in mappings) {
            encryptedText += mappings[char];
        } else {
            encryptedText += char;
        }
    }
    return encryptedText;
}

function decrypt(text) {
    let mappings = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };
    let decryptedText = "";
    for (let char of text) {
        if (char in mappings) {
            decryptedText += mappings[char];
        } else {
            decryptedText += char;
        }
    }
    return decryptedText;
}

function processText() {
    const text = document.getElementById("text").value;
    const option = document.querySelector('input[name="option"]:checked').value;
    let result;
    if (option === "encrypt") {
        result = encrypt(text);
    } else {
        result = decrypt(text);
    }
    document.getElementById("result").textContent = result;
}

function copyToClipboard() {
    const text = document.getElementById("result").textContent;
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard: " + text);
}