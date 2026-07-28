export class IdentityValidator {
  validate(identity) {
    if (!identity) return false

    // Basic required fields
    if (!identity.id) return false
    if (!identity.wallet) return false
    if (!identity.type) return false

    // Allowed identity types
    const allowed = ["citizen", "agent", "organization"]
    if (!allowed.includes(identity.type)) return false

    // Badge array must exist
    if (!Array.isArray(identity.badges)) return false

    return true
  }
}
