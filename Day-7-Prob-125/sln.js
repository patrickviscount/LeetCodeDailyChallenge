var isPalidrome = function(s) {
    let str = '';
    let revStr = '';
    for (let i = 0; i < s.length; i++){
        if ((/[a-zA-Z]/).test(s[i])){
            str += s[i].toLowerCase();
            revStr = s[i].toLowerCase() + revStr;
        }
    }

    return (str === revStr)
};

console.log(isPalidrome('A man, a plan, a canal: Panama'));