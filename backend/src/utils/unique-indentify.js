const gnerateRandomUniqueIndetify = (prefix) => {
  // Gera um número aleatório de 0 a 999999
  const randomID = Math.floor(Math.random() * 1000000);

  return `${prefix}-${randomID}`;
};

module.exports = { gnerateRandomUniqueIndetify };
