const UNIT: string[] = ['I', 'V', 'X'];
const DEC: string[] = ['X', 'L', 'C'];
const CENT: string[] = ['C', 'D', 'M'];

function selectCharset(numberOfDigits: number): string[] {
  switch(numberOfDigits){
    case 4:
      return ['M'];
    case 3: 
      return CENT;
    case 2:
      return DEC;
    default:
      return UNIT;
  }
}

function digitConversion(digit: string, charset: string[]): string {
  let value: number = Number.parseInt(digit);
  const repeatChr = () => `${charset[0].repeat(value)}`;
  if (charset.length === 1) 
    return repeatChr();
  else if (value >= 9) {
    return `${charset[0]}${charset[2]}`;
  }
  else if (value >= 5) {
    return `${charset[1]}${charset[0].repeat(value - 5)}`;
  }
  else if (value === 4) {
    return `${charset[0]}${charset[1]}`;
  }
  return repeatChr();
}

function convertToRoman(num: number): string {
  if(num > 3999 || num < 0) {
    throw ("Invalid number.");
  }
  
  let digits: string[] = String(num).split('');
  let roman: string[] = [""];
  while(digits.length > 0) {
    let charset: string[] = selectCharset(digits.length);
    roman.push(digitConversion(digits[0], charset));
    digits.shift();
  }
  return roman.join('');
}
console.log(convertToRoman(36));