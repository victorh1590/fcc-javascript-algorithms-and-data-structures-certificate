function palindrome(str: string): Boolean {
  let rx: RegExp = /[\W\s_]/gi;
  let text: string = str.trim().replace(rx, "").toLowerCase();
  let middle: number = (text.length - 1) / 2;
  console.log(text);
  console.log(middle);
  console.log(Math.floor(middle));
  let i: number = 0; 
  let j: number = text.length - 1;
  while (i <= Math.floor(middle) && j >= Math.floor(middle + 1) && j != i) {
   if(text[i++] !== text[j--]) return false;
   i++;
   j--;
  }
  return true;
}

console.log(palindrome("almostomla"));