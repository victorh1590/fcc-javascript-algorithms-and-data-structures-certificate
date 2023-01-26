function telephoneCheck(str: string): boolean {
  let patterns: RegExp[] = 
  [
    /^(\d{3}[ -]\d{3}[ -]\d{4}$)/i, 
    /^(\(\d{3}\) ?\d{3}-\d{4})$/i,
    /^((1 )?\d{3}[ -]\d{3}[ -]\d{4})$/i,
    /^(1 ?\(\d{3}\)[ -]?\d{3}[ -]\d{4})$/i,
    /^(\d{10})$/i
  ];
  for(let i = 0; i < patterns.length; i++) {
    if(patterns[i].test(str)) return true;
  }
  return false;
}

telephoneCheck("555-555-5555");