# Polkadot Roadmap

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

![Polkadot Roadmap](/img/polkadot-roadmap-2025-07.png)

Polkadot has two product angles: Polkadot Cloud and Polkadot Hub. Polkadot Cloud refers to all the services and chains that are built on top of Polkadot, while Polkadot Hub is the gateway for users and developers. You can read more on that [in the forum](https://forum.polkadot.network/t/the-polkadot-cloud/10670).

## Polkadot Cloud

### Cloud 1.0
Cloud 1.0 refers to the original vision of Polkadot, as defined in the [Polkadot Paper](https://github.com/polkadot-io/polkadotpaper/raw/master/PolkaDotPaper.pdf) in 2016 and launched in 2021. In Polkadot 1.0 parachains run on a sharded blockchain with shared security and interoperability through the relay chain. Interoperability is provided through XCM.

- Polkadot 1.0:
  - [Wiki](https://wiki.polkadot.network/docs/polkadot-v1)
  - detailed protocol explainer: ["Polkadot v1.0: Sharding and Economic Security"](https://polkadot.com/blog/polkadot-v1-0-sharding-and-economic-security).
- XCM:
  -  [Intro](https://wiki.polkadot.network/docs/learn/xcm/introduction)
  -  [Advanced intro](https://wiki.polkadot.network/docs/learn-xcm)


### Cloud 2.0
Cloud 2.0 is currently being rolled out. It focuses on usability and scalability. The main projects are coretime, XCM improvements, and UX and developer experience improvements. A general overview of the Polkadot 2.0 roadmap can be found in the [Polkadot Wiki](https://wiki.polkadot.network/docs/polkadot-direction).

#### Coretime
With coretime, scaling parachains is becoming more agile. At the center of coretime is the concept of "cores". Similar to how a computer has CPU cores, parachains can now rent cores. This allows for more flexible pricing and scaling.

- Block times: Parachains can now pick their blocktime. It could be 2 seconds or 2 days or anything in between. Only producing blocks when they are needed reduces wasted blockspace and makes everything cheaper.
- Cores: Some chains only require very little coretime, other chains require a lot of it. Coretime allows parachains to only rent 1/10 of a core or rent multiple cores if they need extra power.
- Pricing: Previously, Polkadot had a complex auction model to rent out cores. This has been replaced by more flexible rent model with on-demand coretime and monthly bulk subscriptions.

Some keywords:
- Agile Coretime: The ability to rent coretime on-demand or in bulks. ([Wiki](https://wiki.polkadot.network/docs/learn-agile-coretime))
- Async Backing: Parachains can keep continously producing blocks, and don't have to wait for the relay chain to include them. This allows for faster block times.
- Elastic Scaling: Use multiple cores for a single chain. ([Wiki](https://wiki.polkadot.network/docs/learn-elastic-scaling), [Forum](https://forum.polkadot.network/t/elastic-scaling/7185))

#### Ohter Improvements
- [XCMv5](https://dablock.com/tech-talks/polkadot-xcmv5-enhancing-user-experience-decoded-2024/): better handling for fees, multi-chain hops, multi-asset transactions
- [OmniNode](https://forum.polkadot.network/t/polkadot-parachain-omni-node-gathering-ideas-and-feedback/7823): simplifying parachain maintenance for developers
- UX improvements
  - [unified address format](https://polkadot-ux-bounty.notion.site/UXB-1-UX-Issue-1-Unified-Address-Format-9e7c414ae769471c9016c9d8463a4d49)
  - [DOT as universal fee token](https://polkadot-ux-bounty.notion.site/UXB-2-UX-Issue-2-DOT-as-a-Unified-Gas-Token-e915b7f7506d48608611e0266722b926)


### Cloud 3.0 "JAM"
JAM is a fundamental evolution of Polkadot. It provides a more generalized rollup reactor where not just parachains, but any kind of construction like smart contracts, actor-model like consturctions, UTXOs, and zk-rollups can be run. For the first time, this also includes applications that are continuously running and don't have to constrain themselves to the resources of a single block.

JAM introduces the concept of "services". Different services can host different kinds of constructions. 
- CoreBoot: The first service, which is akin to a bootloader in that it will provide essential functionality.
- CoreVM: Hosts continuously executing application 
- CoreChains: Parachains on JAM
- CorePlay: Actor model (smart contracts) on JAM

## Hub
### Hub Genesis
Polkadot launched with essential features, like the DOT token, Gov1 (the original governance system), and Nominated Proof-of-Stake.

### Hub 2021 - 2024
Improvements since the launch of Polkadot:
- Governance
  - OpenGov
  - Collectives
- Trustless Bridges
  - Snowbridge
  - Hyperbridge
  - Polkadot-Kusama bridge
- UX improvements
  - Native assets like USDT, USDC
  - Nomination pools
    - Voting in nomination pools
  - Fast Unstaking
  
### Hub 2025+
The Hub will introduce Ethereum-style smart contracts
- pallet-revive
- Hub API
- balances, staking, goverance being available for smart contracts

## Interesting Concepts
- [Cryptoeconomic co-processors](https://www.rob.tech/blog/coprocessor-competition/), ([Tweet](https://twitter.com/rphmeier/status/1764707215880183853))
- [Disposable parachains](https://forum.polkadot.network/t/disposable-parachains-for-airdrops-and-other-ideas/5769)
- [Polkadot Kernel/Userland](https://hackmd.io/@Xo-wxO7bQkKidH1LrqACsw/H1RQS1Uyp#/) ([Thread](https://twitter.com/alice_und_bob/status/1704082183667761615))
