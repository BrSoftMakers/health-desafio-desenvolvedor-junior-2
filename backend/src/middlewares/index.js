const formatNames = (req, res, next) => {
  const { name, ownerName } = req.body.data;

  function capitalize(name, ownerName) {
    
    const nameSplited = name.split(' ');
    const ownerNameSplited = ownerName.split(' ')
    let newName = '';
    let nameCapitalized = '';
    let newOwnerName = '';
    let ownerNameCapitalized = '';

    // capitaliza o nome do pet 
    if (nameSplited.length > 1) {
      for (let i = 0; i < nameSplited.length; i++) {
        let firstLetter = nameSplited[i].charAt(0).toUpperCase();
        nameCapitalized = `${firstLetter}${nameSplited[i].slice(1).toLowerCase()}`
        newName += `${nameCapitalized} `
      }
    } else {

      const firstLetterCapitalized = name.charAt(0).toUpperCase();
      newName = `${firstLetterCapitalized}${name.slice(1).toLowerCase()}`
    }

    // capitaliza o nome do proprietário 
    if (ownerNameSplited.length > 1) {
      for (let i = 0; i < ownerNameSplited.length; i++) {
        let firstLetter = ownerNameSplited[i].charAt(0).toUpperCase();
        ownerNameCapitalized = `${firstLetter}${ownerNameSplited[i].slice(1).toLowerCase()}`
        newOwnerName += `${ownerNameCapitalized} `
      }
    } else {

      const firstLetterCapitalized = ownerName.charAt(0).toUpperCase();
      newOwnerName = `${firstLetterCapitalized}${ownerName.slice(1).toLowerCase()}`
    }
    req.body.data = { ...req.body.data, name: newName, ownerName: newOwnerName } // body com campos atualizados
  }

  if (name.length > 1 && ownerName.length > 1){
    capitalize(name, ownerName)
  }

  next();

}


module.exports = {
  formatNames
}