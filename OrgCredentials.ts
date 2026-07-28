export class OrgCredentials {
  constructor() {
    this.registry = new Map()
  }

  issue(name, data = {}) {
    const credential = {
      name,
      data,
      issuedAt: Date.now()
    }

    this.registry.set(name, credential)
    return credential
  }

  assign(orgIdentity, credentialName) {
    const credential = this.registry.get(credentialName)
    if (!credential) throw new Error("Credential not found")

    orgIdentity.credentials.push(credential)
    return orgIdentity
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
}
