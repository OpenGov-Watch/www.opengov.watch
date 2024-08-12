# 2024-07-16 Technical Fellowship OpenDev Call

Previous: https://forum.polkadot.network/t/2024-06-25-technical-fellowship-opendev-call/8890
Video: https://www.youtube.com/watch?v=oWppBMrgU7M

# Fellowship

[Dashboard](https://polkadot-fellows.github.io/dashboard/)

## Members

- Approved
    - Promote Rank 1: Clara, Thibaut, gpestana, nikos, Ross Bulat
    - Retain Rank 1: Olanod, Szego
    - Promote Rank 2: joepetrowski, brenzi
    - Promote Rank 4: eskimor
    - Retain Rank 4: xlc, kiananigma
- Ongoing
    - Retain Rank 1: Ankan, Dima, ermalkaleci, Liam, s0me0ne-unkn0wn, clanbenb, timwu20, serban300, dharjeezy
    - Retain Rank 3: ordian

## Fellowship Meeting in Brussels

- The Fellowship had its 3rd physical meeting in Brussels during Polkadot Decoded.
- make parachain creation cheaper (deposits)
    - currently, 30k USD, should become 2 orders of magnitude cheaper → 300 USD
- how to use the Treasury?
    - Traveling, Notebooks
    - UI
    - make life inside the Fellowship easier
- [Agenda](https://docs.google.com/document/d/1snRRzKTbVZGgBYwSooGzBxznlKQe5YYZgoP1Ai9-wTw/edit#heading=h.zii4yq8jep0g)
- [Notes](https://docs.google.com/document/d/1TgSMdx7vejwrHJN0Sz57IYZkMMLhkw2YzwJMAAfG-Xc/edit)

## Fellowship Referenda

Approved

- [Ref 150](https://collectives.polkassembly.io/referenda/150) to ratify whitelisted caller usage for Snowbridge emergencies
    - pause/unpause the bridge
- [Ref 154](https://collectives.polkassembly.io/referenda/154) Whitelist Polkadot People Chain Setup
- [Ref 155](https://collectives.polkassembly.io/referenda/155) Whitelist Update HRMP Channel Limits

Ongoing

- [Ref 156](https://collectives.polkassembly.io/referenda/156) Whitelist People Chain Migration and Release

## RFCs

- [RFC 26 Sassafras Consensus](https://github.com/polkadot-fellows/RFCs/pull/26)
    - relay chain will not transition to Sassafras, because JAM will come anyway in the near future
    - intended as a reference for parachains
    - JAM will use Safrole
- [RFC 91 - Add creation time for DHT authority discovery records](https://github.com/polkadot-fellows/RFCs/pull/91)

## Signalling Discussion

- Virto Team Funding Proposal - [Collective 11](https://collectives.subsquare.io/posts/11)

# Roadmap

## Next versions:

### 1.2.8 (Adrian)

https://github.com/polkadot-fellows/runtimes/issues/358

Adrian: 

- Cheaper Snowbridge
- import headers only when there is actual execution data

### 1.3.0 (Donal, Adrian, Cisco)

- https://github.com/polkadot-fellows/runtimes/issues/186
- Donal:
    - SDK 1.13
    - waiting for SDK 1.14
    - Focus is likely coretime for Polkadot - targeting August
- Adrian:
    - Polkadot-Kusama bridge finality relay fee 90% down
    - [transfer_all for pallet_assets](https://github.com/paritytech/polkadot-sdk/pull/4527)
- Cisco: new XCM payments and dry-run API an system chains and relay
- Oliver: A light version of RFC 89 coming: parameters pallet, max_inflation, min_inflation, falloff
    - Basti: should we open this up? Could different values every month. JAM is gonna lock it and now we open it up?
    - Shawn: Determining the values off-chain would be good.
    - Gav: should be decided by OpenGov, not the Fellowship. Ideally long decision phase
    - Kian: RFC 89 on pause until there is a decision here
        
        no updates, on pause until we make a decision
        
        https://github.com/polkadot-fellows/RFCs/pull/89/files
        
        discussion still ongoing
        
        Ties into the bigger economics discussion:
        
        https://forum.polkadot.network/t/polkadots-economics-tools-to-shape-the-forseeable-future/8708/6
        
- Adds vesting to AH
- 6s block time for people chain
- [Fast Fellowship Promote Tracks](https://github.com/polkadot-fellows/runtimes/pull/356)

## Coretime

## Elastic Scaling (Andrei)

next week, ready to test on Westend forum post coming up. Kusama should follow up shortly on next runtime upgrade based on 1.14 SDK, 

- ongoing research to remove limitations
    - open collator set: draft [RFC 103](https://github.com/polkadot-fellows/RFCs/pull/103) posted

### Stabilizing Polkadot (Oliver)

- New SDK release process
    - New Release Process after the next SDK 1.14 release
    - 6 months stable release cadence with 12m of support
    - will start with 3m cadence
- [Runtime Release checklist](https://github.com/polkadot-fellows/runtimes/issues/304) and [here](https://docs.google.com/document/d/1jWLPI9JIsr5DobyXblrL6GCwGPe5N0lSmClj5MwMsgc/edit#heading=h.f6i1u4er08jf)

Research

## New RFCs

- [RFC 0096](https://github.com/polkadot-fellows/RFCs/pull/96): Smart Contracts on the Coretime Chain. This RFC proposes the implementation of smart contracts on the Coretime chain to enhance flexibility and enable complex decentralized applications, including secondary market functionalities.
- [RFC 0097](https://github.com/polkadot-fellows/RFCs/pull/97): Unbonding queue. This RFC proposes a safe mechanism to scale the unbonding time from staking on the Relay Chain proportionally to the overall unbonding stake, aiming to enhance user convenience without compromising system security.
- [RFC 99](https://github.com/polkadot-fellows/RFCs/pull/99) - include transaction extension version
- [RFC 100](https://github.com/polkadot-fellows/RFCs/pull/100) - New XCM instruction: InitiateAssetsTransfer for complex asset transfers (Adrian)
- [RFC 101](https://github.com/polkadot-fellows/RFCs/pull/101) - Transact Unlimited weight (Adrian)
- [RFC 102](https://github.com/polkadot-fellows/RFCs/pull/102/files) - Off-chain parachain upgrades (eskimor)
- [SDK 4315](https://github.com/paritytech/polkadot-sdk/issues/4315) Define and implement Hold for Assets, [SDK 4530](https://github.com/paritytech/polkadot-sdk/pull/4530) HeldBalance (Pablo)
- [Polkadot Ecosystem Tests](https://forum.polkadot.network/t/polkadot-ecosystem-tests/9067)

# JAM (Gavin)

- Graypaper 0.3 released, probably another release soon. don’t think we will see other significant changes until we start coding
- Tour: first part done, lectures in place for on-chain portion, off-chain portion no lectures yet
- interest from coders to write implementations, 58 form submissions
- happy about amount of talk in the Graypaper channel