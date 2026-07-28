export class WalletVerification {
  constructor() {
    this.records = new Map()
  }

  // Record a verification event
  verify(identity, signature) {
    if (!identity.wallet) return false
    if (!signature) return false

    const valid = identity.wallet === signature.addr

    const record = {
      identityId: identity.id,
      wallet: identity.wallet,
      signature,
      valid,
      verifiedAt: Date.now()
    }

    const key = `${identity.id}:${record.verifiedAt}`
    this.records.set(key, record)

    return valid
  }

  // Retrieve all verification records for an identity
  history(identityId) {
    return Array.from(this.records.values()).filter(
      r => r.identityId === identityId
    )
  }

  // Retrieve only successful verifications
  successes(identityId) {
    return Array.from(this.records.values()).filter(
      r => r.identityId === identityId && r.valid
    )
  }

  // Retrieve only failed verifications
  failures(identityId) {
    return Array.from(this.records.values()).filter(
      r => r.identityId === identityId && !r.valid
    )
  }
}
