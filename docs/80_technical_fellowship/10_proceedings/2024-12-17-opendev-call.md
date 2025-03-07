# 2024-12-17 Technical Fellowship OpenDev Call

- previous: https://forum.polkadot.network/t/2024-11-18-technical-fellowship-opendev-call/11109
- Video: https://www.youtube.com/watch?v=9MVEPhvMV1Y

## Updates

- [RFP-3](https://github.com/polkadot-fellows/RFPs/blob/main/rfp/0003-fellowship-uis.md) - Fellowship UIs is live

### Spammening (Rob K)

- Multiple runs for the spammening. This one was the first live. Improved every time. Found optimizations
- 128k tps achieved on Kusama with 23 cores.
- Major thing slowing the network down is libp2p. Transition to litep2p to reduce load 50%.
- Optimizations are also backported, might already run on validators.

### Next release (Pablo, Adrian)

- next stable release soonish integrated
- after that we can work on a stable release, late December, early January
- includes:
    - cheaper fees for Snowbridge
    - Polkadot-native asset support, export Polkadot assets to Ethereuem
    - XCM: dry-running and fee estimation
    - AH gets full support for doing just-in-time swaps for paying fees
    - auto-renewals for coretime
- permissionless lanes will not be activated with this release, most of the machinery deployed, but rather where it is activated

## Discussion

### Make Kusama Chaotic Again

https://forum.polkadot.network/t/make-kusama-chaotic-again/11123

Shawn launched a discussion on giving a Kusama new impulses stemming from its Cypherpunk roots.

### Should there be Working Groups?

- Discussion started when fellows vote; Basti argues that people should understand what they vote on. There is a requirement on fellows to vote a minimum quota to retain their status.
- From this, Bryan Chen [suggested to introduce working groups](https://github.com/polkadot-fellows/help-center/issues/12)
- arguments for
    - structure discussions into different channels
    - tried and tested
    - helps cover blind spots
    - participants can learn on the topic in a working group
    - creates higher level discussion that just PRs and issues
- arguments against
    - doesn’t solve the problem of not enough people knowing what they vote on

## Polkadot Hub (Joe, Donal)

- Smart Contracts
    - is progressing as planned, going on in Kusama Q1, late Feb, March; Polkadot Q2
    - Had some internal hackathons at Parity; generally working
    - docs are improving
    - openening a channel to Solidity contracts on AH in the official Polkadot Discsord. Parity team is present there.
- Hub SDK
    - James on vacation
    - Basti works on view functions
- AH Migration
    - going pretty well, lot of progress at the Parity Retreat, specced out impl of migration.
    - Revisited the timeline. Still aligned, Q2 on Kusama, Q3 on Polkadot. Targeting those stable releases end of March and June.
    - Overall getting things in a position where things can run on AH.
        - Staking: working on parachains (AH). Quite big PRs to review, audit. Parallelize the migration of the state.
        - Governance: the challenge is for the ongoing referenda. Calls expected to run on relay and then move to AH, have to work. Some we are not planning to support. list of supported calls that will be mapped. any call that can run in a ref is any call we can run on Polkadot
    - Migrate everything except HRMP, funds for parachains, coretime credits. This will be for a phase 2

## Scaling

### 500ms blocks (Basti)

- solving for latency for users. Pre-confirmations is getting a bigger topic which is the intention here. For lower value transactions that is quite often sufficient for the users.

### Elastic Scaling (Rob K, Sebastian K)

- Most of it already part of the next release. The other part is coming in Q1.
- Already live on Kusama (was part of the spammening)
- Currently publishing part of Cumulus, adding features

## Interop

### XCQ (Bryan Chen)

- working on XCM integration
- working on RFC 126

### XCM (Adrian)

- chunk of work is going live with the next upgrade, end of Jan for new releases, then decide if we want to do a new major release. part of the 2412 SDK.
- expect to integrate in Runtime in Jan

### Bridges

- Polkadot-native assets coming live in the next runtime
- next up: permissionless lanes
- Snowbridge: complete redesign, Snowbridge V2, better UX, easier to integrate, library support for integration
    - might get blocked if no one wants to relay a blacklisted tx
- everything by 2503 next stable release

## Other Updates

### Jesse

- secretary collective done, Jan

### Davide

- reference implementation of JAM PolkaJAM, completing the test vectors that we are providing to the other teams
- refining some papers about Bandersnatch crypto backend

## JAM

- will JAM be handled in the fellowship? will it be a part? what about tooling?
- Not too much in the last 4 weeks, the Holiday season is upon us. A few changes on the Graypaper. 0.5 was just released during the last call. Looking to get the rest of 0.5 integrated in the Graypaper. A few changes to the PVM
- 1.0 by April next year, first half
- Ideas in the pipeline for V2, quantum resistant, multiple JAM instances in the JAM grid
- Services in work at Parity:
    - work on the JAM SDK. Allows Rust devs to develop services.
    - CoreVM (after CoreBoot), by January. No need to consider gas limits: first in the industry. With this, actual Turing-completeness. (was not turing-complete previously because of the gas limit.
        - Doom Demo following afterwars
- been pushing lots of test vectors recently
- test harness, conformance harness for JAM implementations. Feed them randomized data (fuzz testing) against other implementations to do more comprehensive conformance test

Question: How can DOOM run in a core if it needs 4MB RAM but a core only has 2MB?

- you likely refer to 2MB/s is the IO bandwith, so 12MB/6s block, can come as extrinsic data or from the data lake
- thankfully that doesn’t matter to run Doom. Only relevant is the memory pages you are hitting. The way CoreVM works they will only bring in the memory pages that they are actually hitting during the computation
- a work package will be able to fetch in 3k 4kB pages → 12MB
- if you have a program that hits all of its memory all the time will be 12MB
- not limited to use the same pages all the time. This is one of the key elements that JAM brings

Question: How do you make a chain quantum resistant?

- what is at risk?
    - cryptography based on curves is at risk
    - hashing algorithms are fine
    - zk stuff needs alterations
- what we worry about
    - JAM is transactionless, we don’t have to be concerned about transactions
    - only have to be concerned about signatures
- 2 cryptographic elements that we need to change
    - eliptic curve, edwards curve ed2559
    - BLS Bandersnatch - bandersnatch can be switched to post-quantum
        - for bandersnatch ring vrf, ZK Based system for avoiding giving away the identity of incoming validators (used in Safrole Sassafras) would have to be alternated for post-quantum, “it’s not gonna break the bank for JAM”
    - there is already thought going into this; one of them the decision is already made, for the other, there are candidates. I don’t think we will see this before JAM 1. but we might see an RFC before JAM 1.
- 9-month or 18-monthly upgrade cycles for JAM, separate period to CoreChains

First half of 2025 W3F cryptographers would report what specific changes would be needed
