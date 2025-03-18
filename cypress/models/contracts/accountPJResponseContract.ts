export const accountPJRequestSchema = {
    type: 'object',
    required: ['fullName', 'document', 'email'],
    properties: {
      fullName: { type: 'string' },
      document: { type: 'string' },
      email: { type: 'string', format: 'email' }
    }
};