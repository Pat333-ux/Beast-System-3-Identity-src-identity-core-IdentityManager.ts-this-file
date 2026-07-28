export class OrgSignature {
  constructor() {
    this.signatures = new Map()
  }

  // Create a signature for an organizational action
  sign(orgIdentity, action, payload = {}) {
    if (!orgIdentity.wallet) {
      throw new Error("Organization wallet not bound")
    }

    const sig = {
      orgId: orgIdentity.id,
      orgName: orgIdentity.name,
      action,
      payload,
      signedAt: Date.now(),
      signerWallet: orgIdentity.wallet
    }

    const key = `${orgIdentity.id}:${action}:${sig.signedAt}`
    this.signatures.set(key, sig)

    return sig
  }

  // Verify signature authenticity
  verify(orgIdentity, signature) {
    if (!signature) return false
    if (signature.orgId !== orgIdentity.id) return false
    if (signature.signerWallet !== orgIdentity.wallet) return false
    return true
  }

  // Retrieve all signatures for an org
  list(orgId) {
    return Array.from(this.signatures.values()).filter(sig => sig.orgId === orgId)
  }

  // Retrieve signatures for a specific action
  listByAction(orgId, action) {
    return Array.from(this.signatures.values()).filter(
      sig => sig.orgId === orgId && sig.action === action
    )
  }
}
