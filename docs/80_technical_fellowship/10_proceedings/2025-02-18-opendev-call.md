# 2025-02-18 Technical Fellowship OpenDev Call

- previous: https://forum.polkadot.network/t/2025-01-21-technical-fellowship-opendev-call/11653
- Video: https://www.youtube.com/watch?v=BOGMg6ML-rQ

## Gavin

- Worked on the Repl for JAM. A CLI for the JAM testnet.
- 0.6 modifications for the Graypaper
- On the JAM Tour in East Asia

## Basti

- finished 1.4.0
- working on 500ms blocks, works as a prototype, now working to make it ready for production
- [RFC 138](https://github.com/polkadot-fellows/RFCs/pull/138) - Election mechanism for invulnerable collators on system chains #138
    - currently, these are configured. People are fighting for these slots. The RFC is intended to improve the process. maybe change the system more fundamentally?
    - Donal: currently decided by the managers of the bounty that pays out collators. original set at genesis. if someone wants to challenge it, they need to do an OpenGov ref. to become a regular collator, putting up a bond is sufficient. agree that we need something better. Having it as bounty adds overhead
    - having some kind of collator nomination mechanism would be good. unclear which one.
    - collators only get paid to produce blocks but are not penalized when they don’t produce a block
    - Oliver: is there a way to prevent tx censorship?
        - Basti: you could force-include it through the relay
        - Kian: would be great to showcase this
    - Adrian: should be researched through the W3F
        - Basti: yes, I will ping Jeff about it

## Kian

- prepare the staking system for AssetHub
    - Declaring your intention to be a validator on the relay chain moves to AH and is then communicated to the relay chain. Validators do most of the work on AH and then submit session keys to AH. One more month of work on this.
    - so far the staking system on Polkadot has been one big experiment of how we can push this. In return, we got a very high-quality validator set. This is the justification for this complex system. Putting this on a parachain is a very big step. It’s a feat not done in any system with similar properties.
    - A version of this will be on AH-next on Westend soon. By the next call we will do the migration on Westend.
- Integrate [RFC 97](https://github.com/polkadot-fellows/RFCs/pull/97) Unbonding Queue as part of the migration. The one that reduces unbonding time is asked for by a lot of people.

## Oliver

- Working on AH migration
    - migrating crowdloan leases so that they can be unlocked on AH
    - account translation sovereign accounts. They cannot use the same address as before without some kind of escape hatch
- versioning debate from last call: had debate on it. we are going to keep most of crates in their normal semver versioning. and one self-explanatory version on the umbrella crate
- jam client implementation of "graymatter" - importing safrole and fallback performance tests from other teams. soon join testnet.
- I saw that work has been picked up on Optimistic Project Funding. What is the status Basti?
    - Basti: It is being worked on. Had a call with a guy that works on it and I gave him some directions. I am happy to get more people involved. The community for sure wants it. if you want to be involved, you can get invited into a channel
    - Oliver: There is this Rust bounty now, so it would be a possibility to fund it

## Adrian

- Snowbridge V2: Most of the code is ready. Targeting 2503 SDK release end of March.
    - We need some of the features for Polkadot Hub, especially to call contracts via the bridge.
- XCM support for contracts. how to expose underlying functionality to contracts
    - how do we extend ERC-20 to allow cross-chain token transfers?
- any XCM changes regarding migration Relay to AH.
- XCMv5: almost complete. tying up some lose ends. sometimes soon integrating into Polkadot runtime
- all of this is coming together more or less at the same time. Hub with contract support. XCM migration. Snowbridge V2, XCMv5.
- Hub on Polkadot for Q3. For Kusama on Q2.
- Daniel Shiposha: is there something I can read on XCMv5? My collueagues and I work on similar problems for EVM compatibility.
    - Adrian: Ethereum has many complex solutions to do things that are easy for us. It is an ongoing philosophical debate if we should follow Ethereum to stay compatible or rather push for our own solutions.

## Joe

- Parity-internal deadline for release cycle. Everything is on track for the release.
- Working with integration partners like blockscout, etherscan, gnosis safe, the graph, etc.. that we want to make sure we have on Polkadot.
- Hub API was deprioritized to get migrations and contracts in time for the release

## Muharem

- primary focus: AH migration, migrate data from relay to AH, together with Oliver.
    - Governance: map calls such that ongoing proposals map.
    - data migration for pallets
    - now looking how to manage the migration, benchmarking
- building liquidity incentives for conversion pallet
- bounties: having any kind of asset for bounties
- Adrian: regarding pool rewards. Where are the rewards coming from?
    - anyone can create rewards for any token, which can also be LP tokens

## Sebastian

- working on slot based collator improvements. production of multiple blocks per slot. have 6 second slot duration, and one author produces as many blocks as there are cores. so chains don’t need to change the slot duration.

## Dónal

- Working on AH migration. We got 6 weeks for the release and still some polishing to do.
- Timeline:
    - This week: Deploy AH-next on Westend
    - Finish the migration. Replay on Westend end of March
    - Then implement for Kusama on with stable 2503. Hopefully have ref Mid May Kusama. Then migration go ahead signal Mid May.
    - In the meantime: Hub dry-run on Paseo. They can run it once it is done on Westend. At the same time when we are code complete for Kusama.
    - The same then with one quarter delay for Polkadot

## Franciso

- working on XCM with Adrian. XCMv5 loose ends, audit fixes, etc
- now doing research on how to get ERC-20 tokens to work with smart contracts. investigating what Moonbeam and Astar are doing.
- JAM: working with Oliver on Graymatter, getting tests to pass on the community testnet

## Daniel

- Introduction: He is one of the builders of the UNIQUE parachain
    - working on XCM NFT
    - prepared new asset types to support XCM Asset metadata for everyone
- [RFC 125](https://github.com/polkadot-fellows/RFCs/pull/125) asset NFT XCM metadata
- i believe it is going to be implemented in XCMv6.
    - Francisco: Right now the process of creating a new XCM version is clunky. Bryan is preparing sth to streamline the process.
- my team and I implemented the common tools. they are not merged to the SDK yet. we are already using them.
- tested out dry run API and it was not always backwards compatible. I submitted a PR for that.

## Pablo

- working on traits for fungibles collection.
- working on asset vesting
- migration to latest stable version for the runtime, currently on 2412: XCMv5

