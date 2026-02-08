/*
Some definitions
Kebab case: lowercase-words-separated-by-hyphens

Camel case: lowercaseFirstWordFollowedByCapitalizedWords

Snake case: lowercase_words_separated_by_underscores

Examples:
"hello-world" => "kebab"
"hello-to-the-world" => "kebab"
"helloWorld" => "camel"
"helloToTheWorld" => "camel"
"hello_world" => "snake"
"hello_to_the_world" => "snake"
"hello__world" => "none"
"hello_World" => "none"
"helloworld" => "none"
"hello-World" => "none"
*/
function id(c_str) {
   if (typeof c_str !== 'string')
    throw new TypeError("c_str must be a string");

  const rules = [
    [/^[a-z]+(?:[A-Z][a-z]*)+$/, "camel"],
    [/^[a-z]+(?:-[a-z]+)+$/,     "kebab"],
    [/^[a-z]+(?:_[a-z]+)+$/,     "snake"]
  ];

  for (const [re, name] of rules) {
    if (re.test(c_str)) return name;
  }

  return "none";
}