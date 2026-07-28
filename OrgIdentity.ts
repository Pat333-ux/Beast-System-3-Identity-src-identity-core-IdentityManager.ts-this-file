export class OrgIdentity {
  constructor(id, wallet, name, domain) {
    this.id = id
    this.wallet = wallet
    this.type = "organization"
    this.name = name
    this.domain = domain
    this.credentials = []
    this.badges = []
    this.createdAt = Date.now()
  }

  addCredential(cred) {
    this.credentials.push(cred)
  }

  hasCredential(name) {
    return this.credentials.some(c => c.name === name)
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
