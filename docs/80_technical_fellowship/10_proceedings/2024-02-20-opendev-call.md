# 2024-02-20 Technical Fellowship OpenDev Call
[Forum Post](https://forum.polkadot.network/t/technical-fellowship-opendev-call-2024-02-20/6355)

### Small Updates
- New members
  - Gonçalo Pestana to Rank I -> FRAME team, working on the staking parachain
  - Sebastian Kunert to Rank II
- Polkadot SDK is now up to version 1.7

# Polkadot Runtime Roadmap
- 1.1.2
  - Was just released. Fixes an XCM issue that affected Kusama (thx Kusama for catching this before it landed on Polkadot!)
  - https://polkadot.polkassembly.io/referenda/416
  - https://collectives.subsquare.io/fellowship/referenda/73
  - https://github.com/polkadot-fellows/runtimes/releases/tag/v1.1.2
- [1.2](https://github.com/polkadot-fellows/runtimes/issues/140)
  - maybe peoplechain on Kusama
  - Coretime on Kusama?
  - Maybe Snowbridge on Kusama?
- [1.3](https://github.com/polkadot-fellows/runtimes/issues/186)
## Polkadot 2.0
Question: Will there ever be a 2.0? Is this something that is actively worked on?

Gavin: 
- undefined concept
- conversation to be had: should we define it?
- realistically should come from stakeholders via hardcore Governance
- my thoughts:
    - compatible with 1.0
    - generality
    - opening up new avenues
    - auditing, availability assuring

# Collectives Chain
- New CoreFellowship Pallet started it's first payout cycle, but no one registered for payouts
- Is now in the second cycle, four devs already registered
- Members will have to provide evidence of their contributions to stay at their rank. Now the discussion can begin on what fellowship members will judge each other on.

# Coretime Chain
## Coretime Revenue Burn
- burning coretime revenue (RFC 10) got accepted
- but no implementation is done yet
- implementation is also dependent on the amount of discussion that will be had in the community
- Fellowship will implement it with a feature toggle and let OpenGov decide
## Bulk Coretime
- maybe on Kusama until next OpenDev Call
- Question: can a single actor hoard all the coretime? Answer: it would be very expensive for him and eventually coretime just reaches a fair market value
- Maybe an economic fellowship might make sense in the future to decide on certain params

# BridgeHub
## BEEFY activated on Kusama
- Runtime is now BEEFY capable
- let's watch and see if there are any issues
- now working to get it activated on Polkadot
## Snowbridge
- tentative date for Kusama-Ethereum bridge: Mid March
- Rococo-Sepolia has been working for a month and even worked flawlessly during a Sepolia hardfork
## Polkadot-Kusama bridge
- works with a Grandpa light client
- the code is already deployed on-chain
- launch very early March

# OpenGov
## Current OpenVM discussion
- Short discussion around the idea. Not the responsibility of the technical fellowship.
- But can be an **extension chain**. The first time I heard that concept being mentioned.
## Add "Wish for Change" track
- Essentially an on-chain signalling mechanism
- RFC 12

# Misc
## Dynamic Referenda Track
- Discussion around what should go into the Polkadot SDK and what should stay in the Polkadot runtime
## Add Enhanced Multisig Pallet to System chains
- Gavin argued that multisig logic should be frontend logic and only if there is wide adoption for a common mechanism and there is specific need to support it from the chain, should such a support be given
- It seems that Multisig is a recurring issue