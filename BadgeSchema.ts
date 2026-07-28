export class BadgeSchema {
  constructor() {
    this.required = ["name", "mintedAt"]
  }

  validate(badge) {
    if (!badge) return false

    // Required fields
    for (const field of this.required) {
      if (!badge[field]) return false
    }

    // Name must be a string
    if (typeof badge.name !== "string") return false

    // mintedAt must be a number (timestamp)
    if (typeof badge.mintedAt !== "number") return false

    // Optional data object
    if (badge.data && typeof badge.data !== "object") return false

    return true
  }
}
