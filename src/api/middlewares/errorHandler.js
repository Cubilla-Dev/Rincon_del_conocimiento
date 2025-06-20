function errorHandler(err, req, res, next) {
  console.error(err.stack);
  
  if (err.message === 'Guide not found') {
    return res.status(404).json({ error: err.message });
  }
  
  if (err.message.includes('must be') || err.message.includes('required')) {
    return res.status(400).json({ error: err.message });
  }

  res.status(500).json({ error: 'Internal server error' });
}

module.exports = errorHandler;