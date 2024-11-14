# 2024-10-15 Technical Fellowship OpenDev Call

Previous: https://forum.polkadot.network/t/2024-09-17-technical-fellowship-opendev-call/10457
Video: https://www.youtube.com/watch?v=F2wYK-N321Q

## Latest Release: Runtimes 1.3.3

https://github.com/polkadot-fellows/runtimes/releases/tag/v1.3.3

- Allow signed origins to send arbitrary XCMs from some system chains ([polkadot-fellows/runtimes#407](https://github.com/polkadot-fellows/runtimes/pull/407))
    - users can submit their own XCM calls as extrinsics
    - it is considered safe now to allow users sending arbitrary XCM
- Asset Hubs: allow Polkadot, Kusama and Ethereum assets across P<>K bridge ([polkadot-fellows/runtimes#421](https://github.com/polkadot-fellows/runtimes/pull/421)).
- Polkadot: Make the current inflation formula adjustable ([polkadot-fellows/runtimes#443](https://github.com/polkadot-fellows/runtimes/pull/443))


## JAM

- Graypaper got updated with **“ordered accumulation”**. JAM basics pattern of work, could be called a “JAM transaction”/work package. When they work their way through JAM and go through the accumulation stage, previously there was no ordering. If there was an implied ordering of work packages, there was no strong dependency. The assumption was that the accumulation code would need to buffer the data.
    - E.g. parachains have an ordering between blocks. Polkadot requires that, but JAM previously didn’t provide it. Ordered accumulation provides it now.
    - Second use case: JAM allows for decentralized, distributed data lake. This makes JAM semi-coherent. It allows pipelining and high asynchrony in the processing of work packages. But it also implies that there is no commitment to the outcome at any certain time, preventing that one work package is dependent on the outcome of another work package. It is possible to introduce a mapping, but in order for that to happen, the accumulation needs to happen in a certain order.
- 0.5 of the graypaper
- 64-bit PVM upcoming. Current version is based on a 32-bit RISC-V instruction set. Being switched out to a 64-bit. Should make operations more optimal on 64 bit hardware. Allows to get more data in and out of host calls. Doubles the number of registers.
- Iterating on the inner PVM formalization. Is crucial for implementing parachain PVF and the actor model.
- Coreplay - don’t implement actor model system directly. Rather suspend-resume computation model. Run any program within JAM in a near-native execution environment.
- PolkaJAM - Parity implementation. Working along well. On-chain logic is almost in line with Graypaper 0.4. The rest of the team is mostly working on the off-chain stuff: Networking protocol is being finalized. Doc detailing this is passed around. End of the year should have interoperability between implementations. Making headway on making the availability, beginning on the auditing protocol. Essentially Milestone 2. Hoping to have something sensible by the end of the year

### Question: Can parachains be sequenced together under this model?

Gavin: We have not embarked on this. Would be almost entirely in Cumulus. The problem with co-sequencing is you need to have full nodes that work very tightly tegether. This is fine but doesn’t scale. 400 blockchains can’t be co-sequenced by the same block author. It is a bit of a band-aid for why you have shards and you want to do sync composability. Works propably for a few high-value chains. It is pretty questionable to the degree it really scales. Maybe 3 chains.

If you are stuck in sharded mindset, where you have totally different projects that are pushing their own shard and you really want to provide some degree of synchronous composability, this is what you have to do. But it’s only an incremental improvement.

That is why we have Coreplay. It is designed to not have sharded state.

### Question: What is the status of Coreplay?

Ideation. We don’t have empirical analysis to see what can be done in Coreplay. We can start early next year. Two parts:

- Coreplay Runtime: the one bit that uses JAM directly; the service that sits on JAM
- Coreplay Scheduler: constraint-optimzation problem. will start with a simple version and then progressively optimize
- Co-scheduling guilds: they schedule actors together for synchronous composability

### Question: What is the status of the JAM Toaster?

The individual units are being assembled. Worked out the import process to Portugal. First batch of machines will be online around mid-November. Phase 1 of the toaster done by the end of the year.

## Bridges & XCM(Adrian)

[Bridges Roadmap](https://github.com/orgs/paritytech/projects/145/views/8)

### Polkadot-Kusama

Fee reduction for the P-K bridge is live

### XCM

- Live:
    - Fee estimation support: dry-run APIs, estimate fee APIs
- Next Release
    - ability to auto-swap. use XCM to pay any asset; if the chain has any asset-swapping mechanism configured. On AH it is pallet-conversion. On Hydration, it is the omnipool. If a chain has a mechanism, it can be plugged into the executor.
- Upcoming: Number of RFCs for XCMv5 approved and now being implemented
    - control how much fees you are willing to pay
    - complex asset transfer support - transfer assets across multiple hops, use multiple assets with multiple transfer properties.
    - empowered cross-chain origins
        - consolidation/aligning location/account derivation - idea: the same location would have the same derived account on any other chain
        - support permissionless origin aliases across chains. support for aliasing into another account. we need better support to fine-tune the relationship. once we have this, you can sign a tx on one chain and control the same signed account on multiple chains
        - allowing multi-hop asset transfers to preserve the original origin. so you can transfer assets and also transact in the same program
    - these together should allow many nice use cases
    - December in the SDK, system chains Jan/Feb
    - Parachains 2025-H1
    - 2025-H2 actual nice stuff in the eco

### Question: Are state reads related to this topic?

Conceptually similar. Bryan is working on XCQ. Also relates to view functions/intents/facade. The common pattern is to abstract the different implementations into a single interface.

## Async Backing & Elastic Scaling (Andrei)

- https://kusama.subsquare.io/referenda/455

Will see Elastic Scaling on Kusama as part of the Spammening. There will be a test parachain for Elastic Scaling on Kusama.

Auditing and Testing next.

January/February it should be ready to launch on Polkadot.

## Agile Coretime (Robert K, Donal)

- bulk: auto-renew → next runtime upgrade
- core sharing on Polkadot is done and should be ready for the next release
- https://polkadot.subsquare.io/referenda/1172

## Raised Topics

### RFC 0122 (Cisco)

Asset transfers can alias XCM origin on destination to original origin #122

[RFC 0122](https://github.com/polkadot-fellows/RFCs/pull/122): Asset transfers can alias XCM origin on destination to original origin. This RFC proposes that XCM programs generated by the `InitiateAssetTransfer` instruction shall have the option to carry over the original origin to the final destination. They shall do so internally by making use of `AliasOrigin` or `ClearOrigin` depending on the parameters given.

### RFC 0117 (Pablo)

The Unbrick Collective #117

https://github.com/polkadot-fellows/RFCs/pull/117

### Iterable Referenda Tracks #121 (Pablo)

- [RFC 0121](https://github.com/polkadot-fellows/RFCs/pull/121): Iterable Referenda Tracks. This RFC proposes introducing flexibility in the governance structure by enabling the referenda track list to be modified dynamically without requiring runtime upgrades.

### Ecosystem Test Environment

News from Bryan

1. Milestones 2-5 is completed. It will be great if people can give it a play and contribute more tests https://collectives.subsquare.io/fellowship/referenda/228
    
    https://matrix-client.matrix.org/_matrix/media/v3/thumbnail/matrix.org/NmDIfsGxlkVnWXCuvYLCfaVg?width=17&height=17&method=crop&allow_redirect=true
    
    https://matrix-client.matrix.org/_matrix/media/v3/thumbnail/web3.foundation/CNzoEQLsXivnINJJxKNqHVLY?width=17&height=17&method=crop&allow_redirect=true
    
2. A more direct link https://github.com/open-web3-stack/polkadot-ecosystem-tests/issues/45

## Fellowship Admin

### RFCs

- [RFC 0119](https://github.com/polkadot-fellows/RFCs/pull/119): Correct validator rewards. This RFC proposes that an off-chain approximation protocol assign rewards based on the approvals and availability of work done by validators.
- [RFC 0120](https://github.com/polkadot-fellows/RFCs/pull/120): Referenda Confirmation by Candle Mechanism. This RFC describes how to finalize and decide on a result for a poll via a mechanism similar to candle auctions, in an attempt to mitigate risks derived from unwanted behaviours around long decision periods.

## Q & A
### Voting in Nomination Pools

The feature is done. It is waiting to be integrated.