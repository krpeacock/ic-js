import type { _SERVICE as GovernanceService } from "../../candid/governance";
import type { CanisterOptions } from "./canister.options";

export interface GovernanceCanisterOptions
  extends CanisterOptions<GovernanceService> {
  // Ledger IC App needs requests built with Protobuf.
  // This flag ensures that the methods use Protobuf.
  hardwareWallet?: boolean;
}