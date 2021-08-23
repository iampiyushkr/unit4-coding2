function Convert(amt,currency) {
      return `${currency}${(amt*74.5).toFixed(2)}`
}

module.exports=Convert