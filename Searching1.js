const users = [
  { username: "Anand", email: "anandjha152@gmail.com" },
  { username: "Rohan", email: "rohan212@gmail.com" },
  { username: "Dev", email: "dev332@gmail.com" },
  { username: "Mani", email: "mani252@gmail.com" },
  { username: "Arya", email: "arya001@gmail.com" },
];

// solutation

function isUserExsit(array,val){
    for(let item of array){
        if (item['username']===val){
            return true;
        }
    }
  return false;
}
 const res=isUserExsit(users,"Dev")
console.log(res);