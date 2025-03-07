# Bounties: Best Practices


This guide outlines the key elements of running a bounty on Polkadot, covering how to get a bounty started, set up internal operations (including roles, compensation, and multisig structures), manage budgets and projects, and handle transactions. It also details communications strategies, submission templates, best practices for transparency and compliance, conflict of interest rules, branding guidelines, and the responsibilities that curators, advisors, and other stakeholders must uphold.

We assume that you know how bounties work in general. If you want to learn more about the basics, check out the [Polkadot Wiki Page on Bounties](https://wiki.polkadot.network/docs/learn-polkadot-opengov-treasury#bounties).

Many of the required extrinsics to perform the actions mentioned in this guide are explained [here](https://wiki.polkadot.network/docs/learn-guides-bounties) as well as [Leemo's video tutorials](docs\03_guides\20_bounties-multisigs.md).

## Starting a Bounty

Bounties are departments of Polkadot Governance. Launching a new bounty typically begins with identifying a clear need or mandata and then forming a coalition of designated curators who are trusted by the community and qualified to oversee the work. Early on, defining the bounty’s job or mandate is essential — whether it involves broad, ongoing tasks such as marketing or more specific, one-time objectives like finding the right esports team to represent Polkadot. A clear need and scope must be established so curators can accurately determine funding requirements and justify them to OpenGov.

Before submitting a formal proposal, prospective curators should engage in multiple rounds of community discussion to gather feedback and build a network of champions and established members who endorse the bounty. This process generally takes one to two months of proposal drafting, debate, and voting. 

Proactive vs. reactive bounties: A bounty may operate proactively, setting its agenda and seeking out projects, or reactively, responding to proposals that fall within its defined mandate. 

## Internal Operations

### Roles

The only mandatory role in bounties is the curator. Curators act as a leadership board for the bounty and approve projects and spending. Bounty curators either manage projects themselves or oversee the execution of projects. Curators operate using a multi-signature wallet. Curators should have verified on-chain identities.

Large bounties also fill additional roles. What kind of roles exist within a bounty, can be very flexible. Some additional functions usually are: advisors, strategy, administration, accounting, and technical support.

An administrator is usually one of the curators with slightly bigger compensation and higher permitted time cap. They are mainly responsible for general bounty coordination as well as OpenGov reporting tasks. Administrators are not strictly required but can be highly beneficial, so one person can be the main point of contact for the bounty and handle administrative tasks.

Accountants are suggested for larger bounties. The position provides a critical check and balance on the use of funds as well as facilitating bureaucratic work for curators.

### Multisig Structure

A multisig helps to balance security and accountability. The multisig should be small enough to allow curators to release funds quickly. At the same time, the threshold should be big enough to make sure that funds cannot be stolen easily. A popular choice is a 3-of-5 threshold to optimize for speed and efficiency. To further minimize the risk, we recommend monthly scheduled funding for the bounties instead of a one-time yearly budget grant.

For multisig operations, curators can utilize a variety of tools, such as Multix, Signet, Mimir, and Spektr. We recommend using [Multix](https://multix.chainsafe.io/?network=polkadot). 

The recommended structure is to use a pure proxy and have the curator set act as a multisig on behalf of the pure proxy. This setup allows the change of curators at any given time without requiring an additional OpenGov referendum, which doesn't disrupt the bounty operations during a potential curator change (Leemo’s [original diagram](https://x.com/LeemoXD/status/1816607697766342936)).

![](/img/bounty-best-practices/bountybest.png)

### Compensation

Curators are compensated either through fixed monthly payments or through hourly payments. Here are some examples as of March 2025:

- $4k/month for the Events Bounty curators (PTE: 20 hours of work per week).
- $1k/month for the Meetups Bounty curators (PTE: 10-15 hours of work per week).
- €100/h for the Marketing Bounty and $100/h for the UX Bounty with hourly caps on curators.

Advisors generally do not receive payment but provide coordination and insights to the curator team.

### Project Management and Internal Meetings

Notion is often used as a central workspace for curation, project management, and homepage content. Documents and submission forms for the Marketing Bounty [are built on Notion](https://www.notion.so/1914aaf5ccba8115bed5f25dfed39e99?pvs=21), automatically generating pages for each proposal that curators can evaluate and vote on.  Monday has also been used for internal project management. 

Meeting frequency varies across bounties. 

- UX Bounty holds a weekly curator meeting, where advisors are also welcome.
- Marketing Bounty has two weekly curator meetings and one monthly meeting with advisors.

### Project Funding

Bounties can fund projects in different ways. Reactive funding (incoming proposals) responds to proposals received by the bounty. Proactive funding involves curators or advisors identifying promising initiatives. RFPs serve as a more formal path to issue calls for projects or roles that need to be filled. Beyond one-off projects, bounties may also provide recurring support, such as hiring team members regularly or providing scheduled funding to outside organizations.

### Stablecoins

At present, bounties can only propose DOT, and receiving stablecoins as a bounty is not possible. Therefore, some bounties might decide to swap for stablecoins for a more predictable runway as well as to be able to pay in stables. Curators should consider that any kind of transaction might have tax implications in their jurisdiction as well as technical problems with using pure proxy wallets on cross-chain operations.

Trading DOT for stablecoins is also a very delicate topic in terms of public fund management. Be aware that on top of legal implications, there is an infamous history of failed trades with treasury funds and the Polkadot community is not forgiving in this aspect.

Although it creates a fluctuating budget, keeping the bounty funds in DOT is generally advisable.

### Transaction Batching

Bounties can aim to minimize transactions by batching calls whenever possible. Because each child bounty requires two transactions, one to propose and another to claim them. Each transaction requires a separate signature. When there are multiple transactions to be signed, batching a couple of transactions is logistically feasible.

### Curator Renewal

Bounty curators need to extend their term at least once every 90 days with an on-chain action. Failure to do so will result in the on-chain curator seat being unassigned and will require another OpenGov proposal to submit the curators again.

## Communications

### Public Relations

External communication and engagement typically include monthly community calls, weekly office hours, and periodical status reports. These can be versatile, and each bounty prefers different formats based on its scope. 

- Events Bounty has [weekly office hours](https://meet.google.com/vgu-jaqc-rpi) and an [X account](https://x.com/dotevents_).
- Meetups Bounty has a [Telegram group](https://t.me/+geMjZwe7IddmYzQ0) and an [X account](https://x.com/DOTmeetups).
- PAL has a [Discord channel](https://discord.com/invite/xuKGyyhGp8).
- System parachains collator monthly updates on the [proposal page](https://polkadot.subsquare.io/treasury/bounties/32).

### Dedicated Homepages

Homepages offer a public-facing channel and are necessary to gather all the info about the bounty.

- Marketing Bounty’s [Notion site](https://marketingbounty.notion.site/)
- Events Bounty’s [Linktree](https://linktr.ee/dotevents_) and [website](https://dotevents.xyz/).
- Meetups Bounty’s [Notion site](https://www.notion.so/Meetups-bounty-cd57b5990ba443559413dec3b339ab4a?pvs=21)
- PAL’s [Github page](https://github.com/dot-pal/pal-docs).
- IBP’s [website](https://ibp.network/) and [dedicated Wiki](https://wiki.ibp.network/).

### Submission Templates

There are examples of draft documentation for standardized bounty proposals.

- Marketing Bounty [submission template](https://docs.google.com/document/d/1oYi8tUw_nk52dVnXA-k2GptxVjN8pMq0Xd3hCmPZ4Cs/edit?tab=t.0)
- Events Bounty [templates](https://drive.google.com/drive/folders/1RvEyNpMjHtKTTuKVfvAKkmCF9J605H5C)
- Meetups Bounty [submission guidelines](https://www.notion.so/15507b74873a808f997bfd8b1db1ae73?pvs=21)
- PAL [application form](https://docs.google.com/forms/d/e/1FAIpQLSfhF6TNyDVHm7LpcmXl1ydEiRXZ378l_4cNnkEdVeLz8Kt4ag/viewform).

### Rejection & Feedback

Curators reject proposals for different reasons. It is essential to give proper feedback to the proposers so they have an idea of how to proceed.

- One of the most important aspects of bounties is that they can negotiate with proposers in terms of the content of the proposal as well as the price.
- Bounties might decide that the proposal is not in their scope of funding, so they can redirect the proposal to a related bounty or directly to OpenGov if no bounty covers the related proposal in its scope.
- Bounties can co-fund proposals. For example, for an event proposal, some amount could be covered by the Events Bounty while the remaining falls within the scope of the Marketing Bounty. Bounties are encouraged to cooperate in these circumstances.
- Since OpenGov is completely permissionless, proposers can go to OpenGov directly after they are rejected by the related bounty (or without applying in the first place). In these cases, curators are encouraged to provide feedback on the proposal page so token holders can have an idea of why the proposal has been denied by the bounty or if it applied to the bounty in the first place.

It is a good practice to share which proposals have been funded and which have been rejected by the bounties.

- Events Bounty has a live page mirroring their [submission status](https://dotevents.xyz/submissions/submissions).
- Meetups Bounty transparently showcases its [entire proposal status page](https://www.notion.so/d6e782e9fd614487a80ee73b1ba94ccf?pvs=21).

## Compliance

**All bounties are expected to follow previously established [bounty compliance standards](https://polkadot.subsquare.io/referenda/1254) by OpenGov.**

Bounties are accountable to the Polkadot DAO and have a responsibility to communicate clearly with the tokenholders.

### Requesting Funding

Each bounty should request funding no more than once per quarter, providing transparent budgets, timelines, and clearly stated objectives to maintain accountability throughout its lifespan.

### Transparency

Bounties should share their progress summaries and financial statements outlining all expenses. Google Spreadsheets remains the preferred tool for accounting and time tracking.

- UX Bounty’s [payout sheet](https://www.notion.so/19de29ff5d474a068b1ee67e13a934c1?pvs=21) and [quarterly reports](https://www.notion.so/18be1c2781f3801f8694f29306f5afcb?pvs=21).
- Marketing Bounty’s [shared spreadsheet](https://docs.google.com/spreadsheets/d/1GhosV26WpZsajmMQmDxc0zw5YSzr5KOJ5YJZzvTEhvE/edit?gid=1811929621#gid=1811929621) and [monthly progress reporting](https://www.notion.so/1a34aaf5ccba802188abd3c6c19fb851?pvs=21).
- PAL’s [community reports](https://github.com/dot-pal/pal-docs/blob/main/community-reports/pal-24h1.md).

### Conflict of Interest

Curators with a conflict of interest in a specific proposal must disclose it and abstain from voting and signing their payments except for curator work. In an ideal setup, the individuals executing tasks within a bounty would be completely separate from the ones serving as curators.

### Branding

Specific branding guidelines apply to bounty spending as outlined in [Referendum 1350](https://polkadot.subsquare.io/referenda/1350). Based on this referendum, projects that are funded through the Polkadot treasury must display the Polkadot branding for as long as their product, campaign, or project is live and functioning. The projects are advised to display what most accurately describes their product.

- Secured by Polkadot
- Powered by Polkadot
- Funded by Polkadot

Additional assets are available in the [Polkadot Brand Hub](https://polkadot.com/community/brand-hub).

### Risks & Responsibilities

A bounty acts as an extension of OpenGov. Curators take the role of guardians of the bounty funds. At the same time, curators need to make sure that they do not expose themselves to personal liability in their jurisdiction. To achieve this, we suggest that curators consult legal counsel and consider tax implications and regulatory requirements when dealing with bounty funds.

Curators don't make contracts with proposers. They execute the mandata of the bounty and act on behalf of the DAO. Curators should make sure to document the process and their decisions. To ensure AML regulations are met, curators might want to ask service providers to provide identifying information.

## Closing a Bounty

Once a bounty has fulfilled its original purpose or no longer aligns with the objectives set out in its proposal, it should be retired to free up resources for other community initiatives. 

Noncompliant or inactive bounties can also be closed through an OpenGov process, either by rejecting a budget top-up request or by proactively putting forward a closure proposal. Regularly reviewing bounty performance and transparency helps ensure that only active, valuable projects continue to receive treasury support.