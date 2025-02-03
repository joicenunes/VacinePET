export const sanitizeInput = (input) => {
  if (typeof input === 'string') {
    return input
      .replace(/'/g, "''")  // Escapa aspas simples
      .replace(/--/g, '')   // Remove comentários de SQL Injection
      .replace(/;/g, '')    // Remove pontos e vírgulas
      .trim();              // Remove espaços extras
  }

  if (typeof input === 'object' && input !== null) {
    const sanitizedObject = {};
    for (const key in input) {
      if (Object.prototype.hasOwnProperty.call(input, key)) {
        sanitizedObject[key] = sanitizeInput(input[key]);
      }
    }
    return sanitizedObject;
  }

  return input;
};
