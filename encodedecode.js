function encode(strs) {
    let encoded = '';
    for (let str of strs) {
        encoded += str.length + '#' + str;
    }
    return encoded;
}

function decode(s) {
    let i = 0;
    const result = [];

    while (i < s.length) {
        let j = i;
        // Find the '#' separator
        while (s[j] !== '#') {
            j++;
        }

        let length = parseInt(s.slice(i, j));
        let word = s.slice(j + 1, j + 1 + length);
        result.push(word);

        i = j + 1 + length;
    }

    return result;
}
