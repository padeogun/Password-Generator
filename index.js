function genPw() {
    const chars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]","|",":",";","<",">",",",".","?","/"];
    const passwordLengthInput = document.getElementById('passwordLength');
    const minLength = 5;
    const maxLength = 15;
    let passwordLength = parseInt(passwordLengthInput.value) || 15;
    passwordLength = Math.max(minLength, Math.min(passwordLength, maxLength));

    const genPw = () => {
        let password = "";
        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            password += chars[randomIndex];
        }
        return password;
        };

    document.getElementById('pass1').textContent = genPw();
    document.getElementById('pass2').textContent = genPw();
}