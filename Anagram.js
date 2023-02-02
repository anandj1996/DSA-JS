//  String Anagram
//  'hello'-> 'lleho'

// condition
// lenght check (for both strings)
// string 'hello'
// {h:0,e:0,l:0,o:0}

function isAnagram(string1, string2) {
  if (string1.length != string2.length) {
    return false;
  }
  let counter = {};
  for (let letter of string1) {
    counter[letter] = (counter[letter] || 0)+1;
    console.log(counter[letter]);
  }
  for (let items of string2){
      if(!counter[items]){
          console.log("for third l")
          return false;
      }
      counter[items]-1;
  }
  return true;
}
const check=isAnagram("hello", "lleho");
console.log(check);
