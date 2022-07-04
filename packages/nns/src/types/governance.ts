import type { Agent } from "@dfinity/agent";
import type { Principal } from "@dfinity/principal";
import type { _SERVICE as GovernanceService } from "../../../../candid/governance";

export interface GovernanceCanisterOptions {
  // The agent to use when communicating with the governance canister.
  agent?: Agent;
  // The governance canister's ID.
  canisterId?: Principal;
  // The default service to use when calling into the IC. Primarily overridden
  // in test for mocking.
  serviceOverride?: GovernanceService;
  // The service to use when making 'certified' calls into the IC (as in, using
  // update calls in place of queries). Primarily overridden in test for
  // mocking.
  certifiedServiceOverride?: GovernanceService;
  // Ledger IC App needs requests built with Protobuf.
  // This flag ensures that the methods use Protobuf.
  hardwareWallet?: boolean;
}