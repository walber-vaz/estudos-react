const validateParams = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid params')
  }
}

export {
  validateParams
}
