# 2024-11-18 Technical Fellowship OpenDev Call

- previous: https://forum.polkadot.network/t/2024-10-15-technical-fellowship-opendev-call/10812
- Video: https://www.youtube.com/watch?v=YldX4hfcW04

## Intro - Updates

- New member introduction - Christian Langenbacher: Ecosystem builder for 5 years, started together with brenzi. Also supporting Ajuna.
- Polkadot 1.3.4 - Reduced inflation on Polkadot. 10% → 8%; of that 85% go to stakers, 15% go to the Treasury

## Polkadot Hub

Joe

- What is Hub?
    - Hub - “everything that is not running on a parachain” (as opposed to what is not relay chain and system chains)
        - smart contracts, staking, governance
        - all the functionality on AssetHub, assets, and stablecoins
        - identity on the people chain
    - When we think Hub and Cloud, we are not thinking of chains, it’s the wrong abstraction
    - Hub contains the functionality of multiple chains
- “Hub API” (name not decided)
    - Facade for the Hub. Hides away storage formats and pallets. Abstracts away implementation details from devs and users
    - Higher-level API that allows you to build applications
    - View functions work under the hood to make this happen
- Timeline
    - Ethereum compatibility (pallet_revive) - late Q1, Q2
    - Minimal Relay, view functions - a quarter later, late Q2, Q3
        - Donal: balances, staking, and governance will likely all migrate at the same time
    - a quarter earlier on Kusama
- Other system chains
    - BridgeHub: There was discussion to move it
    - Collectives: Rather not, as it is mostly for users deep into Polkadot
- Is BridgeHub part of the cloud or the Hub? Gavin argues that it is rather part of the Cloud. Hub also uses it, but it is an interface available to all Cloud services.
    - Side discussion: Gavin argues that calling Snowbridge a bridge is not idea, as it throws it together with other bridges and makes it harder to differentiate. He thinks of it rather as an interface

## Interoperability

- Francisco:
    - XCM v5:
        - Cross-chain transfers are now possible to mix transfers and teleports
        - no longer specify weight
        - play well with new runtime APIs for dry-running
        - part of the next release (Jan, Feb?)
    - Snowbridge V2 live on testnet
        - lower fees
        - Ledger transfer of Polkadot-native assets to Ethereum
        - release after the next one

## Scaling: Coretime, Async Backing, Elastic Scaling

- Elastic Scaling (Andrei):
    - Deployed a test chain on Kusama for the first time. 1k tps with a single core. Tested Elastic Scaling with 3 cores. Got 3k tps
    - RFC 103 implementation aims to make it more robust and secure. Implemented. Be in the next stable SDK release.
    - The end-to-end test was successful on Zombienet, part of CI.
    - What is missing towards the release: Dynamic async backing parameters, documentation, get it enacted
    - So far it worked on a single collator. The next step is to make it fast.
        - Functional implementation of transaction streaming early next year. More streamlined block production. Don’t have to wait for the previous slot before producing their slot. High-level design and discussion on the Github Ticket. Good mental model on how it should work.
        - The more geographically decentralized collators are, the lower the tps.
        - Other things to make it faster: Beefier machines, CPUs. Limited to that the parachain state fits into memory.
        - Future improvement: using NOMT. Not in active development, but on the roadmap.
- 500ms blocks (Basti)
    - produce multiple small blocks for a single PoV
- Pricing cores: Should cores have a minimum price
    - Gav: In economics, there is a “[loss leader pricing](https://www.notion.so/2024-11-18-OpenDev-Call-13dfb5b66ded80ef9bfef653ecb17611?pvs=21)” to stimulate sales. Raising prices might not lead to the intended results.
    - Donal: there is currently an issue with the pricing mechanism. Currently, it is a broad strokes approach (based on the last price of a core). Floor pricing might not fix that problem.
    - extended discussion on pricing cores and game theoretical considerations

## JAM

Gavin

- JAM Roadmap
- we just had our first big international meetup, 12-13 teams JAM teams; good vibe, ppl excited, goal was to get clients interoperating
- Graypaper 0.5 released → primary goal to include the 64-bit PVM, a few optimizations discovered from the client implementation. go to the GitHub if interested
- We are moving forward on one of the elements towards CorePlay: Continuations
    - PVM utilizes a memory model that has everything in one space: stack and heap. Save the state of the VM very easily. JAM DA has the same size as PVM 64-bit pages. Can save state of a JAM instance into the PVM memory. That’s why we can have continuations. This is a very useful computation model/primitive to have.
    - 1:11:50 JAM blocks have a limited amount of gas, with CorePlay (is like a Layer 2), we can relax this because we have continuations. Programs that go on infinitely. From the perspective of the programmer and user, it is continuous. You don’t see the blockchain, we don’t see block boundaries. We are starting to move blockchain from being a product in itself to being an implementation detail.
    - Not moving directly to CorePlay, because it has a few moving pieces. The first step is CoreVM. CoreVM is running a PVM continuation in-core. Leave the frame buffer in the DA. Will actually use JAM.
    - Have the DOOM executable sit in the instance.
- Presented a roadmap at Sub0.
    - 0.6 - Graypaper formalism changes. Add clarity.
    - 0.7 & 0.8 - Alterations to the protocol based on new understanding coming from running it on the JAM toaster and services. Hard to do now, because we don’t know the patterns that are going to be used.
    - 0.9 Kusama JAM chain
    - 1.0 post-audit spec
- Targets: protocol H1-2025, launch-ready H2-2025
- 3 different implementations that are sufficiently fast. within 10% of fastest implementation might draw out the launch a bit. Only few bottlenecks. one of them: PVM impl
- Teams that are doing good? Implementations written in C, C++, Swift, Rust show good promise to make it to Milestone 5.
    - Teams doing good right now: Goka (swift), gosammer, jamtuna, block cowboys
- JAM SDK - What will it contain?
    - Initially just a trait that has accumulate, refine, onTransfer functions. It’s all you need, but probably not all you want.
    - Cross-service composition, ability of services to interact with parachains
    - eventually, build work packages for your service

## Individuality

- DIM 1 is largely finished
- DIM 2 focus now
- DIM 3 started
- Individuality is pushing other aspects of the Polkadot stack. Data publication.
- Another thing Gavin is excited about is message signaling inside the blockchain. Use it to exchange technical endpoints of video chat.
- Hub territory
- give non-transferable NFTs to users to guarantee their individuality
- [recent update presentation at Polkadot Decoded Asia 2024](https://www.youtube.com/watch?v=JnDM9XNknKE)

## Other points

- Pablo drawing attention to the new stable version - https://github.com/polkadot-fellows/runtimes/pull/490
    - voting in nom pools - part of the next release - planned this year
    - fast unstaking - still some unresolved questions
    - dynamic lanes
- Ambassador Fellowship is looking for a Dev to pick up Optimistic Phragmen Funding
- https://github.com/polkadot-fellows/runtimes/pull/501