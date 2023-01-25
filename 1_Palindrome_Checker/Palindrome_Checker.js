function palindrome(str) {
    var rx = /[\W\s_]/gi;
    var text = str.trim().replace(rx, "").toLowerCase();
    var middle = (text.length - 1) / 2;
    console.log(text);
    console.log(middle);
    console.log(Math.floor(middle));
    var i = 0;
    var j = text.length - 1;
    while (i <= Math.floor(middle) && j >= Math.floor(middle + 1) && j != i) {
        if (text[i++] !== text[j--])
            return false;
        i++;
        j--;
    }
    return true;
}
console.log(palindrome("almostomla"));
