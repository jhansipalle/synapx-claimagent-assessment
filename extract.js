function extractFields(text) {

  //extract value using regex
  const getValue = (regex) => {
    const match = text.match(regex);
    return match ? match[1].trim() : null;
  };

  return {
    policyNumber: getValue(/Policy Number[:\-]?\s*(.*)/i),

    policyholderName: getValue(/Name of Insured[:\-]?\s*(.*)/i),

    incidentDate: getValue(/Date of Loss[:\-]?\s*(.*)/i),

    description: getValue(/Description[:\-]?\s*(.*)/i),

    estimatedDamage: Number(
      getValue(/Estimate Amount[:\-]?\s*(\d+)/i)
    ),

    claimType: getValue(/Claim Type[:\-]?\s*(.*)/i),

    initialEstimate: Number(
      getValue(/Initial Estimate[:\-]?\s*(\d+)/i)
    )
  };
}

module.exports = { extractFields };
