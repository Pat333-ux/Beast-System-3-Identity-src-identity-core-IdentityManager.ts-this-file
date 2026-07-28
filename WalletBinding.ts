export class WalletBinding {
  constructor(events) {
    this.events = events
  }

  bind(identity, wallet) {
    identity.wallet = wallet
    this.events.walletBound(identity)
    return identity
  }

  verify(identity, sig) {
    return identity.wallet === sig.addr
  }

  isBound(identity) {
    return !!identity.wallet
  }
}
