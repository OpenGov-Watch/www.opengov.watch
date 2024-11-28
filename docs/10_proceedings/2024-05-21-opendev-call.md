# 2023-05-21 Technical Fellowship OpenDev Call

- Video: https://www.youtube.com/watch?v=War1weBu7yU
- Forum: https://forum.polkadot.network/t/2024-05-21-technical-fellowship-opendev-call/8264

# Fellowship

- New Members
    - [clangenb to rank 1](https://collectives.subsquare.io/fellowship/referenda/94)
    - [pandres95 to rank 1](https://collectives.subsquare.io/fellowship/referenda/105)
- [New process for submitting evidence](https://github.com/polkadot-fellows/Evidences) for Fellowship members by Basti
    - Members are also now submitting first requests for promotions. The first one is to [promote Oliver (ggwpez) to rank 3](https://collectives.subsquare.io/fellowship/referenda/115)
    - Promotions for higher ranks will be an in-person event, in August or September
- Accepted RFCs
    - [RFC 48 - Generate ownership proof for SessionKeys](https://github.com/polkadot-fellows/RFCs/pull/48)
        - This will ensure that SessionKeys submission cannot be censored
- The Fellowship Secretary was accepted. The Fellowship is now also getting to work to build a [secretary collective](https://github.com/polkadot-fellows/help-center/issues/10)
- Salaries can be tracked here: https://collectives.subsquare.io/fellowship/salary

# Celebrations

## Coretime - Andrei

- The first sale just happened on Kusama. The Fellowship sees a few minor issues to be improved: Andrei reports PR for changing pricing, missing impl for revenue information, fix some on-demand events
- No information on the call for on-demand coretime sales. Donal can answer about on-demand

## People Chain - Joe

Launched on Kusama. Deposits are now ~0.06 KSM. Identities no longer sit on the relay chain. UIs have to adapt and show identities from the new chain.

## BridgeHub - Adrian

### Snowbridge

- [Launched](https://polkadot.subsquare.io/referenda/680)
- [but got stuck](https://github.com/polkadot-fellows/runtimes/pull/313). The Polkadot side didn’t understand a message from the Ethereum side and stopped as a safety precaution.
- Fix is part of 1.2.4
- Example UI: https://rococo-app.snowbridge.network/

### P\<\>K

- [Launched](https://forum.polkadot.network/t/polkadot-kusama-bridge/2971/25?u=alice_und_bob)
- [but got stuck](https://forum.polkadot.network/t/polkadot-kusama-bridge/2971/45?u=alice_und_bob). An unexpected edge case in the collator set change of Kusama has led Polkadot to no longer accept messages.
- Fix was part of 1.2.2
- Adrian also mentioned the [Asset transfer API](https://github.com/paritytech/asset-transfer-api), saying the typescript wrappers are very useful

## Async Backing

- [Async backing is live](https://polkadot.subsquare.io/referenda/688)
    - Discussing the rollout of async backing to system chains, Someone gave a briefing, mentioning that it is coming to People Chain first. ([Github](https://github.com/polkadot-fellows/runtimes/pull/266#issuecomment-2071906386))

# Roadmap

## Latest Release: 1.2.4 - Joe

- [Version 1.2.4 got tagged](https://github.com/polkadot-fellows/runtimes/issues/288) and is submitted to Kusama for approval
- [Ambassador Program](https://www.google.com/url?q=https://github.com/polkadot-fellows/runtimes/pull/291&sa=D&source=editors&ust=1716381183055319&usg=AOvVaw0S7Be7ATjXXQ6JpznPb1mT) is part of the release (only for Polkadot)
- [Drop ED Requirement for Transaction Payment with Exchangeable Asset #310](https://github.com/polkadot-fellows/runtimes/pull/310) allows users to transfer the entire balance of an asset (e.g. USDT) to another account. This was for example requested by Binance.
- [kusama chains: allow arbitrary XCM execution #261](https://github.com/polkadot-fellows/runtimes/pull/261)
    - e.g. to make an asset transfer that is chain-agnostic
    - one example is to make an XCM currency transfer, even within a chain
- [Allow Sending XCM messages using a Signed origin on Kusama #290](https://github.com/polkadot-fellows/runtimes/pull/290)
    - this now allows anyone to run an XCM program, as requested by [Kreivo](https://forum.polkadot.network/t/opengov-for-everyone-1-ksm-1-dao/7781)
- While discussing XCM, we got on a tangent about XCQ
    - [It now has a proof-of-concept built on PolkaVM](https://forum.polkadot.network/t/cross-consensus-query-language-xcq/7583/10)
    - Gavin: PolkaVM is soon in a state where it could reasonably be deployed on Kusama
- And another tangent: There is a [proposal on Kusama to request 10m DOT from Polkadot](https://kusama.subsquare.io/referenda/399)
    - Web3 Foundation should give out a communication at some point to explain its position of giving out 1% of the DOT genesis supply to Kusama.

## Next version: 1.2.5 - Basti, Joe

- will contain support for the new universal Ledger app
- before Decoded hopefully
- Coretime might be 1.3

## Stabilizing Polkadot - Oliver, Kian

- Omni-Node. Currently [gathering feedback](https://forum.polkadot.network/t/polkadot-parachain-omni-node-gathering-ideas-and-feedback/7823)
- [Making the life of parachain devs easier with a new template](https://github.com/paritytech/polkadot-sdk/pull/4369)

## Wish for Change Track Discussion - Gavin

- Was recently introduced and is already maxed out with 10/10 proposals on the WFC track
- Accepted proposals
    - [EVM Collective](https://polkadot.subsquare.io/referenda/704)
    - [Implement Optimistic Project Funding](https://polkadot.subsquare.io/referenda/712)
    - [Reducing duration of spend period](https://polkadot.subsquare.io/referenda/705)
- Debate
    - We discussed how WFC fits into the overall process of Polkadot
    - What mandate does the Fellowship have? Does it have to pick it up?
        - “There is no protocol in place, to get a WFC turned into reality”
        - From the [Fellowship manifesto](file:///C:/Users/tommi/Downloads/manifesto.pdf): “While members may engage in any number of activities beyond immediate technical work (designing, programming, debugging), the goal of the organisation is nonetheless that of building technical knowledge critical for the continued existence and evolution of the network protocol itself.”
        - The Fellowship is self-sovereign, but acts in the interest of the network, and thus might support the implementation of such wishes.
        - The Fellowship however is not mandated to drop every other work if a WFC is AYEd.
        - Anyone can submit a PR to get a feature into Polkadot and if it is agreed by a WFC, the Fellowship will at a minimum not block it (except if it is dangerous for the network)
    - On proposals that are unspecific
        - Proposals might be so unspecific that they cannot be implemented.
        - Possible reactions might be
            - to respond that it is not possible to implement it,
            - to implement and interpret where possible
            - to start an RFC process
            - let other parties implement it
    - The Fellowship might need a forum to respond to WFC requests
    - In summary, there is a pipeline forming from potentially very abstract wishes via WFC, following discussions, RFCs, and then the actual implementation

# Discussions

## RFC 89 - Kian

- [Flexible Inflation #89](https://github.com/polkadot-fellows/RFCs/pull/89)
- Mechanism to allow Governance to configure inflation, also improves the flexibility in the code
- It’s unopinionated about what the inflation should be, and rather leaves it up to parameterization
- might consider fixed income for Treasury or Collectives/Subtreasuries
- Kian is looking for further feedback. Because it is very opinionated, so far there hasn’t been any pushback.

## OnPollStatusChange for pallet-referanda - Pablo

- https://github.com/paritytech/polkadot-sdk/issues/4227
- The idea is to make pallets aware of state changes
- Gavin offered two criticisms
    - It won’t work in async environments and with XCM.
    - The hook implementations could be critical for weights. If the hook is very heavy, the weight of the extrinsic would be different from the execution
- Pablo asked what a good way to achieve the intention would be, to which Gavin responded, that `Tasks` are the solution that has been devised for such situations.

## Define and implement Hold for Assets - Pablo

- https://github.com/paritytech/polkadot-sdk/issues/4315
- The idea is to allow inspection of the fungibles::holds traits
- Kian responded that there is definitions in the new currency system and he will send them to Pablo

## Invitation to join the Polkadot Blockchain Academy - Nikos

- [https://page.polkadot.academy/pba-faculty-application](https://page.polkadot.academy/pba-faculty-application?hs_preview=GtGJHBHU-167474363287)
- The PBA is expanding its faculty and will hold remote academies.
- There is an open invitation to join the PBA as contributor

# News

## Polkadot Tooling Collective (PoToC) - Oliver

- currently making a list of projects to support
- would maintain these projects, e.g. PAPI, Polkadot.js, Dev tooling
- overlap between the Fellowship and PoToc would be marginal

## Elastic Scaling - Andrei

- First iteration will be an MVP
    - with a few constraints
        - 3 cores (so, more like fixed scaling for now)
        - collator set not open
    - timeline:
        - implemented for the relay chain
        - awaiting audit
        - todo: documentation, cumulus integration
        - rollout: “on testnets soon” → first part of June
- elasticity should come in the second half of the year

## JAM

- spec
    - recently it occurred to Gavin that we could take what happens in Extrinsic IO and repurpose it into two separate components: imports and exports for cores
        - allows doubling the bandwidth for use case of placing continuations in each core
    - pre-release of the new spec released a few days ago. Will now get more formalized over the next month
    - in the Graypaper repo
- dev is ongoing
    - good interest from new teams to make new impls
    - first implementation in Rust by the JAM team is continuing
    - hoping to have a testnet by decoded
- JAM lecturing tour
    - Buenos Aires, Stanford done. more to come in Europe and Asia over the following weeks
- “pretty clear idea about node requirements”
    - storage throughput, load
    - they look doable, but high
- “I tweaked some of the numbers a bit”
    - 800k/s for bandwidth into the (same as DOT)
    - moved to 2.5MB/s. that was maybe too high. probably gonna settle at around 2MB/s”
- next weeks
    - more work on the availability system
    - PolkaVM sub-instances
    - getting the testnet going, derisking on uncertainties

# Q&A

## EVM on Coretime Chain?

- Phil from Lastic asked about having EVM on the Coretime chain. Is this possible?
- Gavin: Not against EVM. Rob Habermaier was quite in favor. If Lastic are keen on making a PR, I don’t see any problem

## Wen Voting in Nomination Pools?

- Ankan: Got approval for the PR last week Friday. Will be merged tomorrow. Audit scheduled and should happen in the next 3 weeks. Next to next release in Kusama (I think was implied to be 1.2.5)