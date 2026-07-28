export class BadgeMinting {
  constructor(events) {
    this.events = events
    this.registry = new Map()
  }

  mint(name, data = {}) {
    const badge = {
      name,
      data,
      mintedAt: Date.now()
    }

    this.registry.set(name, badge)
    return badge
  }

  assign(identity, badge) {
    identity.badges.push(badge)
    this.events.badgeAdded(identity, badge)
    return identity
  }

  get(name) {
    return this.registry.get(name)
  }

  has(identity, name) {
    return identity.badges.some(b => b.name === name)
  }
}
