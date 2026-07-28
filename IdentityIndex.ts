export class IdentityIndex {
  constructor() {
    this.citizens = new Map()
    this.agents = new Map()
    this.organizations = new Map()
  }

  // --- Citizen Management ---
  addCitizen(identity) {
    if (!identity || identity.type !== "citizen") {
      throw new Error("Invalid citizen identity")
    }
    this.citizens.set(identity.id, identity)
    return identity
  }

  // --- Agent Management ---
  addAgent(identity) {
    if (!identity || identity.type !== "agent") {
      throw new Error("Invalid agent identity")
    }
    this.agents.set(identity.id, identity)
    return identity
  }

  // --- Organization Management ---
  addOrganization(identity) {
    if (!identity || identity.type !== "organization") {
      throw new Error("Invalid organization identity")
    }
    this.organizations.set(identity.id, identity)
    return identity
  }

  // --- Unified Lookup ---
  get(id) {
    return (
      this.citizens.get(id) ||
      this.agents.get(id) ||
      this.organizations.get(id) ||
      null
    )
  }

  exists(id) {
    return (
      this.citizens.has(id) ||
      this.agents.has(id) ||
      this.organizations.has(id)
    )
  }

  // --- Type‑Specific Lists ---
  listCitizens() {
    return Array.from(this.citizens.values())
  }

  listAgents() {
    return Array.from(this.agents.values())
  }

  listOrganizations() {
    return Array.from(this.organizations.values())
  }

  // --- Global List ---
  listAll() {
    return [
      ...this.listCitizens(),
      ...this.listAgents(),
      ...this.listOrganizations()
    ]
  }
}
