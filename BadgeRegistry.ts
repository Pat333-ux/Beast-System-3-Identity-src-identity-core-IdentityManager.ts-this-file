import { BadgeSchema } from "./BadgeSchema"

export class BadgeRegistry {
  constructor() {
    this.schema = new BadgeSchema()
    this.registry = new Map()
  }

  register(badge) {
    if (!this.schema.validate(badge)) {
      throw new Error("Invalid badge schema")
    }

    this.registry.set(badge.name, badge)
    return badge
  }

  get(name) {
    return this.registry.get(name)
  }

  exists(name) {
    return this.registry.has(name)
  }

  list() {
    return Array.from(this.registry.values())
  }

  assign(identity, badgeName) {
    const badge = this.registry.get(badgeName)
    if (!badge) throw new Error("Badge not found")

    identity.badges.push(badge)
    return identity
  }
}
