# 2024-09-17 Technical Fellowship OpenDev Call

Previous: https://forum.polkadot.network/t/2024-07-16-technical-fellowship-opendev-call/9512
Video: https://www.youtube.com/watch?v=hAMo6wMOuak

## Fellowship

New Fellowship [Dashboard](https://polkadot-fellows.github.io/dashboard/) - New URL - https://polkadot-fellows.xyz/

[New Fellowship Statistics Page](https://collectives.subsquare.io/fellowship/statistics) by SubSquare

### Members

[List](https://collectives.subsquare.io/fellowship?page=1)

- Approved
    - Promote Rank 1: Andrei Eres, Alexandru Gheorghe, George,
    - Retain Rank 1: Alin Dima, emalkaleci, Liam, s0me0ne-unk0wn, clangenb, timwu20, serban300, dharjeezy, bkontur, Cisco, Pablo Dorado, gupnik
    - Retain Rank 2: sandreim, Adrian Catangiu., muharem, davxy, skundert
    - Retain Rank 3: Alex
    - Retain Rank 4: Andre
- Retain Rank 5: André Silva
- Ongoing
    - Retain Rank 1:  tdimitrov
    - Retain Rank 2: Joe
    - Retain Rank 6: bkchr
- Rejected
    - https://collectives.subsquare.io/fellowship/referenda/165 - 0 votes
- [New Evaluations repo + manual](https://github.com/polkadot-fellows/Evaluations)
    - Oliver: previously it was just a list of links. Now we have a more human-focused evaluation. No big change, just better to understand.
- FYI: Gavin’s evidence criteria - https://hackmd.io/@polkadot/guidelines

### Whitelistings

Approved

- Fixes & small updates
    - https://collectives.subsquare.io/fellowship/referenda/174 (& DED)
    - https://collectives.subsquare.io/fellowship/referenda/197
    - https://collectives.subsquare.io/fellowship/referenda/198
        - Robert K:
            - pretty soon be able to go to 500, next goal is to have 1000
            - Cores:
                - 5 validators per core
                - Kusama 100, next year 200; same for Polkadot
- Features & Upgrades
    - https://collectives.subsquare.io/fellowship/referenda/173 - https://polkadot.subsquare.io/referenda/1007
        - Robert K: fully live on Kusama, coming to Polkadot in the next months
    - https://collectives.subsquare.io/fellowship/referenda/166
    - https://collectives.subsquare.io/fellowship/referenda/192
    - https://collectives.subsquare.io/fellowship/referenda/203
    - https://collectives.subsquare.io/fellowship/referenda/207
        - https://polkadot.subsquare.io/referenda/1161

### Fellowship Treasury

- https://collectives.subsquare.io/fellowship/referenda/185 - 70k USD to Bryan Chen from the Fellowship Treasury
    - but now resubmitted because of wrong units used - https://collectives.subsquare.io/fellowship/referenda/186
    - Basti: Parachain can register XCM use cases. If there are XCM changes, they can be tested beforehand. Right now, if something is changed it might not show up as failing before production.
- https://collectives.subsquare.io/fellowship/referenda/194

### RFCs

- Discussion
    - Adrian: Ideally RFCs should be read before voting
    - Bastian: The people voting should read it before voting. Not just vote to show up in the voting stats
    - Adrian: Many in the Fellowship don’t even vote
- Approved
    - XCM
        - https://collectives.subsquare.io/fellowship/referenda/190
        - https://collectives.subsquare.io/fellowship/referenda/179 - https://github.com/polkadot-fellows/RFCs/pull/101 - Remove `require_weight_at_most` from XCM Transact
        - https://collectives.subsquare.io/fellowship/referenda/196
            - Adrian: shift in design of how we look at XCM fees. previously a more specific approach, this one is more general approach. available with V5. previously, consumer had high control over buying execution fees, but not everything else (e.g. transfer fees). Expect changes to happen slowly
        - https://collectives.subsquare.io/fellowship/referenda/191
            - Francisco: freedom to add more instructions
        - https://collectives.subsquare.io/fellowship/referenda/178 - [XCM]: Remove NetworkIds for testnets
            - Franciso: small one. Testnets change every so often, so we should stay on the mainnet. In the future refer by genesis hash
    - https://collectives.subsquare.io/fellowship/referenda/171 - Merkleized Metadata: Bring some clarification for the extrinsic inclusion
    - https://collectives.subsquare.io/fellowship/referenda/182
    - https://collectives.subsquare.io/fellowship/referenda/169 - Introduce a transaction extension version
    - https://collectives.subsquare.io/fellowship/referenda/201 - Constrain parachain block validity on a specific core #103
        - Robert K: for elastic scaling. Currently launching MVP. But the full thing needs this RFC. Changes to the candidate descriptor in a binary compatible way (no parachain will break). Change for people building tooling. Specifically collator signature and collator description will change meaning in the descriptor.
- Open
    - https://github.com/polkadot-fellows/RFCs/pull/111 - Pure Proxy Replication #111 - Joe, muharem
        - Muharem: please read and comment
    - https://github.com/polkadot-fellows/RFCs/pull/112 - Compress the State Response Message in State Sync #112
        - Basti: faster fast sync for nodes
    - https://github.com/polkadot-fellows/RFCs/pull/117 - Unbrick Collective
        - Basti: unbricking needs to happen fast. but Fellowship shouldn’t fast-track those proposals. Having a dedicated group would also likely be faster.

### Other Fellowship Issues

- New RFP repo! https://github.com/polkadot-fellows/RFPs
    - What are RFPs?
        - Basti: If something needs to be done and funding from the Fellowship Treasury can be provided, this might be the case for RFPs. But the lines are still blurry on how it differs from RFCs
    - [RFP #1](https://github.com/polkadot-fellows/RFPs/pull/3) - Fellowship UIs
        - Basti: It is still complicated to do Fellowship things with the current UIs
- FYI: Bryan Chen gave an update on XCQ - https://forum.polkadot.network/t/cross-consensus-query-language-xcq/7583/18?u=xlc

## Roadmap

### New Runtime Release Guidelines

- https://github.com/polkadot-fellows/runtimes/pull/439
- Oliver: a checklist to not forget things

### What’s next for Polkadot Runtime?

- Tommi: 1.4?
- Oliver: upgrade to stable2409, probably to stable2407 first
- Shawn: Merklized Distribution of Assets
    - rather than minting for every individual user, submit a Merkle root that is generated offline
    - e.g. for airdrops, DED airdrop had to distribute ED to every individual account
    - with merklized distribution, every user would have to claim individually
- Kian:
    - PR to make Inflation arguments parameterizable merged soon hopefully
- Adrian: Bridge
    - Polkadot-Kusama
        - transfer any asset
        - exposure to Snowbridge assets on Kusama
    - Snowbridge:
        - “exporting” Polkadot-native assets to Ethereum
            - already built, still to be integrated into the runtime
        - then: XCMv5
        - Snowbridge V2 (needs XCMv5)
            - lower fees
            - allow unordered messages
            - improve UX: 1 click end-to-end, pay with ETH everywhere
- Seyed
    - writing an RFC to make validators sign BLS (?) for BEEFY to make the bridge more efficient.

### Coretime

- Bulk Coretime
    - Robert K: Auto-Renew is an upcoming feature to place DOT in an account and renew bulk coretime
    - Donal: There is a market for secondary markets
- On-Demand
    - Robert K:
        - about to launch on Polkadot
        - we de-prioritized super-easy integration for teams. The basic offer is there, but on-demand is so cheap that there won’t be a big demand for on-demand atm
        - basic functionality available
    - Donal: But no cores made available yet

### Elastic Scaling

- Robert K: MVP live on Testnets, not yet on Kusama

### Plaza (Joe)

- Joe
    - 3 projects
        - EVM compatibility
        - moving staking, governance, and balances to AssetHub
        - changing the APIs, view functions
    - will report more in the coming weeks
- Shawn: what can be done to add more ppl to the project?
- Joe: refactor assets, block number / time relationships, implementing view functions, high level APIs so more devs can use it
- Bast: putting abstractions in the runtime might not be a good idea
- Joe: The 3 projects don’t depend on each other, people work on those are quite different, so no need to prioritize one over the other
- Shawn: how many L3 and L4 can we add to the project? form open chat groups?
- Joe: quite a few
- Robert K: would be great to have wrapping library
- Joe: yes, imagine you have the same asset on multiple chains. Would be good to query the balance of those. Kian and James on this.
- Kian: tldr on view function - it nicely complements Plaza. We started talking about it a year ago. We would like to have a high-level spec of engaging with Polkaot and not this chain or that chain. Or at least give the consumer view functions.

### Stabilizing Polkadot (Oliver)

- https://github.com/paritytech/release-registry/ is a new repo that gives timelines for when releases go out of support
    - will also be relevant for AssetHub migration in Plaza

### Total Issuance Fix (Oliver)

[Writeup](https://hackmd.io/@oliverty/HyB8L5X5A)

total balance shown on the RPC was different from the real issuance

KSM is off by 56

DOT is off by 21.6k

## JAM

- some important changes to the GrayPaper → on the website
- Final piece of functionality: audit accumulation
- Getting work packages that want to use the data of previous work packages in a low latency fashion
- Get Parachains in all situations, including async backing