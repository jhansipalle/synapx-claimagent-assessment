function validateFields(fields) {

  const mandatoryFields = [
    "policyNumber",
    "policyholderName",
    "incidentDate",
    "description",
    "claimType",
    "initialEstimate"
  ];

  const missing = [];

  for (const field of mandatoryFields) {
    if (!fields[field]) {
      missing.push(field);
    }
  }

  return missing;
}

module.exports = { validateFields };
