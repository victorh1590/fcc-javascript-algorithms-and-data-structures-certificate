function rot13(str) {
    const zAscii = 'z'.charCodeAt(0);
    const aAscii = 'a'.charCodeAt(0);
    const aUpperAscii = 'A'.charCodeAt(0);
    const zUpperAscii = 'Z'.charCodeAt(0);
    const caesarShift = 13;
    let chrCodes = str.split("").map((chr) => chr.charCodeAt(0));
    chrCodes.forEach((chr, index, arr) => {
        if (chr >= aAscii && chr <= zAscii) {
            if (chr + caesarShift > zAscii)
                arr[index] = String.fromCharCode(caesarShift - 1 - Math.abs(chr - zAscii) + aAscii);
            else
                arr[index] = String.fromCharCode(chr + caesarShift);
        }
        else if (chr >= aUpperAscii && chr <= zUpperAscii) {
            if (chr + caesarShift > zUpperAscii)
                arr[index] = String.fromCharCode(caesarShift - 1 - Math.abs(chr - zUpperAscii) + aUpperAscii);
            else
                arr[index] = String.fromCharCode(chr + caesarShift);
        }
        else
            arr[index] = String.fromCharCode(chr);
    });
    return chrCodes.join("");
}
rot13("SERR PBQR PNZC");
