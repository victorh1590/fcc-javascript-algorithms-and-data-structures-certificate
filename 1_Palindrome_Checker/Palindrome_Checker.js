function palindrome(str) {
    let rx = /[\W\s_]/gi;
    let text = str.trim().replace(rx, "").toLowerCase();
    let middle = (text.length - 1) / 2;
    let i = 0;
    let j = text.length - 1;
    while (i <= Math.floor(middle) && j >= Math.floor(middle + 1) && j != i) {
        if (text[i++] !== text[j--])
            return false;
        i++;
        j--;
    }
    return true;
}
console.log(palindrome("almostomla"));
