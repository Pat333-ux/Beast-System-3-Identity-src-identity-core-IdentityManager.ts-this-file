export const AgentPermissions = {
  READ_IDENTITY: "read.identity",
  WRITE_IDENTITY: "write.identity",
  VERIFY_WALLET: "verify.wallet",
  MINT_BADGE: "mint.badge",
  ASSIGN_ROLE: "assign.role",
  ACCESS_LOGS: "access.logs",
  EXECUTE_ACTION: "execute.action"
}

// Permission sets mapped to agent roles
export const RolePermissions = {
  observer: [
    AgentPermissions.READ_IDENTITY,
    AgentPermissions.ACCESS_LOGS
  ],

  sentinel: [
    AgentPermissions.READ_IDENTITY,
    AgentPermissions.VERIFY_WALLET,
    AgentPermissions.ACCESS_LOGS
  ],

  archivist: [
    AgentPermissions.READ_IDENTITY,
    AgentPermissions.WRITE_IDENTITY,
    AgentPermissions.ACCESS_LOGS
  ],

  verifier: [
    AgentPermissions.READ_IDENTITY,
    AgentPermissions.VERIFY_WALLET,
    AgentPermissions.MINT_BADGE
  ],

  executor: [
    AgentPermissions.EXECUTE_ACTION,
    AgentPermissions.VERIFY_WALLET
  ],

  director: [
    AgentPermissions.ASSIGN_ROLE,
    AgentPermissions.MINT_BADGE,
    AgentPermissions.EXECUTE_ACTION,
    AgentPermissions.ACCESS_LOGS,
    AgentPermissions.WRITE_IDENTITY
  ]
}
