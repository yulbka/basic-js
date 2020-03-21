class VigenereCipheringMachine {
    constructor(direction) {
      this.direction = direction;                 
    }
    encrypt(message, key) {
        this.message = message;
        this.key = key;
        key = this.key.repeat(Math.ceil(this.message.length / this.key.length)).toUpperCase();
        message = this.message.toUpperCase();
        let cypherText = '';
        let n = 0;
        for (let i = 0; i < message.length; i++) {
          let char = message[i];                    
          let curPos = char.codePointAt(0) - 65;
          if (curPos < 0 || curPos > 25) cypherText += char;
          if (curPos >= 0 && curPos < 26) {
          let newPos = (key.codePointAt(n) - 65 + curPos) % 26;
          cypherText += String.fromCodePoint(newPos + 65);
          n++;
          }
        }
        return cypherText;
    }

    decrypt(encryptedMessage, key) {
      
      this.encryptedMessage = encryptedMessage;
      encryptedMessage = this.encryptedMessage.toUpperCase();   
        if (this.direction === false) {        
          encryptedMessage = encryptedMessage.split('').reverse().join('');
         }   
      this.key = key;        
      key = this.key.repeat(Math.ceil(this.encryptedMessage.length / this.key.length)).toUpperCase();
      let deCypherText = '';
      let n = 0;
      for (let i = 0; i < encryptedMessage.length; i++) {
        let keyChar = key[n];
        let curPos = keyChar.codePointAt(0) - 65;
        let encryptedCharPos = encryptedMessage.codePointAt(i);
        if (encryptedCharPos < 65 || encryptedCharPos > 90) deCypherText += String.fromCodePoint(encryptedCharPos);
        if (encryptedCharPos > 64 && encryptedCharPos < 91) {
        let newPos = (encryptedCharPos - 65 - curPos);
        if (newPos < 0) newPos = newPos + 26;
        deCypherText += String.fromCodePoint(newPos + 65);
        n++;
        }
      }
      if (this.direction === false) deCypherText = deCypherText.split('').reverse().join('');
      return deCypherText;
    }
}

module.exports = VigenereCipheringMachine;
