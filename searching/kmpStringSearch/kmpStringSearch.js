const patternBuilder = (word) => {
    const pattern = [0];
    let prefix = 0;
    let suffix = 1;

    while(suffix < word.length) {
        if(word[suffix] === word[prefix]) {
            pattern[suffix] = prefix + 1;
            prefix ++;
            suffix ++;
        } else if(prefix === 0) {
            pattern[suffix] = 0;
            suffix ++;
        } else {
            prefix = pattern[prefix - 1];
        }
    }

    return pattern;
}

const KMPStringSearch = (text, word) => {
    if(!word.length) {
        return 0;
    }
    const pattern = patternBuilder(word);

    let i = 0;
    let j = 0;

    while(i < text.length) {
        if(word[j] === text[i]) {
            if(j === word.length - 1) {
                return (i - word.length) + 1
            }
            i ++;
            j ++;
        } else if(j > 0) {
            j = pattern[j - 1];
        } else {
            j = 0;
            i += 1
        }
    }
    return -1
}

console.log(KMPStringSearch("ababcaababcaabc", "ababcaabc"))