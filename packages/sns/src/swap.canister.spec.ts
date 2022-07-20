import type { ActorSubclass } from "@dfinity/agent";
import { mock } from "jest-mock-extended";
import type { Swap, _SERVICE as SnsSwapCanister } from "../candid/sns_swap";
import { GetStateResponse } from "../candid/sns_swap";
import { swapCanisterIdMock } from "./mocks/sns.mock";
import { SwapCanister } from "./swap.canister";

describe("Swap canister", () => {
  it("should return the state of the swap canister", async () => {
    const mockSwap: Swap = {
      swap: [
        {
          init: {
            min_participants: 2,
          },
        },
      ],
    } as unknown as Swap;

    const mockResponse: GetStateResponse = {
      swap: [mockSwap],
      derived: [],
    };

    const service = mock<ActorSubclass<SnsSwapCanister>>();
    service.get_state.mockResolvedValue(mockResponse);

    const canister = SwapCanister.create({
      canisterId: swapCanisterIdMock,
      certifiedServiceOverride: service,
    });
    const res = await canister.state({});
    expect(res).toEqual(mockResponse);
  });
});