# 2025-01-21 Technical Fellowship OpenDev Call
- Video: https://www.youtube.com/watch?v=xyHeXI_5SX8
- Previous: https://forum.polkadot.network/t/2024-12-17-technical-fellowship-opendev-call/11649

The format was changed and we now go through all call participants, rank top to bottom, and then summarize at the end.

## Summary

- 1.4 coming in jan
    - voting in nom pools → Kusama
- Hub
    - moving staking, balances, vesting → Westend
    - contracts still on track Q2 → Kusama, Q3 → Polkadot
- performance
    - Elastic Scaling → Q2 on Polkadot
    - multiple blocks in the same block
    - 0.5s latency security → getting faster creates troublesome forks
        - different security assumptions for a like, a coke
    - PolkaVM as a target for parachains
- interop
    - XCMv5
        - aliasing opt-in
        - USDT only transfers
    - Pure Proxies
- Testing
    - harness
    - ecosystem tests, still working after runtime upgrade
- JAM

## Gavin (Rank 7):

- JAM
    - released JAM Graypaper revision with just a few corrections
    - next big thing is 0.5 series release. feature completeness of the JAM protocol
    - one major alteration, then it is done: avoid sending too much data into the core, to refine, instead allow data to be fetched by the logic, avoid having to allocate too much memory upfront → gas efficiency; we are expecting that we want to tie gas usage to memory allocation, keep memory as small as possible
    - after that: 0.6 - finesse to the Graypaper, maybe start looking into performance benchmarking, Parity JAM implementation and maybe with impls from others
    - Toaster is here
        - 5 racks atm, building the Toaster. each one will initially host 8 JAM nodes, or 12? → 60 nodes; ultimately 85 or 86 machines; 40 more on our ways;
        - place where the toaster lives under the Polkadot Palace pool is under heavy construction, finished quite soon
        - how warm is the pool above the Toaster getting? Only above the Jacuzi. It could get uncomfortably warm. We have to test I guess
    - late Feb early March → major scale tests with hopefully more than one impl. starting to invite some of the other JAM teams to give updates on their impl. see how far the work is going
- doing some other work on personhood, prbl next time

## Rank 6

### Basti:

- 500ms blocks: I hate forks now, when you look at blocks and you have to decide which relay chain you want to build
- also: remote proxies
    - Problem: Have a Pure Proxy on one chain and send money to the some address on another chain
    - There is a recovery option via OpenGov, but you need lot of DOT to start a proposal, not sustainable
    - idea is to replicate proxies
        - small pallet that reads, you can give it a proof that a proxy exists on the relay chain, I have written a small blog post
    - then you can use them from people chain or other chains
    - PR from Muharem open, replicating proxies
    - also an escape hatch
    - Proxy on Hydration? I doubt we would allow to replicate a proxy on AH
    - suggestion: by default put a proxy on one place (e.g. people chain) and then replicate from there
- Joe: if you create a PP, it still stays on the place, it’s not on each chain. people chain can’t know about the specifics of other chains
    - Basti: the moment you accept the proof is correct, you could just write the data to your chain. and then it is essentially replicated.

## Rank 4

### Kian

- staking of Polkadot to become compatible with Parachains, with Gonzalo. expect to work on this next month too
- 1.4 - nomination pools to Kusama! shoutout to Ankan

### Robert K

- working on latency
    - looking into low latency parachains and messaging
        - what can give full relay chain guarantees?
    - forks mess with low latency
    - target is 0.5s blocks; looking how we can have security guarantees
- Basti: block time is not important. as long as the block is a descendent…
    - Rob K: it could be a fork that never gets submitted and you get totally fooled
    - Basti: it depends on how valuable the tx is. attacking the chain for 2 USD? I don’t think so.
    - Rob K: value at stake on apps could be much higher

## Rank 3

### Oliver

- AssetHub migration, migrating pallets, vesting setup
- networking impl in JAM node, was at JAM impl call last week
- umbrella crate stable 2412 → discussion around semver

### Joe

- Facade. a bit delayed
- Contracts
    - Solidity compiler is working in the browser
    - get requirements to integrate Etherscan, oracles, the graph
    - some other testing, libs compiler
    - contracts on Westend, pallet-revive
    - still on track

### Andrei

