# 2024-06-25 Technical Fellowship OpenDev Call

- Video: https://www.youtube.com/live/MU7tCyhBU7g?si=Ya_ATMBdMOGvJEji
- Forum: https://forum.polkadot.network/t/2024-06-25-technical-fellowship-opendev-call/8890

# Fellowship

## Members

- There were some minor practical issues during this membership cycle. Some members were proposed to be promoted, but promotions didn’t go through in time and since no parallel referendum to retain them in rank was submitted, some were demoted. This is why you will see promotions to ranks that members already were on.
- Approved
    - Induction: Ross Bulat
    - Retained Rank 1: Jesse
    - Retained Rank 2: Muharem, Davide
    - Promoted Rank 1: Cisco, Gupnik, bkontur
    - Promoted Rank 2: Sebastian, Adrian
    - Promoted Rank 3: Oliver
- Ongoing
    - Promote Rank 1: Michal, Dónal, Clara, Thibaut, gepestana, nikos, Ross Bulat & Szego (failed to retain due to a bug, gets re-promoted)
    - Promote Rank 2: brenzi
    - Promote Rank 3: Joe, Jan
    - Retain Rank 4: kianenigma, xlc
    - Promote Rank 4: eskimor
    - [Promote Rank 7: Gavin Wood](https://polkadot.subsquare.io/referenda/887)

## Fellowship Referenda

Approved

- [Move 5m DOT to AssetHub](https://polkadot.polkassembly.io/referenda/741)
- [Ratify the role of the Fellowship as Judge of the JAM Implementers Prize](https://collectives.subsquare.io/fellowship/referenda/117)
- [1.2.5 upgrade](https://collectives.subsquare.io/fellowship/referenda/127)
    - Unstuck bridges

Ongoing

- [1.2.6 upgrade](https://collectives.subsquare.io/fellowship/referenda/128)
- [RFC 26 Sassafras Consensus](https://github.com/polkadot-fellows/RFCs/pull/26)
- [Enable approval voting protocol improvements](https://polkadot.polkassembly.io/referenda/888)
- [Make WETH sufficient](https://polkadot.subsquare.io/referenda/890)
- [Update max HRMP channels](https://polkadot.subsquare.io/referenda/896) (Joe)

# Celebrations

## Snowbridge

- Snowbridge is active, the first assets WETH and MYTH have been registered.
- ongoing work: permissionless lanes, reducing costs. Sudo is still with the snowbridge team but will be removed shortly
- Q: Can OpenGov call smart contracts on Ethereum? Yes, in the future

## Polkadot\<\>Kusama Bridge

- also live

## Latest Releases

### Accepted: 1.2.5 - Metadata (Basti)

- https://github.com/polkadot-fellows/runtimes/issues/316

Introduces new metadata that allows the universal ledger app

### Currently Voting: 1.2.6 - People Chain (Joe)

- https://github.com/polkadot-fellows/runtimes/issues/344

This release freezes identity registrations to deploy the new people chain

# Roadmap

## Next versions:

### 1.2.7 People Chain

- https://github.com/polkadot-fellows/runtimes/releases/tag/v1.2.7

This will unlock identity registrations on the new people chain

### 1.3.0

- https://github.com/polkadot-fellows/runtimes/issues/186
- Focus is likely coretime for Polkadot - targeting August
    - as a backup, if the release doesn’t go live in time, new auctions are scheduled
- Adds vesting to AH
- 6s block time for people chain

## Ongoing Epics

### EVM-like smart contracts on AssetHub

- Ongoing WFC [Ref 885](https://polkadot.subsquare.io/referenda/885) vote to ratify development for EVM-like smart contracts on AssetHub
- Alex: don’t want to run pallet_evm; want it to run on PolkaVM. Currently working to recompile YUL to PolkadVM. targeting the end of the year
- On the [Plaza plan](https://x.com/rphmeier/status/1802809037186089243): Yes. The basis is smart contracts on AssetHub first

### Stabilizing Polkadot (Oliver, Kian)

- New Release Process after the next SDK 1.14 release
- getting runtime to SDK 1.13
- OmniNode - should encourage new teams, especially those that want to use coretime to use the new template
- Currently focusing on guides, docs
- Working with OpenZeppelin, Tanssi to get them onboard
- New Umbrella Crate for Polkadot. This should make upgrading to new versions much easier for downstream devs

## Elastic Scaling (Andrei)

- slot-based collator implementation is still under review, expected to be included in the next Cumulus release
- in the meantime started working to remove some of the MVP limitations;
    - using an open collator set, two implementation options to be looked at - hacky vs. clean version - currently in discussion on Github
    - single-collator support for maximum throughput: looking to see what is possible. how much execution time is possible with beefier collator specs. in zombienet experiments: parachains will waste slots by forking if import duration + authorship duration + network overhead is greater than parachain slot time. 2 cores with 3 second slot time, block length/POV of 5mb, authorship and import time should be 1.3 seconds → 2.6 of execution time; with an upper bound of 400ms networking overhead
- next step: public testnet sometime in July
- Kusama release should be based on Polkadot 1.9

## XCMP (Robert)

- off-chain XCMP - started looking into it at a high level

## XCM v5 (Adrian)

- want to have accurate fee estimation for different assets on different chains
- execution fees vs. network fees
    - execution fees have already good estimation
    - working on a new construction to better estimate network fees
- cross-chain transfer improvements
- recently introduced allowing users to submit any XCM program on the system chains
- asset claiming/trapping - RFC improvement approved - set asset claimer instruction allows programs to set a location for an authorized claimer in case assets do get claimed
    - well remove the need to make referenda if assets get trapped
- XCM moving to the Fellowship org in Github and will become part of the RFC process

# WFC Referenda

## Optimistic Project Funding

- https://polkadot.subsquare.io/referenda/712
- Kian: Ben reached out and I connected him with a few PBA5 students - optimistic that someone will pick it up

# Discussions

## Existential Deposit

Discussed the approach to how to think about ED.

- Gavin:
    - Why do we have ED?
        - Each account makes state access in the merkle tree slower.
        - Estimated that if a substantial portion of DOT is used to create account, ED would have to be ~100 USD to prevent it. Not very plausible, so with reduced assumptions, ED is assumed to be 1 USD.
        - The risk of state bloat is not a higher cost for storage, but rather that blocks take too long to import, or a chain gets DOSed
        - Needed for security
    - Chains that could hide this
        - Ethereum: incredibly low gas limits. Will restrict the amount of computing that can be done on the chain (bottleneck shifts to compute instead of storage), “if it takes longer because the db is so slow, that is fine because we’re not doing very much”
        - Solana: have 256GB for every validator - any node that has any chance of syncing and stay in sync has to be a small supercomputer
        - we don’t do that and have to be responsible
- Adrian: The only chance to get around ED is to improve the tech underneath, e.g. Rob’s NOMT
- Gav: yes, can improve the underlying to get a magnification. the most sensible thing to do is move everything off the relay chain; other parachains are isolated from the problem

## Transfer Fees

Can USDT/USDC transfer fees on AssetHub to below 1 cent?

Joe: if the chain is not too much used, sure.

If you are from the fellowship and you read this, please reach out to me and let me know what can be done to get USDT/USDC fees on AssetHub below one cent. A lot of people would appreciate it.

## Fellowship Treasury

- Sub-Treasury
    - https://polkadot.polkassembly.io/referenda/832, requesting 2m DOT

What is the Fellowship planning to spend it on?

No general answer could be found in a short discussion. Basti suggested Fellowship UI improvements. 

## Flexible Inflation (Kian)

- https://github.com/polkadot-fellows/RFCs/pull/89/files

- discussion still ongoing

- Ties into the bigger economics discussion:

- https://forum.polkadot.network/t/polkadots-economics-tools-to-shape-the-forseeable-future/8708/6

## Unbonding Queue (Kian)

- currently in discussion - https://x.com/GehrleinJonas/status/1803454016288071975
- no development yet
- technically/crypto economically not controversial
- RFC 92

## Voting in Nomination Pools (Kian, Ankan, Oliver)

- on the testnet. currently addressing issues
- “in a couple of minor releases”
- part of SDK 1.13

## Head Ambassadors

- full Fellowship voting track atm. likely initial surge. Joe argues that it shouldn’t be increased because the attention of humans is limited
- pallet not configured yet
    - Muharem: HA can set the params

## JAM

- JAM toaster
    - https://x.com/gavofyork/status/1803263668475580567
    - finalizing payment “tomorrow” - get the first machine within a week
    - the environment won’t be ready until late September → “full toaster built in September”, third done within phase 1
- Graypaper lecturing tour
    - concluded first stage, 3 in Asia, 2 in America, 1 in Europe.
    - there will be a second tour once the academic year begins; should be closer to 1.0 Graypaper by then
    - PBA 6.5 hour lecture got through 5-6 pages of the Graypaper
    - collected enough video for 2/3 of what we want. Onchain business logic
    - Other third at Decoded, hopefully open session, tbd
- Grapaper & reference implementation
    - 0.2.2 is on its way, close to complete protocol
    - most recent addition: statistics, needed for rewards
    - [Readme](https://github.com/gavofyork/graypaper) is up to date with everything that is needed for 1.0
        - most important atm networking, no spec at all,
    - biggest change in the last month was to the availability system
        - like has to be re-implemented
    - working on inner PVM invocation. once this is done, can experiment with parachain service, coreplay
    - moving PVM to 64-bit
- Testnet is coming along
    - Safrole STF is merged → [Repo](https://github.com/w3f/jamtestvectors/tree/master)
    - 2 more PRs. one for merkle trie, one for PVM
    - looking to merge Graypaper changes into research implementation
- JAM prize
    - promising communications from teams interested to implement
    - 5-10 teams interested
    - indicates prize/award in the right order of magnitude
    - semi-announced in Prague, announced in lectures, will be continuing to announce specifics
    - still figuring out the vesting schedule
- auto-promotion for milestone implementation
    - For each milestone implemented, there should be one person auto-promoted to rank 3 and another person to rank 2

# Polkadot Palace

- on-chain administered hub/retreat/center
- waiting for architecture to be final before giving a presentation
- should host 75 people
    - 25 of which will be in a Tokio-style accommodation
    - 25 high-end
    - 25 okayish
- co-working facilities
- wellness & health facilities
- presentation area / night-club
- catering, small kitchens + Hogwarts style eating area
- lower ranks have requirements for joining, higher ranks will have fewer requirements
- the idea is for people of various ranks in the fellowship to make a reservation and come, maybe have lockers; have on-chain integration for reservations