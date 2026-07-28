export class AgentRegistry {
  constructor() {
    this.registry = new Map()
  }

  // Register a new agent identity
  register(identity) {
    if (!identity || identity.type !== "agent") {
      throw new Error("Invalid agent identity")
    }

    this.registry.set(identity.id, identity)
    return identity
  }

  // Retrieve an agent by ID
  get(id) {
    return this.registry.get(id)
  }

  // Check if an agent exists
  exists(id) {
    return this.registry.has(id)
  }

  // List all agents
  list() {
    return Array.from(this.registry.values())
  }

  // Filter agents by role
  withRole(role) {
    return Array.from(this.registry.values()).filter(
      a => a.role === role
    )
  }

  // Filter agents by permission
  withPermission(permission) {
    return Array.from(this.registry.values()).filter(
      a => a.permissions.includes(permission)
    )
  }

  // Filter agents by badge
  withBadge(badgeName) {
    return Array.from(this.registry.values()).filter(
      a => a.badges.some(b => b.name === badgeName)
    )
  }

  // Remove an agent identity
  remove(id) {
    return this.registry.delete(id)
  }
}
