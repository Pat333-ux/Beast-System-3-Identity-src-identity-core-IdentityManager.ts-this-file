export class CitizenRegistry {
  constructor() {
    this.registry = new Map()
  }

  // Register a new citizen identity
  register(identity) {
    if (!identity || identity.type !== "citizen") {
      throw new Error("Invalid citizen identity")
    }

    this.registry.set(identity.id, identity)
    return identity
  }

  // Retrieve a citizen by ID
  get(id) {
    return this.registry.get(id)
  }

  // Check if a citizen exists
  exists(id) {
    return this.registry.has(id)
  }

  // List all citizens
  list() {
    return Array.from(this.registry.values())
  }

  // Filter citizens by badge
  withBadge(badgeName) {
    return Array.from(this.registry.values()).filter(
      c => c.badges.some(b => b.name === badgeName)
    )
  }

  // Filter citizens by wallet verification status
  verified() {
    return Array.from(this.registry.values()).filter(
      c => !!c.wallet
    )
  }

  // Remove a citizen identity
  remove(id) {
    return this.registry.delete(id)
  }
}
