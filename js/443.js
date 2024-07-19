function compress (chars) {
    let len = chars.length;
    let i = 0;
    let j = i+1;
    let temp = 0;

    if(len === 1) {
        return 1;
    }

    while(j < len) {
        if (chars[i] === chars[j]) {
            temp++;
            if (j === len - 1) {
                chars.push(chars[i]);
                temp = `${temp+1}`.split('');
                chars = chars.concat(temp);
            }
        } else {
            chars.push(chars[i]);
            if(temp > 0) {
                temp = `${temp+1}`.split('');
                chars = chars.concat(temp);
            }
            temp = 0;
            i = j;
        }
        j++;
    }

    chars = chars.slice(len); 
    return chars.length
}

console.log(compress2(['a','a','b','b','c','c','c']));

function compress2 (chars) {
    const len = chars.length;
    const i = 0;
    const j = 1;
    let temp = 0;

    if(len === 1) {
        return 1;
    }

    for (let k = 0; k < len; k++) {
        if (chars[i] === chars[j]) {
            chars.shift();
            temp+=1;
        } else {
            chars.push(chars[i]);
            if(temp > 0) {
                temp = `${temp + 1}`.split('');
                for(const num of temp) {
                    chars.push(num);
                }
            }
            chars.shift();
            temp = 0;
        }
    }

    return chars;
}


