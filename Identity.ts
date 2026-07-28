export class Identity {
  constructor(id, wallet, type = "citizen") {
    this.id = id
    this.wallet = wallet
    this.type = type
    this.badges = []
    this.createdAt = Date.now()
  }

  addBadge(badge) {
    this.badges.push(badge)
  }

  hasBadge(name) {
    return this.badges.some(b => b.name === name)
  }
}
