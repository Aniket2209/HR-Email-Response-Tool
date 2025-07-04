exports.selectionTemplate = (name, position) => `
  <p>Dear ${name},</p>
  <p>We are pleased to inform you that you have been selected for the position of <strong>${position}</strong>.</p>
  <p>Please reply to this email to confirm your acceptance.</p>
  <p>Best regards,<br/>HR Team</p>
`;

exports.rejectionTemplate = (name, position) => `
  <p>Dear ${name},</p>
  <p>Thank you for applying for the position of <strong>${position}</strong>.</p>
  <p>We regret to inform you that we have decided to move forward with other candidates.</p>
  <p>Best regards,<br/>HR Team</p>
`;