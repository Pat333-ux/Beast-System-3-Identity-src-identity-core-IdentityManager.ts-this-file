export class OrgRegistry {
  constructor() {
    this.registry = new Map()
  }

  // Register a new organization identity
  register(identity) {
    if (!identity || identity.type !== "organization") {
      throw new Error("Invalid organization identity")
    }

    this.registry.set(identity.id, identity)
    return identity
  }

  // Retrieve an organization by ID
  get(id) {
    return this.registry.get(id)
  }

  // Check if an organization exists
  exists(id) {
    return this.registry.has(id)
  }

  // List all organizations
  list() {
    return Array.from(this.registry.values())
  }

  // Filter organizations by credential
  withCredential(credentialName) {
    return Array.from(this.registry.values()).filter(
      org => org.credentials.some(c => c.name === credentialName)
    )
  }

  // Filter organizations by badge
  withBadge(badgeName) {
    return Array.from(this.registry.values()).filter(
      org => org.badges.some(b => b.name === badgeName)
    )
  }

  // Filter verified organizations (wallet bound)
  verified() {
    return Array.from(this.registry.values()).filter(
      org => !!org.wallet
    )
  }

  // Remove an organization identity
  remove(id) {
    return this.registry.delete(id)
  }
}
