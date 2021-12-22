function Palindrome(str) { 

    // code goes here  

    const newstr = str.toLowerCase().match(/[a-z]/g)
    const revstr = str.toLowerCase().match(/[a-z]/g).reverse()
    let statu = false

    for(let i =0; i < newstr.length; i++) {
        if(newstr[i] === revstr[i]) {
            statu = true
        }
        else {
            statu = false
        }
    }

    return  statu
  
  }
     
  // keep this function call here 
  console.log(Palindrome('eye'))