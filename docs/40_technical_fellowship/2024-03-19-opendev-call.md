# 2024-03-19 Technical Fellowship OpenDev Call

## Fellowship Updates

- New Members
    - Collective #81 [philoniare to Dan 1](https://collectives.polkassembly.io/referenda/81)
    - Collective #82 [Ermal Galeci to Dan 1](https://collectives.polkassembly.io/referenda/82)
- New Dashboard https://polkadot-fellows.github.io/dashboard/#/members
- Accepted RFCs
    - [RFC-13 Prepare Core runtime API for MBMs](https://polkadot-fellows.github.io/RFCs/approved/0013-prepare-blockbuilder-and-core-runtime-apis-for-mbms.html)
    - [RFC-0045: Lowering NFT Deposits on Asset Hub](https://polkadot-fellows.github.io/RFCs/approved/0045-nft-deposits-asset-hub.html#rfc-0045-lowering-nft-deposits-on-asset-hub)
    - [RFC-0078: Merkleized Metadata](https://polkadot-fellows.github.io/RFCs/approved/0078-merkleized-metadata.html)
        - superseded [RFC-46](https://github.com/polkadot-fellows/RFCs/pull/46)
            - Needed for  Ledger, Polkadot Vault, and Kampela signers
            - Will roll out in 1.3
- New Element channel for public consultation with the Tech Fellowship - https://app.element.io/#/room/#fellowship-open-channel:parity.io

## Hot Topics

### JAM & Polkadot 2.0 Roadmap

- JAM is a candidate design, it is not Polkadot 2.0
- We clarified the project dependencies to make JAM a reality
    - [Alice und Bob summary doc](https://hackmd.io/@alice-und-bob/polkadot2)
    - [Alice und Bob project tracking sheet](https://docs.google.com/spreadsheets/d/1YjeKrCjiQHu6szxHdMhR6fHywRT-w0cxou5Ep-UpJFQ/edit#gid=836474213)

#### Questions

- Oliver: How can we ensure we get different client implementations
    - Gavin sees two important things: Having a clear spec. And having proper incentives for different implementations
- Bryan: Ways for devs to participate in development?
    - Gavin: There will be a fund for developers that are helping to build it

#### ISMP as candidate implementation for XCMP

- Seun presented ISMP as a potential implementation of XCMP
- Gavin wasn’t against it :)

### Snowbridge

- Vincent from Snowbridge presented the problem of having to set the DOTETH exchange rate regularly in the BridgeHub storage to properly calculate weights for Ethereum transactions.
- Gavin suggested that users have to obtain wrapped ETH to pay for transactions. This way we could avoid complicating designs.

## Collectives

### Technical Fellowship

#### Release Cadence

- QA and release tempo were discussed.
- Bryan presented a proposal for a [standard release checklist](https://github.com/polkadot-fellows/runtimes/issues/140#issuecomment-1920399473)
- Basti mentioned that writing a QA bounty could be very helpful

#### Fellowship Secretary

Basti proposed to hire a Fellowship secretary: https://github.com/polkadot-fellows/help-center/issues/8

#### Salaries

- Salaries were accidentally 12_000_000 times the intended amount. Payouts luckily capped out at some defined limits.
- Bryan wrote a script to fix it: [Link](https://collectives.subsquare.io/fellowship/referenda/84)
- Three users got paid out too much and [refunded the excess amount](https://assethub-polkadot.subscan.io/account/13w7NdvSR1Af8xsQTArDtZmVvjE8XhWNdL4yed3iFHrUNCnS?tab=transfer)

## Roadmap

### Polkadot SDK

- The latest version during the call was [v1.8.0](https://github.com/paritytech/polkadot-sdk/releases/tag/polkadot-v1.8.0)
- The latest version as of writing this summary is [v1.9.0](https://github.com/paritytech/polkadot-sdk/releases/tag/polkadot-v1.9.0)

### Polkadot Runtime

- 1.1.3 was released as bugfix release
    - Controllers Stashes, Staking, Staking Ledgers may get corrupted
    - recover corrupted accounts
- [1.2](https://github.com/polkadot-fellows/runtimes/issues/140) - based on Polkadot SDK 1.7
    - state trie migration
    - BridgeHub: Add Snowbridge to Kusama and Polkadot runtimes
    - Encointer: update encounter runtime to 6.1
    - Coretime
        - refund leases that have not started #206
        - cancel auctions on coretime launch #215
        - add the Kusama Coretime Chain runtime #212
    - Peoplechain
    - [Async Backing Phase 1 on Kusama](https://github.com/polkadot-fellows/runtimes/pull/228)
- [1.3](https://github.com/polkadot-fellows/runtimes/issues/186)
    - Coretime on Polkadot
        - on-demand coretime → governance config
    - Async Backing on Polkadot and Kusama
- coretime chain end of june on polkadot
- Elastic Scaling is on the way, and internal testnet

### XCM

- XCM v4 is just a renaming release, it is removing the “Multi-” in Multilocation and Multiasset
- Bryan: [Improve XCM development and release process](https://forum.polkadot.network/t/improve-xcm-development-and-release-process/6497)
- It is suggested that all parachains test their XCM functionality on Rococo/Paseo

## Collectives

### Unbrick Collective

Chains can brick and need fast recovery. Bryan is proposing an Unbrick Collective

https://hackmd.io/zmBeWsX8Tki0APQieq9dTQ?view

## Coretime

### Agile Coretime

- [Async Backing Phase 1 on Kusama](https://github.com/polkadot-fellows/runtimes/pull/228)