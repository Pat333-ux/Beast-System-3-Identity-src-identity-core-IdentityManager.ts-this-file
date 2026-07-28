export class IdentityEvents {
  created(identity) {
    console.log(`identity.created:${identity.id}`)
  }

  walletBound(identity) {
    console.log(`identity.walletBound:${identity.id}`)
  }

  badgeAdded(identity, badge) {
    console.log(`identity.badgeAdded:${identity.id}:${badge.name}`)
  }
}