- Launching Elastic Scaling, reviewing PRs
- testing on Westend, upgrade from 6s to 2s block times
    - on Westend, coding completed, expect on Polkadot in Q2, as soon as March Stable release on Node happens, sooner on Kusama
    - new v2 candidate descriptors
    - tx propagation takes time
    - need 1.4.0 release, new collator + patch release, async backing params
- deprecation runtime api
- improve test harness, tests easier to write and maintain

### Adrian - Rank 3

- XCMv5 integration
    - enacting on Westend
    - security audit nearing completion
    - arbitrary origin aliases
        - use some account ID over XCM to control the equivalent key account on some other chain
        - previously, you would have derived accounts
        - with this change, you can opt-in to authorize certain other locations
        - example: go to Hydration with private key, and request that another account that a friend controls is authorized to send on behalf of my account
        - it can also have an optional expiry
        - worked out the runtime APIs and tooling to be able to see which aliases are authorized etc.
        - Oliver: does the arbitrary origin alias need a new XCM version?
            - Adrian: yes it is a breaking change from the point of the view of the configuration. So no patch release, it has to go in the new stable SDK version
        - Basti: can I whitelist one special contract?
            - yes
        - Tommi: so we could have contracts that control contracts on other chains?
            - yes
- also helping new contributors on their work with ecosystem tests

## Rank 2

### Skunert

- last touches to stabilize elastic scaling
    - will go live on Polkadot later this quarter, Cumulus needs to be ready too.
    - last year implemented slot-based collator for lower block times. works reasonable well. was used in the spammening
    - for stability, wants to have a few fixes
        - multiple blocks in the same slot
        - some parachain internals were making assumptions that are no longer true
- other folks from the sdk team
    - litep2p - already have ~100 vals on Kusama using it
        - highlighted some issues, also from the interaction of libp2p and litep2p
        - 50% less CPU usage
    - fork aware tx pool Michael, Julian
        - looking good, very well tested
        - currently hidden behind extra flag

## Rank 1

### Pablo

- working on assets
    - recently getting familiar with asset conversion
- working with dani on governance
- collectives. have an RFC waiting for more feedback
- XCM bridges, helping with runtime upgrades - wants to expand on that
- work on stable2409 → runtime

### Donal

- AH migration
    - progressing well. open call to fellowship members that want to get involved: there is PRs to pick up, also testing
    - deploy on Westend next couple weeks
- coretime
    - mentoring ppl adding adding sudo(?) apps to coretime pallets
    - help folks manage calls on westend

### George

- proof of personhood - can’t talk a lot. good progress, talk soon
- small fix in collator selection pallet, qol improvement
    - might propose an RFC for this next

### Someone Unknown

- 10MB proofs per validator.
    - current PoV size limit is 5MB and could become a bottleneck in the near future
    - requires lot of testing
    - PR good to go, going into the next release
- PolkaVM integration for parachain runtimes.
    - we want to allow them to have PolkaVM as execution target
    - created PoC, pushing to production stage
    - works in parallel with WASM connected to the same relay chain, can even interoperate via HRMP

### Alin Dima

- elastic scaling
    - bug fixes
    - guides updates for parachain teams to use elastic scaling with rfc 103, allowing them to have untrustred collators
        - untrusted collators could mess with your cores: sending same collation to all assigned cores
    - 12 core elastic scaling, should be working; creates mini-slots within regular blocks. alternative to elastic scaling
    - removing async backing params

### Jesse Chejieh

- working on AssetHub migrations
- organizing a study group of devs that want to learn more about blockchain dev on Polkadot

### Cisco

- testing XCMv5 on Westend
- dry-run API payment API improvements
- runtime 1.4 release
    - USDT only transfers on AH
- guides, DOT as fee token

## Rank 0.5

### Daniel Olano

- no longer rank 1, outgoing, gave a goodbye message
- will continue his focus on Kusama. Will be pushing for a vision of Kusama to attract 99% of projects in the eco to start there
- Kreivo parachain that is like a common good parachain, focuses on DAOs, Governance
- last fellowship meeting there was opposition that Kusama should be a focus of the Fellowship, Kusama is out of scope
- we have a FRAME repo where we push stuff that isn’t part of the Polkadot SDK. e.g. extension to referenda pallet, payment, membership, use passkeys
- rn working on embedded operating system in WASM. it can be used for wallets. proves to the parachain that something happened in a ref. could come as a service to JAM. dev simple SDK applications
- might return in the future
