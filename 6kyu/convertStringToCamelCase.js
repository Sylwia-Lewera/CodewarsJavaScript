/*
 Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"
 */
function toCamelCase(str){
  
  if (typeof str !== 'string')
    throw new TypeError("str must be a string");

   const [first, ...rest] = str.split(/[-_]+/);

  return first + rest.map(w => w[0].toUpperCase() + w.slice(1)).join("");

}