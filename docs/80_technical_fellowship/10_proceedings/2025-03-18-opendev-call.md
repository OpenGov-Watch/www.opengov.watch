# 2025-03-18 Technical Fellowship OpenDev Call

## Summary

### Progress

| Theme | Outcome |
| --- | --- |
| **JAM milestone 1 shipped** | Graypaper 0.6.4 ("activity-statistics") merged; *jamtop* live-metrics tool built-in. First public binary and "DIY test-net" launcher by the April call; CoreVM to be open-sourced afterwards. |
| **500 ms "Basti-blocks"** | New author-model: one collator writes multiple successive 500 ms blocks with a single aggregated PoV proof. Latency ↓, fork-rate ↓; no TPS gain unless combined with Elastic Scaling. Sebastian and Basti working on fork-resistant improvements. |
| **Elastic Scaling rollout** | Westend upgrade in April; Polkadot Q2. |
| **litep2p** | Default on Kusama (≈600 validators, ~50 % CPU drop); slated for Polkadot later in Q2. |
| **Asset-Hub migration** | runtime **AssetHub-Next** live on Westend; Westend full migration early April. Donal and Muharem on full storage migration, staking… |
| **Snowbridge v2** | Code complete, in security audit; Westend–Sepolia deployment next; Polkadot mainnet before end-Q2. |
| **XCM v5 progress** | USDT-only transfers on AH; fee-estimation refactor (#7438); ERC-20 transactors under test. Paraspell SDK and ERC-20 examples are being updated |
| **BLS-BEEFY** | Primitives merged but work paused; Seun may pick up implementation, paid by Fellowship |
| **Release cadence** | Proposal for quarterly(?) Fellowship runtime releases with proactive integrator comms |
| **Tooling / QA** | RFP-4 drafted for advanced integration testing |
| **Proof of Personhood** | George & Guillaume: *people_pallet* UI demo next month; Tx-Horizon feature in audit. |

### Discussion on Coretime Market

- Consensus: don’t adjust floor-price yet. First deliver Elastic Scaling.

## Transcript

```
Gavin Wood (Rank 7)
- Finished JAM tour
- REPL merged to Polkajam codebase; first binary release & DIY test-net creation executable coming before next call
- hoping to open-source CoreVM
- Finished JAM Graypaper 0.6.4 → summarize activity on-chain. It’s useful to know what happens in the chain for the outside world (e.g. how different node implementations report, how much gas was used, how many work items were done, how much was going to accumulate), will also be useful for the JAM toaster
    - also written in the PolkaJAM implementation
- Q: Is this like a debug output/log console?
    - A: it’s more like top in Linux → jamtop. With the work reports, we also report how much work was done. Imports. Exports. Extrinsics per work item, etc… how much work is done on cores? Bandwith, Accumulate IO, Refine Activity, Authorized Activity
- Q: There were claims that **Doom-on-JAM** was not really run on-chain
    - A: It was run in one of JAM’s cores. In CoreVM. Provides a PC-like machine for software to run in. Doom was retargeted to PVM. It’s not particularly enjoyable to play, because there is considerable latency → 6s blocks. Playing DOOM through this is going to get boring because you will wait 6s. But it shows we have the compute, bandwith etc…
    - The on-chain / off-chain argument is kinda dumb. JAM has a chain; and there is some logic that happens on-chain. The argument is that: If it is not all nodes that execute it, it is not on-chain. That is a bad argument. It focuses on how, not on what. What JAM provides is a fundamentally secure computation platform. Bitcoin etc execute all logic on all nodes. As we move forward, we see that we don’t need to prove all data on all chains, e.g.
        - zK → compression of correctness. There is a general acceptance that it is fine.
        - optimistic rollups also compress correctness
        - JAM also compresses correctness by projecting correctness of the chain’s computation to its stateless DA cores. → is written in the ELVES paper.
    - Therefore it doesn’t make sense to try to distinguish if a certain piece of computation happens by all nodes any more than it makes sense if a certain piece of code is written by a zk proof generator… it’s all on-chain level of correctness

Basti (Rank 6)
- 500ms blocks - had some discussions with Sebastian. Better to change model to: One author to produce blocks for 6s in a row. It’s better to have one single aggregated PoV proof.
- There was an incident with the latest staking release. I have written RFP-4 → An invariant should not have the same stake twice.
- Led 1.4.1 hot-fix after staking-pool exploit; drafted RFP-4 for advanced AI integration testing.
- Adrian: The simplication for the Basti-blocks is that they get checked in a batch by the relay chain?
    - Yes. I will have to write down the security/latency trade-offs are under review.
- Gav: What’s the transaction throughput improvement? 12→6 is basically double. 6→3 you will have more block overhead. Where does the block overhead just becomes way too much?
    - You don’t get a performance improvement by putting more blocks in a PoV. You have to combine it with Elastic Scaling. It reduces the latency, it doesn’t improve the throughput.
    - Gav: Suppose you buy the fastest hardware possible & and it is centralized: is there not a fixed amount of time per block (overhead) at which point it doesn’t make sense to reduce the block period.
    - If you go faster, you would have to rethinkg onInitialize & onFinalize. If those take 200ms, you only do initialization without adding any txs. We should have a layered approach: We have 500ms where there is kind of a sweet spot where you have enough time in a block where you can put tx it, but you also have a state commitment / pre-confirmation.
    - Gav: I noticed that peaq that reported 400ms blocks with 67k tps.
    - Basti: They were using 15 cores.
    - Gavin: it looks like it is only a 6.7x improvement over using 1 core?
    - Tommi: The post shows they go from 10k → 67k txs per block
    - Basti: I don’t know what they do
    - Andrei: They don’t have batching going on. They are likely using less than 25% of the compute the cores provide. I didn’t yet get a response from them.
    - Gav: There is going to be additional activity on chains like Mythos in the coming months. Being able to use more cores, even if it means centralizing on block production is going to be quite important.
    - Tommi: Community Question: Is this 12 cores, or is it lots of blocks but bundled up in one core?
    - Basti: One PoV with multiple blocks. But you can easily scale to multiple PoVs.
    - [https://forum.polkadot.network/t/elastic-scaling-wen-500ms-blocks/11971](https://forum.polkadot.network/t/elastic-scaling-wen-500ms-blocks/11971)
- Oliver: Can you loop people in on the remote proxy thing that landed on Kusama?
    - Basti: The idea is you can create a proxy on the relay chain and you can use it on a parachain, passing in a proof. This was not yet deployed. Wanted to write a tutorial for that.
- Seun: Wen BLS-BEEFY?
    - Adrian: Was under research by W3F. There were different BLS curves considered. One or two were chosen and the primitives are already in the SDK. Some work was done on the Beefy client (gadget) to support different signatures. That is where the work stopped. No work currently and no work in Parity and W3F planned. Afaik the topic is paused.
    - Seun: Is this a lack of capacity at Parity or is this from the W3F?
    - Adrian: Rather a lack of prioritization. Not high on Parity’s priority list
    - Seun: There is proposals to increase the size of Polkadot validators. How will you continue to support BridgeHub and Hyperbridge if it will eventually reach 1000 and it will become too expensive to operate these bridges.
    - Andrian: I am not aware of any issues. What are your challenges?
    - Seun: This is not localized to Hyperbridge. BridgeHub will also face this if you want to securely prove Polkadot’s consensus on any chain. Hyperbridge uses zk primitives to prove ECDSA signatures. They come from the Ethereum community. There is a complexity associated with that proving that is projected to keep going on. I heard the target is 1000 by then end of the year. Was this misprioritized?
    - Adrian: There is no plan atm. We need to see the impact and costs and base our decision on that.
    - Tommi: At how many nodes will this become a problem?
    - Seun: It is already a problem. Has improved our proving costs. Has delayed finality. Introducing BLS Beefy allows to decentralize a prover. Permissionlessness is also important. Just hoping here that there is a solution on the horizon. If Hyperbridge has to stop working, this will also affect BridgeHub.
    - Adrian: Need to raise the visibility. At which point does it become a problem for the ecosystem?
    - Basti: Why don’t you write the fix? We can find resources/money.
    - Seun: We are happy to take this on. We would expect that Parity who are responsible for reviewing this do so in a timely manner.
    - Basti: Reasonable. We can find a bounty/finance it.
    - Gavin: Reasonable to fund it through the Fellowship

Kian (Rank 4)
- My focus area is still almost 100 % the new staking system of Asset Hub. Once it is more stable I plan to host a three‑part seminar series explaining the system, with time for questions. The recordings will be public so others can help maintain it and reduce my bus factor.
- There was a conversation about whether the Fellowship can help review the quality of tips from `parity-tip-bot`. This might be worth discussing at the end if time allows.
- I haven’t had much time to work on our JAM implementation myself (with Oliver Tale‑Yazdi and Cisco), but they usually share GrayMatter updates.

Bryan Chen (Rank 4)
- **Boka (JAM implementation)**
  - Updated to GP 0.6.2 and passed all W3F test vectors.
  - Also passed community vectors from JamDuna, JavaJam and Jamixir.
  - Working on in‑core execution and p2p; aiming for end‑to‑end JAM service runs in a few weeks.
  - Where can I find the DOOM service code to test against?
- **polkadot‑ecosystem‑tests**
  - Maintaining existing tests.
  - Reviewing @rockbmb’s additions for staking, nomination pools, scheduler and governance.
- **PVQ (formerly XCQ) RFC**: ready for another review; plan another update and demo tutorial soon ([RFC#126](https://github.com/polkadot-fellows/RFCs/pull/126)).
  - Looking forward to Working Groups, especially the AHM one, as collaboration across teams will be needed.
  - Not from last month, but I started XCM v6 with big refactoring to make it more extensible. I don’t have time to finish it, so looking for help—happy to mentor and review ([polkadot-sdk#7123](https://github.com/paritytech/polkadot-sdk/pull/7123)).

Andrei (Rank 3)
- Launching Elastic Scaling. Reviewed Runtime Upgrade PR. Planning more testing on Kusama once we have it. April Westend Spammening dry-run in April
- Did Reviews code level design of new collator protocol impl
- Did Reviews on low latency parachain design from robert, currently a doc and will be published soon
- looked at RFCs and provided reviews
- reviewed on-demand parachain impl
    - why would someone spit a parachain that spits out 3 blocks per day and not build the same use case on Hub?
- did a blog post: scaling up rollups with elastic scaling, described use cases like 500ms blocks, elastic scaling; connecting it to the Web3 Cloud narrative; L2 scalability trade-offs
- I’m quite disappointed that there is no interested in webinar session for elastic scaling, reached out to teams but there is no interest at this point. Maybe will do a video.
- in development: did a fix on max uncompressed code size. a few years ago it was lowered from 16 to 12. but it is just one constant defining this. deprecated it and wrote a runtime api to computes it.
- recently profiled PVM execution for some big POVs, big blocks; seems tooling didn’t work so I had to make a fix in the Cumulus POV validator. Now also works with PoVs that you can recover from Polkadot DA

Oliver (Rank 3)
- Introducing a similar release cycle for the runtime as for the Polkadot SDK. Would help implementers and teams preparing for releases.  Have scopes written down.
    - Donal: Having a clean timeline in advance helps to work backwards if your feature is going to make it into a release.
    - Basti: Would be better to communicate much earlier
    - Donal: sometimes hard to push the info of updates to integrators when it is unclear how to reach them

Adrian (Rank 3)
- Worked with Snowfork to deliver Snowbridge V2, impl is done, review is done, sent to sec audit, soon to Westend-Sepolia; it is merged to the SDK, plan to backport 2503 have it live before end of Q2
- AH migration work, handing over the tracking of DOT total issuance from relay to AH.
- invovled in some other work streams: XCMv5, observability, bridge permissions

Muharem (Rank 2)
- AH migration: map the data, send the data from the relay to AH, accounting the resources for the migration

Sebastian (Rank 2)
- Mostly Collator improvements, elastic scaling. was merged, correlated to discussion with Basti re slot times on parachains. early days we recommended having short slot times and authors switched a lot. now we recommend have slot times of at least 6s. this makes bundling of PoVs easier. don’t have to record PoV on multiple nodes. this makes life easier.
- make block authoring easier, if you have 2s block times, you don’t have 2s and then author the next blocks. you always need to have time for the next node to import the block before they can do some action. if we have longer slot times, maybe we can author on one node back-to-back and only when the handover to the next node happens we cut a bit into the authoring time. is finished and merged and will come with 2503
- optimization: elastic scaling is prone to relay chain forks. in the past, parachains where authoring on all forks of the relay chain. no matter which fork wins, the parachain will have a block for the fork. with ES we don’t have the time to author on all, so we pick one (the best one). in case where this goes wrong there will be a reorg on the parachain. to reduce these forks is to author a bit on all relay chain blocks. forks on relay chain blocks are typically very short. if parachains author a bit behind the tip, we can assume the forks have already settled.
- from my team: progress on litep2p, now default on Kusama, so far no hickups, 600 validators running with litep2p, going to Polkadot later in Q2

George (Rank 1)
- Mainly been working on Proof of Personhood, nothing to show, but that is about to change. By next month, I will show people_pallet. The pallet for interacting with the chain as a person and some adjacent work that will make it safe, another pallet with fund protection.
- working in the background on DIM 1 and DIM 2

Guillaume (Rank 1)
- Intro: Parity since 2020, left, came back this summer, work mainly on Runtime
- mostly worked on proof of personhood
- tried to push forward tx horizon. should supersede validator on-sign/sight(?) logic. is in audit now. should simplify process of declaring unsigned transactions

Cisco (Rank 1)
- Working on ERC-20 support via XCM. ERC-20 will be cross-chain transferable on the Hub working with pallet_revive
- Fixes for XCMv5, working with Papermoon to get docs ready, specifically Paraspell with their XCM SDK.
- Tweaking content for the PBA XCM model
- Graymatter: catch up with test vectors from JamDuna and so on
- Question from Daniel: Does the ERC-20 support add any new XCM instructions?
    - There was a discussion having a call for doing a smart contract call, like call_evm, call_contract. RN you can call it via Transact. ERC-20s should add no new instructions, there will be a different assetID with accountKey20. The work being done is that a transactor that works with pallet-revive when you receive a message and want to deposit an ERC-20 you actually alter the smart contract state
    - Gavin: What is the matter with actually using Transact? Why introduce new instructions?
    - Cisco: We could immediately identify smart contract calls. Regarding fees
    - Gavin: Isn’t the fee stuff relevant for doing message calls as well? doing regular pallet txs
    - Cisco: If we identify that it is a smart contract call, then we already know it is taking a storage deposit
    - Gavin: There is no way that a pallet call in the future is taking storage deposits? The point of MultiAsset is to not have to change infrastructure code

Daniel (Rank 1)
- One of my PRs got merged about fixing the client facing XCM versions of objects returned to clients. So that the client gets the object in the same version it expects.
- Recently tried to figure out how to change the XCM exector implementation so that we could have a general implementation for the XCM payment API method which converts the weight to the selected fee asset. currently we have duplicated impls for converting the weight to the selected fee assetId; how much of the selected currency we need to give up. I’d like to make it more coherent/consistent to only have one impl
- after that hopefully help Bryan with XCMv6
- Polkadot SDK pull request 7438

Donal (Rank 1)
- Focus on AH migration
    - couple of delay with staking. we had to revert a few things in 2503. will make a point release of those crates. multiblock election and client crits. we need a pallet on AH and relay to communicate. they will release in a code complete state, but we are not happy yet. so we revert them for 2503
    - Westend migrations still happen once 2503 is done. Do AH migration on Westend early April. Recently been working on runtimes for that and deploying them on Westend
    - Been talking with parties about the migration, especially parties that are heavily affected.
    - post 2503 there will be marker traits for decoding things. We’re using transact to send all the state over. All storage items in all pallets to be migrated, using all of the types of arguments to be called. All of this has to be marked with traits. Lots of changes.
    - Staking on Hub will be tested extensively.
- Not sure how the delay for staking will affect the Kusama timeline. We get to the point where we know all the issues. Want to improve E2E testing.

Coretime Pricing Discussion
- Oliver: Do we have good ideas for the Polkadot cores to raise the core price? It gives a “too cheap” impression.
- Gavin:
    - Get Basti Blocks asap and roll it out as a standard piece of the SDK.
    - Atm we have inelastic demand. We want elastic demand so that parachains can decide their throughput. Where maximum demand is marginally higher than supply, we will have an efficient market. On-demand block authoring as default config for chains with chains setting their own ceiling price for authoring a block would be by far the most useful layer to create a sensible market for coretime sales.
    - You could fix the floor price but you would get into arguments quickly. I am not against it, there could be a basic price for subscription, but it would be a much better way to make cores more useful
- Oliver: Making it easy to consume more
- Gavin: Yes, and atm we have a very engineering focused view on coretime: make it as minimal as possible. We need to be more focused on expanding usage of cores.
- Tommi: from what I am aware there are 7 chains that have expressed intent to use more cores, of which 6 are live: AH, peaq, Frequency, Mythical, OriginTrail, Hyperbridge
- Gavin: The flipside of this is to ensure that a parachain can use less of a core. have on-demand blocks, because they can’t afford a core in a functioning market; unless we roll out more cores. but we don’t want that until the price is sensitive. This should be supported as much as allowing chains to use multiple cores. As soon as we have elastic demand, then we can add more cores. Obviously we shouldn’t bring in more cores before that.
- Donal: When we first deployed coretime we wanted to make sure there is enough cores for everyone and bit more so that the transition doesn’t create a problem. We started with more cores than the market needed. There are some params we haven’t played with yet. The basic model doesn’t reflect the economic conditions of the market. From that perspective I would like to see some tweaks to the model. Price for the next cycle can be dependent on the n-th core.
- Gavin: But wouldn’t price for the median priced core also trend towards the price of the minmum priced core? That is what should happen in an efficient market.
- Donal: If Polkadot were a company, we would have started by selling one core and only add more as demand grew
- Gavin: My point is this is a well functioning market. There is zero elasticity. Supply is fixed. Demand is fixed. And demand is bigger than supply. We can either price the market with a minimum price or to make demand elastic. Make it a curve instead of an asymptote.
- Donal: Agree it is better to do that. If your price starts to low then there is no difference.
- Gavin: With elastic demand and max demand bigger than supply there will be a pricing. Right now there is cores that literally no one wants to buy. The auction mechanism is fine, just the market is fucked. There is too many cores and too few ways to use it. There can be improvements to any market mechanisms though.
- Tommi: There currently is Kusama [Ref 507](https://kusama.subsquare.io/referenda/507). Reducing inflation and “setting a realistic target” for coretime sales. Reduce ideal bulk coretime sales
- Donal: It was discussed recently. Overall, [Jonas’ comment](https://kusama.polkassembly.io/referenda/507#r3nXN3uRcHShoh91o14W) is right. It is a high risk experiment.
```
