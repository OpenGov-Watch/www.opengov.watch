# 2025-04-15 Technical Fellowship OpenDev Call

Video: https://www.youtube.com/watch?v=wu6oYVcJmr4

Previous: https://forum.polkadot.network/t/2025-03-18-technical-fellowship-opendev-call/12960

| Theme | Outcome |
| --- | --- |
| **JAM** | `jam-top` live-metrics viewer and the "Swiss-army-knife" `jam` CLI published; first public JAM test-net binary + DIY launcher promised for the early-May **JAM0** meetup; CoreVM source to follow. Graypaper moves to v0.7. JAM-prize rules relaxed (PVM recompiler optional, light-client route added). |
| **500 ms "Basti-blocks"** | Multi-block-per-PoV authoring works locally; edge-cases (runtime-upgrade size, exec-time budgets) being ironed out. Implementation PRs targeted to finish within ~1 month; chain rollout expected after the July runtime train. |
| **Elastic Scaling** | Fellowship runtime that toggles Elastic Scaling cut this month; to be enabled on Kusama first, then Polkadot via OpenGov. Work continues on low-latency reliability & censorship-resistance, plus a fork-free parachain mode (build ₂). |
| **litep2p** | Default for ≈600 Kusama validators (-50 % CPU). New, more robust release. clean-ups. heads to Polkadot later Q2. |
| **Asset-Hub migration** | End-to-end CI dry-runs green; full Westend migration scheduled for April. Staking integration and fast-unbond queue (RFC-97) in review. Polkadot migration still tracking **Aug/Sept 2025** (Kusama a few weeks after schedule). |
| **Snowbridge v2** | Code & audit complete. Bridge-hub patch release **must land before Ethereum hardfork (7 May)**. Native ETH plus DOT/KSM & any AH-registered asset now bridgeable. Westend–Sepolia redeploy next; Polkadot main-net by end-Q2. Latency-cut work: 100-sig BLS sampling prototype and cross-chain-intent layer. |
| **XCM v5** | System-chain account *aliases* & user *authorizations* merged into SDK 25-03 (runtime rollout end-Q2). Weight-simplification draft PR open; origin-preserving examples and workshop material prepared. Contract-level XCM on Hub in development. |
| **BLS / Proof-of-Possession** | Validator PoP pallet + tx-extension PR passes tests; once merged it unblocks BLS validator keys and updated "Basti-blocks" RFC. |
| **Proof of Personhood** | `people_pallet`, DIM test pallet and fee-capped origin registration pallet published (PR #8164). Provides ring-signature aliases for dApps; UI demo still expected next month. |
| **Collator protocol revamp** | Network-wide persistent reputation system under implementation—first PRs merged—to harden parachains against DoS. |
| **PVM** | Instruction-level gas-cost benchmarking in progress; **Quake** successfully ported to pure PolkaVM as a performance test-bed. |
| **Async backing on AH** | Benchmarks show ×4 ref-time; PR to enable async backing on Asset-Hub advancing through review. |

## Gav (Rank 7)

- releasing JAM tooling:
    - jam-top: if a client adheres to JIP-2, they are able to use jam-top as process viewer
    - "main JAM tool" (REPL?) - swiss army knife CLI
    - getting JAM testnet binary release ready
    - corevm - to start developing, playing around with persistent services/executables
- Greypaper: moving to 0.7.
- Q: Status of client implementations?
    - hard to say, since they are working behind closed doors to get to independent implementations. A few on Milestone 1. A few might start looking into 2 and 3.
    - **JAM0 early May** will show more. Kick off a testnet and see how everything is working together
- JAM prize updates: trying to formalize as part of JAM prize rules "alternative hats"
    - Skipping recompiler: originally rules were very straightforward (all 5 milestones, recompiler). Recompiler is pretty hardcore and might not improve our decentralization all that much. The import logic and some of the authoring is helpful for network security, the PVM recompiler less so. Trying to introduce new rules to get the JAM prize. Proposal to allow teams to skip that part.
    - light clients: it would also be really helpful to have some light clients
- Q: does the REPL use an RPC?
    - It sets up a fake node/fake keys; super PolkaJAM specific.
    - There is another tool that works with RPC
- Q: you specified for M2 a trie-db to be implemented. We are currently re-merkelizing every block. Is it really necessary?
    - A: It might be for milestone 3 and 4. Might not be for 2. Depends on how fast it is. It is about behavior, not impl specifics

## Basti (Rank 6)

- Final push to get basti blocks done: discovering more rabbit holes: you have multiple blocks in a PoV and they share all the resources. but what if there is a runtime upgrade and it is 2MB it might not fit in one of the blocks. So you might want to have bigger blocks/more execution time? So lots of small details like that.

## Rank 4

### Robert

- working on reliability low latency blocks & censorship resistance
- Elastic Scaling: about to cut the Fellowship release to enable Elastic Scaling on Kusama and Polkadot. Can be activated via OpenGov ref.
- Looking to get NOMT into Substrate

### Kian

- getting staking system to run on Hub
- next month whole AH migration on Westend
- conversation with Blockdeep and Rust Bounty to implement RFC 97 - fast unbonding queue
    - talked with Gautam how to overlap with AH integration

## Rank 3

### Oliver

- AH Migration
- we have a CI chain that does a dry-run in Rust, once for Polkadot AH, and once for Westend AH; runs it on a snapshot. We still want more overlapping test coverage, chopsticks, node setup with Zombienet. Helping with merging testing stuff and checking everything is covered
- Once huge Kian staking merge request is merged we can go forward and integrate it

### Joe

- AH migration: mostly on track, staking to finish up
- Ethereum-compatibility for AH is mostly done. Alex is still working on the interface of pallet-revive and the other pallets; e.g. to write a smart contract, staking etc. Most of the contract execution stuff is done. Finishing work with Boundary, Harhat etc. Let all of this go through the audit queue. Should get everything done in time
- Kusama might be a couple weeks later than we hoped for, but should be on track of **August/September for Polkadot**
- Q: What’s the best time to start calling it Hub?
    - Would have preferred the narrative that Hub always has existed and the thing we are building now would be seen as a new iteration of the Hub. Plaza, AH, Hub are not synonymous
        - AH is a component in larger system. Relevant for technical discussion.
        - Hub is more like a concept. An abstraction on top of that. Relevant for BD/product discussion.
        - Plaza
    - My idea would be that Elastic Scaling etc should be Cloud 2.0, Smart contract stuff etc should be Hub 2.0

### Adrian

- AH migration work:
    - switch official reserve of DOT from relay to AH,
    - introduce concept of "checking account": track DOT from the "official chain"
- XCM
    - aliases:
        - more support through UX, when doing actions that span multiple chains
        - in the 2503 release. going into end of Q2
        - what it does: allow system chains to freely alias accounts between chains. Alice on one chain is Alice on another chain
        - would allow user in a dapp to just sign a tx and under the hood it works
    - authorizations
        - mechanism through which users can authorize certain user to alias to their account. explicit opt-in; allows user stories with pre-authorization of transactions
        - useful for Snowbridge V2 and you want to authorize some smart contract to act on your behalf
- Snowbridge V2
    - audit clean-up finishes Q2
    - was looking into pain points: high latency and high cost
        - bridging cost: v1 1-6 usd → with v2 80-90 cents
        - high latency: 20-30 minutes → for both directions the problems come from consensus.
            - Ethereum→Polkadot: Ethereum deterministic finality up to 17 minutes. idea is to have layers of offerings of options where you are happy with probabilistic finality; or saying i want it faster
            - Polkadot→Ethereum: beefy validation, multi-round protocol, challenging random validators to provide a signature. takes 20 minutes. W3F might help
                - One option is to use: BEEFY BLS. Will take 6 months to one year. based on a paper that Alistair… wrote, looking at Fiat-Shamir optimization
                - In the meantime: Sample 100 signatures; should be economically harder to attack than mining Bitcoin. could be "instant" → with the same block
- Q: what happens if the actual bridging Ethereum→Polkadot fails?
    - might be useful for communication channels. Was talking
    - was talking with Snowbridge team about cross-chain intents. Relying on bridge for settlement.

### Jan Bujak

- first time on call. Intro: working on PVM
- currently working on gas cost model for PVM.
- Q: do you think it would support floats?
    - in theory yes, but I don’t see a good use case and it would increase the complexity through the roof.
    - in general open, but would need to see a good use case
- Q: did you do Doom-on-JAM?
    - Yes. And I recently ported Quake. Runs on pure PolkaVM

## Rank 2

### Muharem

- AH migration: Working on benchmarks
- Async backing for AssetHub. Helps a lot: Increase ref time by 4

### Sebastian

- fork-free on parachains under Elastic Scaling. build two blocks behind the tip, basically zero forks. trade-off: XCM latency increases, PoV space decreases by about 40-50kb when having 1k validators
- Q: Does it increase finality latency for the relay?
    - No

## Rank 1

### Clara

- Snowbridge V2
    - audit issues mainly completed
    - backport to 2503
- tested Ethereum Electra hardfork on Westend a month ago
    - went smoothly
    - important to get Snowbridge runtime upgrade out before the Ethereum hardfork
    - https://github.com/polkadot-fellows/runtimes/pull/675
- Snowbridge update
    - went live with native ETH support last few weeks, so far only wETH, now also native ETH. Hydration is busy adding it as well. that is a big win for us
    - launched Polkadot-native assets on Ethereum, support DOT and KSM transfers AH→Ethereum, and any asset already registered on AH. We suspect there might be better way(?) for parachains to transfer assets to AH and then Ethereum, but the base functionality is there
    - working on sending tokens from Ethereum to Kusama using the Pica(?) bridge. Opened ref to register all ERC-20s on Polkadot on Kusama as well. Once that is live, we can build a UI for it.
    - Integrations: Integrated with Hydration, Moonbeam, Bifrost

### Alin

- collator protocol revamp
    - implemented a persistent reputation system. the current system has a few drawbacks; one of them being not persistent. another one that they are local to the validator that interacted with the collator and not network-wide
    - doing some PoCs locally, some design work, started creating some PRs, in the middle of the implementation
    - Q: what is the intention?
        - it is a way of making the parachains more resilient to DOS attacks

### Daniel

- XCM weight simplification:
    - finished rough PR
    - XCM payment API converts weight to fee
    - draft PR introduces many changes, a checkpoint right now might help us a lot. written a workaround on that
- Diego provided feedback on RP re work on new XCM types and related API to create asset adapters

### Cisco

- Elastic Scaling:
    - working on the release,
    - tests were failing XCM related and identity stuff
    - now CI is running
- working on XCM in smart contracts on the Hub
- gave lectures in PBA on XCM, opportunity to create exercises for workshop how to use XCM v5
    - do a cross-chain transfer, swap
    - origin-preserving cross-chain transfer
    - integrating those into the formal docs with snippets

### Someone Unknown

- On a secret mission
- Official version:
    - working on tps benchmarks
    - going to implement RFC 4 (https://github.com/polkadot-fellows/RFCs/pull/4?)
        - increase size of contract, amount of memory available to contract
- Q: do you know what the gas limit will be on smart contracts?
    - No
    - Jan Bujak: rn no one will know this. It will be fairly unoptimized in the beginning and we will get it down as time goes. The most straightforward improvement. Rn contracts are run in an interpreter. This and some other optimizations are already low-hanging.

### Seyed

- Proof-of-Possession
    - it is a proof of a validator to the chain that you have a private key. critical for BLS
    - almost beyond the finish line
- after that: update Bastis RFC
    - validator can produce … key
- Snark VRF
    - used in proof of personhood voting. people collective want to vote secretly: they use a VRF, in a Snark it shows a person is part of a ring, bot not whom. I was working on an improved version to use on a system that don’t have bandersnatch as native verification. You can do that on Polkadot and Kusama, bot Ethereum doesn’t have it. handed that to Sergey.
- Generating succinct merkle proof for increasing the amount of transactions
    - e.g. a parachain moves money from one account to another, it has to give a merkle proof to the validator. But they are becoming big when there is a lot of accounts. So working on succinct merkle proofs now. Lots of trial and error. Submitted very early version/PoC
- Q on anonymous voting? adding the primitives? or would it be integrated into pallets?

### Pablo

- updating runtime to latest stable.
    - waiting for integration tests to be fixed and a couple of benchmarks to finish. next week to couple of weeks we will release the new version with the 2412 included
    - after that 2503 or 2506
- assets vesting
    - allow accounts to do vested transfers for all assets, e.g. USDT, USDC

### Guillaume

- PoP
    - PR 8164 - Three pallets. Not proof-of-personhood, but pallets to be used once proof-of-personhood has landed.
        1. people_pallet - Register your Bandersnatch keys. You can put them in a ring. With no context (32 byte identifier) every bandersnatch key has a unique alias. With the ring ??? and the alias you can make a signature for this alias in this context. so you can interact in the context as one person of the group without saying which person you are. primitives data transaction extension: origins, transactions (to dispatch calls to this origin)
        2. pallet for the testnet. dummy DIM impl. just prove people as individuals
        3. origin-restriction - gives max allowance to use some fee. can dispatch calls. the fee of the call will be deducted from this allowance. you have a refill right. every block you have some allowance, so you can’t spam the chain
    - this is the work the application will use
    - also worked on impl of DIMs

### Alex

- first call! working on network stack, username: lexnv
- last few months worked on new litep2p release
- prep to enable litep2p by default on Polkadot
