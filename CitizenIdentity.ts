export class CitizenIdentity {
  constructor(id, wallet) {
    this.id = id
    this.wallet = wallet
    this.type = "citizen"
    this.badges = []
    this.registeredAt = Date.now()
  }

  addBadge(badge) {
    this.badges.push(badge)
  }

  hasBadge(name) {
    return this.badges.some(b => b.name === name)
  }

  isVerified() {
    return !!this.wallet
  }
}
