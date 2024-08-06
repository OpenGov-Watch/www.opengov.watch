# Treasury Basics

This chapter describes the basic mechanics of the Polkadot Treasury. If you are already familiar with it, you may skip this chapter.

The Treasury is controlled by OpenGov. It manages several accounts and is deeply connected to bounties and collectives (which we will collectively call subDAOs)

## **OpenGov**

OpenGov is the on-chain body that controls the Treasury and exercises other powers. All token holders can vote in referenda. Referenda are decided through simple majorities. Conviction voting allows token holders to lock tokens for extended amounts of time to increase the weight of their votes up to 6x. Different decision tracks exist to allow spending of smaller sizes to be made faster and require higher spending to show more support and take more time for consideration. Delegations allow voters to delegate their voting power on individual tracks to other accounts.

## **Treasury Composition**

The Treasury spans its influence over multiple accounts and subDAOs.

- The Treasury accounts
    - The Treasury “main account” on the relay chain
    - The Treasury accounts on each system chain
    - Notable is the multi-asset Treasury account on AssetHub, composed of DOT, USDT, USDC, etc
    - other related accounts, such as accounts on Hydration to facilitate streaming swaps
- SubDAOs
    - **Bounties** are social contracts about how to spend allocated funds. Bounties are controlled via a multisig-like mechanism
    - **Collectives** are institutionalized teams dedicated to a certain agenda (runtime development, evangelism)

## **Inflation and Burn**

The Treasury receives a flexible amount of DOT tokens via inflation. Currently, inflow is about 10m DOT per year. Inflation burns 1% of the tokens in the Treasury main account per 24-day spending period.

## **Spending**

The Treasury has two mechanisms to spend:

- Direct spending: A direct transfer into an account
- Bounty allocation: A transfer into a bounty account, to be spent through the bounty curators at a later point in time