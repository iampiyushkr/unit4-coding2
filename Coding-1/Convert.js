function Convert(amt,currency) {
      return `${currency}${(amt*74.5).indexOf(2)}`
}
console.log(Convert(2,"Rs"))
//module.exports=Convert