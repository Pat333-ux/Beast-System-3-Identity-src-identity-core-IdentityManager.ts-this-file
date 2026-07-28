import { Identity } from "./Identity"
import { IdentityValidator } from "./IdentityValidator"
import { IdentityEvents } from "./IdentityEvents"

export class IdentityManager {
  constructor() {
    this.registry = new Map()
    this.validator = new IdentityValidator()
    this.events = new IdentityEvents()
  }

  // Create a new identity
  create(id, wallet, type = "citizen") {
    const identity = new Identity(id, wallet, type)

    if (!this.validator.validate(identity)) {
      throw new Error("Invalid identity schema")
    }

    this.registry.set(id, identity)
    this.events.created(identity)

    return identity
  }

  // Retrieve identity by ID
  get(id) {
    return this.registry.get(id)
  }

  // Bind a wallet to an identity
  bindWallet(id, wallet) {
    const identity = this.registry.get(id)
    if (!identity) return null

    identity.wallet = wallet
    this.events.walletBound(identity)

    return identity
  }

  // Verify wallet signature
  verifyWallet(identity, sig) {
    return identity.wallet === sig.addr
  }

  // Add badge to identity
  addBadge(id, badge) {
    const identity = this.registry.get(id)
    if (!identity) return null

    identity.badges.push(badge)
    this.events.badgeAdded(identity, badge)

    return identity
  }

  // Check if identity has a badge
  hasBadge(id, badgeName) {
    const identity = this.registry.get(id)
    if (!
