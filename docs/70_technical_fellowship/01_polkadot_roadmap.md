import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Polkadot 2.0 Roadmap

This article highlights the current status of the developments.

## What is Polkadot 2.0?

Polkadot 2.0 is a collective vision of where Polkadot is going. Simply said, Polkadot is going to become more flexible in what we can do with it. This article presents current speculation around the development roadmap of Polkadot 2.0 to the best of our knowledge. All of it is subject to change.

- To learn more, visit the [Polkadot Wiki](https://wiki.polkadot.network/docs/polkadot-direction)
- You might also like the [Technical Fellowship Project Tracker](https://docs.google.com/spreadsheets/d/1YjeKrCjiQHu6szxHdMhR6fHywRT-w0cxou5Ep-UpJFQ/edit#gid=836474213).
- [RFCs](https://github.com/polkadot-fellows/RFCs)


## Agile Coretime
Agile Coretime is not part of Polkadot 2.0, it already is part of the Polkadot 1.x development roadmap.

Here is a quick primer on what Agile Coretime will focus on:

- Block times: Parachains can now pick their blocktime. It could be 2 seconds or 2 days or anything in between. Only producing blocks when they are needed reduces wasted blockspace and makes everything cheaper.
- Cores: Parachains run on cores. These are like CPU cores on your computer. Some apps only require very little CPU time, some hardcore apps like games or Adobe Premiere require multiple cores. Same with Polkadot 2.0 - parachains will be able to only rent 1/10 of a core or rent multiple cores if they need extra power.
- Pricing: Previously, Polkadot had a complex auction model to rent out cores. This is getting replaced by more flexible rent models like "pay as you go" and monthly bulks (think "subscriptions").

Some details:
- defined in [RFC-1](https://polkadot-fellows.github.io/RFCs/approved/0001-agile-coretime.html), specifics in [RFC-5](https://polkadot-fellows.github.io/RFCs/approved/0005-coretime-interface.html)
- async backing
- elastic scaling
- bulk coretime
- on-demand coretime
- coretime chain
- dynamic block durations
- burn coretime revenue, [RFC-10](https://polkadot-fellows.github.io/RFCs/approved/0010-burn-coretime-revenue.html)

## JAM
JAM is a candidate design for the engine powering Polkadot 2.0. Previously, Polkadot cores could only power parachains. With Polkadot 2.0, the range of 'constructs' that Polkadot can support becomes broader: Smart contracts, zero knowledge rollups, UTXO (Bitcoin-like) systems, etc.

The prerequisites for JAM are:
- XCMP
- Minimal Relay
- PVM
- Safrole

What becomes possible with JAM:
- Run any program (transactionless, PVM)
- Actor Model (CorePlay)
- immutable contracts: Accords (SPREEs)

### XCMP & XCM Queues
### Minimal relay
- aka "hermit relay" aka "move every relay chain feature out to system chains" aka "make the relay chain have 0 tps"
- defined in [RFC-32](https://polkadot-fellows.github.io/RFCs/approved/0032-minimal-relay.html)
- Considered system chains:
    - Balances
    - Staking
    - Governance
- Incoming
    - BridgeHub -> 1.2
    - People Chain ([launch plan](https://forum.polkadot.network/t/people-chain-launch-and-identity-migration-plan/5930)) -> 1.2
    - Coretime -> 1.3
- Live system chains:
    - AssetHub
    - Collectives
### PVM & PolkaVM
- based on RISC-V
- can we very fast, can be slow
- secure metering
- can we dynamically meter when it's fast and when it's slow?
- one troublesome example: memory access in a random fashion could be slow
- As of 2024-03, Gavin considers this to be the biggest risk to the feasibility of the JAM design
### Sassafrass, Safrole

## Polkadot 2.0 Scope
### JAM
- "Cheapest secure decentralized system"
- Specification
    - 350 cores @ 6s execution time (3x current prachain compute)
    - validators specified against AMD Ryzen 9 5950x, 16-24GB RAM
- JAM-chain, enshrined core protocol, forkful upgrades
- Big bang rollout
    - regenesis & parachains migrate over quasi-instantly
- JAM Toaster
    - 12,276 core, 16TB RAM computer to simulate JAM in a controlled environment in Lisbon
### Other 2.0 considerations
- Contracts on Polkadot
- Accords, SPREEs
- CorePlay, Actor Model
- "Work Program Builders" -> Shared Sequencers?
- [Notes by Shawn](https://hackmd.io/EYPbVPPVQTmRNHhT9WIbgQ)

### Presentations
- 2023-06 - "A new perspective on Polkadot" - Gavin Wood at Polkadot Decoded 2023
    - [Video](https://youtu.be/FhC10CCw9Qg?si=yonLnf6t0Ngh_phD&t=2463)
    - [Presentation](https://hackmd.io/@polkadot/Decoded2023#/)
    - [Thread](https://twitter.com/alice_und_bob/status/1674011475533344768)
    - [Follow-Up Twitter Space](https://twitter.com/alice_und_bob/status/1676316174101905410)
    - [Debrief video from Alice und Bob](https://twitter.com/alice_und_bob/status/1675507661847117825)

- 2024-03 JAM: A to Z - Gavin Wood at Sub0 Asia
    - [Video](https://www.youtube.com/watch?v=tdvqkKdFTlw)
    - [Thread](https://twitter.com/alice_und_bob/status/1767454972806074693)
- 2024-03 JAM for Normies
    - [Twitter Space](https://twitter.com/filippoweb3/status/1769703592087183437) hosted by Filippo Franchini

## Open questions
- Level of enshrinement of DOT be into JAM?
- Terminology of actors (paras)

## Interesting Concepts
- [Cryptoeconomic co-processors](https://www.rob.tech/blog/coprocessor-competition/), ([Tweet](https://twitter.com/rphmeier/status/1764707215880183853))
- [Disposable parachains](https://forum.polkadot.network/t/disposable-parachains-for-airdrops-and-other-ideas/5769)
- [Polkadot Kernel/Userland](https://hackmd.io/@Xo-wxO7bQkKidH1LrqACsw/H1RQS1Uyp#/) ([Thread](https://twitter.com/alice_und_bob/status/1704082183667761615))
