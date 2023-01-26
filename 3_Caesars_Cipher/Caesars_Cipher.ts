function rot13(str: string): string {
  const zAscii: number = 'z'.charCodeAt(0);
  const aAscii: number = 'a'.charCodeAt(0);
  const aUpperAscii: number = 'A'.charCodeAt(0);
  const zUpperAscii: number = 'Z'.charCodeAt(0);
  const caesarShift: number = 13;
  let chrCodes: any[] = str.split("").map((chr: string): number => chr.charCodeAt(0));
  chrCodes.forEach((chr: number, index: number, arr: any) => {
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