function errorHandler(err, req, res, next) {
  if (err.name === 'ValidationError') {
    res.status(400).json({ error: 'Erro de validação. Verifique os dados enviados.' });
  } else if (err.name === 'SequelizeUniqueConstraintError') {
    res.status(409).json({ error: 'Conflito de dados. Os dados fornecidos já existem no sistema.' });
  } else {
    console.error(err.stack);
    res.status(500).json({ error: 'Ocorreu um erro no servidor. Por favor, tente novamente mais tarde.' });
  }
}

module.exports = errorHandler;
