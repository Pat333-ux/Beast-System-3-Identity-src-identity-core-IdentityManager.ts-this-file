export class WalletEvents {
  bound(identity) {
    console.log(`wallet.bound:${identity.id}:${identity.wallet}`)
  }

  verified(identity, result) {
    console.log(`wallet.verified:${identity.id}:${result}`)
  }

  failed(identity, reason) {
    console.log(`wallet.failed:${identity.id}:${reason}`)
  }
}
