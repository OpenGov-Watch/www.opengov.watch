# 2024 March Polkadot OpenGov Report

![dedwhale.png](/img/2024-03-governance-report/dedwhale.png)

The March 2024 Governance Report from OpenGov.Watch dives into the latest twists and turns in the OpenGov, mainly focusing on the initiation of Decentralized Voices (DV) and the shift in power dynamics it caused. We are digging into the political and operational layers of OpenGov, exploring how different players are making waves, and speculating about constitutional questions for the recent dramas. From funding proposals to community feedback and strategic shifts in major projects, this report gives you the scoop on how the latest events are shaping OpenGov.

## Enter Decentralized Voices

March began with a significant change in OpenGov’s political structure as the Web3 Foundation appointed [the first round of](https://medium.com/web3foundation/decentralized-voices-round-1-candidates-announced-23d9a800b260) Decentralized Voices (DV). In short, W3F delegated 42 million DOTs voting power for three months to the selected members and organizations within the community to amplify community involvement in the decision-making in the OpenGov. As Bill Laboon stated during his [weekly office hours on X](https://twitter.com/BillLaboon/status/1771174687629840670), the delegations will be limited to one term and we will see brand new DV delegates at the beginning of June. You can check out [the initial announcement](https://medium.com/web3foundation/decentralized-voices-program-93623c27ae43) for the details about the application and start preparing if you intend to be a DV delegate for the next term.

Although there are no formal requirements for justifying their votes, some DV delegates have established specific Telegram groups to communicate and share their feedback with governance participants. We have observed Jimmy Tudeski, Saxemberg, and Chaos DAO providing weekly explanations for their voting behavior on the X platform, while others offer their feedback on governance platforms like Polkassembly and AAG. One delegate, Kukabi [even launched a website](https://gov.helikon.io/) dedicated to sharing all his feedback.

As OpenGov Watch, we have had meetings with all the delegates after they got appointed and got a glimpse into their initial experiences. The most common feedback was that they all felt a great responsibility for their appointment, consuming considerable time and energy as they analyzed and provided feedback on all the proposals they reviewed. The delegates have also made some concerning reports, including rumors about threats and attempts at bribery against influential voters.

## The Balance of Power

The introduction of DV in OpenGov disrupted the existing balance of power, primarily dominated by the executive whale Giotto. Even before the official introduction, Giotto started publicly criticizing the DV program and the criticisms became attacks as [The DED Bounty](https://polkadot.subsquare.io/referenda/556) proposal encountered great opposition. During this time, Giotto heavily targeted DV delegates as if they were a unified entity and voted unanimously, while in fact, this is not the case on most of the proposals. In one of his criticisms, we observed that Giotto used wrong data which showed the impact of DV votes on the outcome of the OpenGov referenda. Although community members quickly pointed out that this data was based on misconfigured queries after Giotto shared it, [the post remains live](https://x.com/giottodf/status/1770773122452471938?s=20) on his X profile.

|   |   |
|---|---|
| ![broken.png](/img/2024-03-governance-report/broken.png) | ![issue.PNG](/img/2024-03-governance-report/issue.PNG) |

The actual situation however shows minimal impact of DV delegates (10%) on the outcome of most OpenGov proposals. You can follow the DV impact live on the [Dune dashboard](https://dune.com/substrate/polkadot-and-kusama-decentralized-voices).

![actual.png](/img/2024-03-governance-report/actual.png)

In this period Giotto also targeted all the DV delegates with accusations of bribery and signing of NDAs in favor of the [Transistor proposal](https://polkadot.subsquare.io/referenda/507). No factual evidence has been provided for these accusations and NDA allegations have been denied by the Transistor team [during a live X space](https://x.com/transistor_wtf/status/1769015706761228462?s=20). Some of the DV delegates also publicly announced they were not part of any kind of agreement. We do not have further information about this claims and continue to closely monitor the developments.

## Fast & Faulty

The [proposal seeking](https://polkadot.subsquare.io/referenda/514) funding for Conor Daly's Indy 500 racing sponsorship with an amount of $2.1 million has passed without any controversy. However, [the proposal's execution failed](https://x.com/AdamSteeber1/status/1772715317787025556?s=20), leading to a series of events.

Since the funding hasn’t reached the proposer and there are overdue payments that were waiting for the treasury grant, several agents from the network started collecting ‘donations’ to be paid back in the future with a [replacement proposal](https://polkadot.subsquare.io/referenda/616) that is currently being voted on. The community collected the targeted amount of 130,000 DOT in 7 days, with Giotto being the largest contributor, providing over half of the target with 73,000 DOTs.

This is a particularly interesting topic as the events uncover several political aspects for OpenGov.

1. As the social layer of the network found a solution, there was an interesting technical discussion on the background about the origin of the error. Adam Steeber, who is the original poster that alerted the community about the error, claimed this might not be a bug and [the issue might have originated](https://x.com/AdamSteeber1/status/1773812160507805908?s=20) from a simple human error that had been made during submission, contrary to the [post-mortem report](https://hackmd.io/@XuVYQ1rUQjGv8uRzzsdzuw/SkVai0WkA).
2. It is a very unique example where legislation and execution are almost completely separated. In a sense, the execution layer of the network failed to implement a legislative decision made by the OpenGov. Although there are several -not very easy- solutions available to fix this on the technical level, we have been informed that the technical fellowship abstained from fast-tracking a replacement proposal.
3. Another unique aspect of this proposal is that the second proposal seeks the same amount of DOT as the previous one, although the DOT price has risen nearly 40% since the original proposal. In this way, the longstanding tradition of relying on the EMA of DOT prices is practically overruled.

All these points have the potential to open up interesting constitutional debates. 

For many years the mantra was ‘code is law’. But as we can see in new on-chain governance systems like OpenGov, the discussion becomes more complex. Should we consider this proposal as failed, and separate the new proposal from the previous one? Would it make a difference if this is a human error or a protocol bug? Which body is mainly responsible for fixing the problem then? Can we have strict standards for proposals? So, is keeping the old EMA in the new proposal acceptable? 

These rhetorical questions are all waiting to be answered in future proposals, and we should start exploring these dilemmas as OpenGov evolves.

## Funding is DED

Another controversy centered on the funding of the DED memecoin. Discussions began with [a proposal](https://polkadot.subsquare.io/referenda/548) seeking $300,000 in funding for the Existential Deposit airdrop on the AssetHub chain and snapshot tooling. Following the community’s reaction to the unpredictability of future DED proposals, [another proposal](https://polkadot.subsquare.io/referenda/556) was posted asking for $10 million to cover all memecoin costs in a unified and undefined package. Both proposals are currently failing.

Resistance from the community to the DED bounty led to a directional shift in the development of the DED memecoin. The DED foundation redirected the project to seek private investors after losing community funding, and reduced the community allocation to 5% from the previously advertised 100%. The decision created one of the biggest controversies of OpenGov, as the foundation that made this decision [is funded by](https://polkadot.subsquare.io/referenda/469) the Polkadot treasury (for about $140,000) and the treasury [also funded](https://polkadot.subsquare.io/referenda/385) the initial marketing efforts of DED with another grant worth $700,000.

## Notable Mentions

- **7000² Feet Under:** What a swing! The [proposal from the Transistor team](https://polkadot.subsquare.io/referenda/507) that seeks $3.2 million in funding for their NYC office swung right and left through the month. Starting with very little support, the proposal managed to pass a 60% approval rate at some point and kept its position for some time. But in the end, the proposal failed with only a 30% support rate after extensive discussions on social media, which were mainly led by Giotto’s anti-DV narrative. There was also an impact of Transistor’s inconclusive Decentralized Futures grant application on the outcome of the referendum.
- **OG Tracker is Introduced:** Another project that keeps an eye on OpenGov by tracking deliverables of the previous referenda went live this month. You can view the progress of proposals approved by OpenGov on [OG Tracker](https://app.ogtracker.io/dashboard) and provide feedback on the website to contribute to future versions.
- **Marketing Intensifies:** The [Marketing Bounty](https://polkadot.subsquare.io/referenda/402) #33 that Giotto initiated [received a refill](https://polkadot.subsquare.io/referenda/529) worth $2.6 million and another refill worth $4.6 million is currently [being voted](https://polkadot.subsquare.io/referenda/596). Earlier this year, this bounty had [already been refilled](https://polkadot.subsquare.io/referenda/596) with $800,000. [Initially starting](https://polkadot.subsquare.io/treasury/bounties/33) with $600,000 in February and currently has $2.5 million available to spend.
- **Bounties Clashing:** Another marketing bounty, the [Autonomous Marketing Initiative bounty](https://polkadot.subsquare.io/referenda/562) spearheaded by Adam Steeber is currently being voted on OpenGov, requesting $2 million from the treasury. If approved, Polkadot governance will simultaneously have two active marketing bounties. The bounty mechanism is becoming increasingly popular, with a growing number of bounties proposed to OpenGov. Bounties will be our main focus in April.
- **Million DOT Liquidity Campaigns:** Three big spender proposals are currently being voted on OpenGov regarding DeFi products worth $9.5 million each.
    - [Liquidity provision for Hydra DX](https://polkadot.subsquare.io/referenda/561), in which the treasury will act as a liquidity provider, and the funds will remain in the control of OpenGov.
    - [Liquidity incentive program for Hydra DX](https://polkadot.subsquare.io/referenda/561), which aims to fund Hydra DX to conduct a campaign to attract more liquidity to their platform.
    - [Liquidity incentive program for StellaSwap](https://polkadot.subsquare.io/referenda/580) aims to fund StellaSwap to conduct a campaign to attract more liquidity to their platform. Unlike Hydra DX, StellaSwap is not a Polkadot parachain itself but a dApp built on the Moonbeam parachain.
- **Airdrop Frenzy:** After extensive discussions initiated by Giotto on governance platforms and social media, Zeitgeist has decided to commence an airdrop to DOT holders on top of their deliverables in their [Futarchy proposal](https://polkadot.subsquare.io/referenda/502). This proposal aims to integrate prediction markets into OpenGov and the decided airdrop amount is equal to 1% of the ZTG supply. Although the eligibility details have not yet been announced, we expect this event to set a precedent for future proposals, as teams might consider including an airdrop allocation in their OpenGov proposals.

---

Follow us on X: [@xcjeeper](https://twitter.com/xcjeeper) [@alice_und_bob](https://twitter.com/alice_und_bob)  
Check out [OpenGov.Watch](https://www.opengov.watch/)  
Find us on [Grill](https://grillapp.net/12859?ref=9409)