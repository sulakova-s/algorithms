/* 
  The rgb function is incomplete. Complete it so that passing in RGB decimal values will
  result in a hexadecimal representation being returned. Valid decimal values for RGB are
  0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

  Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
    Examples (input --> output):
    255, 255, 255 --> "FFFFFF"
    255, 255, 300 --> "FFFFFF"
    0, 0, 0       --> "000000"
    148, 0, 211   --> "9400D3"
*/
function rgb(r, g, b) {
  const r_hex = decToHex(r);
  const g_hex = decToHex(g);
  const b_hex = decToHex(b);

  return `${r_hex}${g_hex}${b_hex}`;
}

function decToHex(dec) {
  dec = dec < 0 ? 0 : dec > 255 ? 255 : dec;

  const hex = "0123456789ABCDEF";
  const quotient = Math.floor(dec / 16);
  const remainder = dec % 16;

  return hex[quotient] + hex[remainder];
}

console.log(rgb(0, 0, 0)); // 000000
console.log(rgb(0, 0, -20)); // 000000
console.log(rgb(300, 255, 255)); // FFFFFF
console.log(rgb(173, 255, 47)); // ADFF2F
