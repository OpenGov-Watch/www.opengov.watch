import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Polkadot 2.0 Roadmap

This article highlights the current status of the developments.

<details>
    <summary>What is Polkadot 2.0?</summary>

    Polkadot 2.0 is a collective vision of where Polkadot is going. Simply said, Polkadot is going to become more flexible in what we can do with it.

    Here is a quick primer on what Polkadot 2.0 will focus on:

    <Tabs>
    <TabItem value="block-times" label="Block times">Parachains can now pick their blocktime. It could be 2 seconds or 2 days or anything in between. Only producing blocks when they are needed reduces wasted blockspace and makes everything cheaper.</TabItem>
    <TabItem value="cores" label="Cores">Parachains run on cores. These are like CPU cores on your computer. Some apps only require very little CPU time, some hardcore apps like games or Adobe Premiere require multiple cores. Same with Polkadot 2.0 - parachains will be able to only rent 1/10 of a core or rent multiple cores if they need extra power.</TabItem>
    <TabItem value="pricing" label="Pricing models">Previously, Polkadot had a complex auction model to rent out cores. This is getting replaced by more flexible rent models like "pay as you go" and monthly bulks (think "subscriptions").</TabItem>
    <TabItem value="constructs" label="Constructs">Previously, Polkadot cores could only power parachains. With Polkadot 2.0, the range of 'constructs' that Polkadot can support becomes broader: Smart contracts, zero knowledge rollups, UTXO (Bitcoin-like) systems, etc.</TabItem>
    </Tabs>

    To learn more, visit the [Polkadot Wiki](https://wiki.polkadot.network/docs/polkadot-direction)

</details>

[RFCs](https://github.com/polkadot-fellows/RFCs)

## Async Backing
- [What is it?](https://wiki.polkadot.network/docs/learn-async-backing)
- Latest status: "speeding towards launch on Kusama" (Source: 14th Feb on the Forum [here](https://github.com/paritytech/polkadot-sdk/issues/3226))
- Github [enablement checklist](https://github.com/paritytech/polkadot-sdk/issues/3226)

## Dynamic Block Times
- Preparations
  - [SDK Issue 3268](https://github.com/paritytech/polkadot-sdk/issues/3268)
  - [SDK PR 3298](https://github.com/paritytech/polkadot-sdk/pull/3298): Adding time as a primitive

## CoreJam
- [Draft](https://github.com/polkadot-fellows/RFCs/blob/006a9ff07c3d3bc5316c6bf63b05e966e694cc2d/text/corejam.md)