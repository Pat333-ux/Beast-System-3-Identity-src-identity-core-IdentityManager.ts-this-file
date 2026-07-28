export class AgentIdentity {
  constructor(id, wallet, role) {
    this.id = id
    this.wallet = wallet
    this.role = role
    this.permissions = []
    this.badges = []
    this.createdAt = Date.now()
  }

  assignPermission(perm) {
    this.permissions.push(perm)
  }

  addBadge(badge) {
    this.badges.push(badge)
  }

  hasPermission(name) {
    return this.permissions.includes(name)
  }

  hasBadge(name) {
    return this.badges.some(b => b.name === name)
  }
}
