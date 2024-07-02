# 2024-04-23 Technical Fellowship OpenDev Call

- [Watch the recording](https://www.youtube.com/watch?v=n6U-UbX546E)
- Forum: https://forum.polkadot.network/t/2024-04-23-technical-fellowship-opendev-call/7592

# Fellowship Updates

## New Members
Promotions to 1 Dan:
- [s0me0ne-unkn0wn](https://collectives.polkassembly.io/referenda/91)
- [Alin](https://collectives.polkassembly.io/referenda/92)
- [Serban Iorga](https://collectives.polkassembly.io/referenda/93)
## Accepted RFCs
[RFC 84](https://collectives.polkassembly.io/referenda/99) → [General transactions in extrinsic format](https://github.com/polkadot-fellows/RFCs/pull/84)
   - introduces a new transaction type, the "general" transaction. This enables users to authorize origins in new, more flexible ways (e.g. ZK proofs, mutations over pre-authenticated origins)
   - one example is to sponsor the tx of another user
   - it was mentioned that there will be a breaking change in the tx format
   - https://github.com/paritytech/polkadot-sdk/pull/3712/
   - https://github.com/paritytech/polkadot-sdk/issues/2415
## What else is new?
- Salaries are working now
- Proposal to [Onboard Anaelle as Fellowship Secretary](https://collectives.subsquare.io/fellowship/referenda/103)
- [Redesigned Fellowship Dashboard](https://polkadot-fellows.github.io/dashboard/)

# Hot Topics

## Celebrations

- Coretime on Kusama is live
    - pre-existing leases were extended until the end of the new cycle period
- BEEFY activated
- BridgeHub: Polkadot↔Kusama bridge is live
    - can now provide USDC into Kusama, USDT in the future
    - so far only one lane is live (Polkadot AssetHub \<\> Kusama AssetHub), some configuration change is needed to allow additional lanes
    - sending XCM messages is only through established lanes, they essentially act like port cities to another continent. It is theoretically possible to wrap an XCM message, send it to AssetHub Kusama, from there to AssetHub Polkadot, and from there to the final destination
    - parachains already expressed interest in opening lanes
    - wallet integrations in 1-4 weeks
- AssetHub: Asset Conversion Pallet
    - Joe working on small issues
    - permissionless pool creation
    - a discussion about signed extensions and XCM followed
    - https://github.com/paritytech/polkadot-sdk/pull/3926
- [“wish for change” track PR](https://github.com/polkadot-fellows/runtimes/pull/184) was merged

## Polkadot 2.0

- New framing for 2.0?
    - Market perception seems to be that it is about Agile Coretime
    - How about we say Agile Coretime + Elastic Scaling is 2.0?
    - Joe suggested to use the wish for change track
    - “everything that is not in the original whitepaper”
        - async backing, elastic scaling

## Roadmap

- Polkadot SDK version? 1.10, elastic scaling, mythical
- What’s up for the Polkadot Runtime?
    - [Kusama Runtime 1.2.2](https://kusama.polkassembly.io/referenda/380)
        - unstuck P↔K bridge
        - Coretime fixes
    - 1.3
        - real async backing for all system chains
- Adrian Catangiu proposing to change the release mode so that intermittent releases can land on system chains independently

## Stability

- [Stabilizing Polkadot](https://forum.polkadot.network/t/stabilizing-polkadot/7175) (Oliver)
    - Omni node
        - first feedback on the omni node highlighted that there is a need to support EVM RPC compatibility
- [Post-Mortem for parachain halt after runtime 1.2 upgrade](https://forum.polkadot.network/t/2024-04-21-polkadot-parachains-stalled-until-next-session/7526)

# RFCs

## XCQ - Bryan
- Bryan presented a [proposal for XCQ](https://hackmd.io/8L3tonc9RQaVxKO5YyBK6Q?view). It's still a long time to go, with him currently gathering feedback

## XCM Better Fee Handling - Bryan

- Bryan suggested an RFC for [better XCM fee handling](https://github.com/paritytech/xcm-format/pull/53)
  - more feedback is needed from parachain teams. Adrian has offered to follow up with them

# Collectives

## Ambassadors Collective
- integration of the Ambassador Collective is currently ongoing. Looking for a 1.3 release
- some questions were unspecified in the original proposal and are up to interpretation for the Fellowship, especially how the exact voting mechanics for Head Ambassadors work
- Mukharem is integrating it

## Tooling Collective

- Joe/Oliver presented a [proposal for a tooling collective](https://forum.polkadot.network/t/proposing-the-polkadot-tooling-collective-potoc/6915)
- [Github](https://github.com/polkadot-tooling-collective)

# System Chains

## BridgeHub

- [Polkadot↔Kusama bridge is stuck](https://forum.polkadot.network/t/polkadot-kusama-bridge/2971/45?u=alice_und_bob) → [Unstuck proposal](https://polkadot.polkassembly.io/referenda/694) should execute within the next 7 days
- [Initialize Snowbridge proposal](https://polkadot.subsquare.io/referenda/680) is live and should bring the bridge online until the next fellowship meeting

## AssetHub

We discussed the UX issues of recent weeks when launching assets on AssetHub and transferring them to other chains
- Nikolas from Velocity Labs was said to be on the matter
- Joe noted that some instances were due to the way parachains were handling assets (using the relay as a reserve chain of DOT instead of AssetHub). It was agreed that better docs are needed


## Q & A
Under an Agile Coretime paradigm, how will the role of RPCs change? -> RPCs should play less of a role for end users, getting replaced with light clients instead