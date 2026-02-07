function decideWorkflow(fields, missingFields) {

  if (missingFields.length > 0) {
    return {
      route: "Manual Review",
      reason: "One or more mandatory fields are missing"
    };
  }

  const description = (fields.description || "").toLowerCase();
  // investigation keywords (with simple negation handling)
const hasFraudKeyword =
  (description.includes("fraud") && !description.includes("no fraud")) ||
  description.includes("staged") ||
  description.includes("inconsistent");

if (hasFraudKeyword) {
  return {
    route: "Investigation",
    reason: "Suspicious keywords found in claim description"
  };
}

  if (fields.claimType && fields.claimType.toLowerCase() === "injury") {
    return {
      route: "Specialist Queue",
      reason: "Claim type involves injury"
    };
  }
  if (fields.estimatedDamage && fields.estimatedDamage < 25000) {
    return {
      route: "Fast-track",
      reason: "Estimated damage is below 25,000"
    };
  }

  // Default route
  return {
    route: "Standard Processing",
    reason: "Claim meets normal processing criteria"
  };
}

module.exports = { decideWorkflow };
