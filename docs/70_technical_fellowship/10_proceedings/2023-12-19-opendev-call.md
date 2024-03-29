# 2023-12-19 Technical Fellowship OpenDev Call
[Forum Post](https://forum.polkadot.network/t/technical-fellowship-opendev-call-2023-12-19-notes/5356/1)

Notes from the December 2023 OpenDev call: [https://twitter.com/TheKusamarian/status/1737147856933298208 ](https://twitter.com/TheKusamarian/status/1737147856933298208)

# Small Updates

* New members: [Ross Bulat Rank 1 ](https://collectives.polkassembly.io/referenda/48?network=collectives)
* https://collectives.polkassembly.io/ got updated to a new version
* Tech Fellowship Website is in the works - [Issue ](https://github.com/polkadot-fellows/help-center/issues/4)
* RFCs Web page is being [discussed ](https://github.com/polkadot-fellows/RFCs/issues/53)

# Big Updates

## Polkadot 1.1

[Polkadot 1.1 ](https://github.com/polkadot-fellows/runtimes/issues/68) is about to be finished. It includes readiness for the Polkadot-Kusama bridge and several OpenGov payment improvements

### Polkadot-Kusama bridge

* [Add BEEFY capabilities to the Polkadot runtime ](https://github.com/polkadot-fellows/runtimes/pull/65)

BEEFY is getting ready for Polkadot. After validators rotate their keys to support BEEFY and it gets activated, the bridge is ready to be configured by OpenGov and then activated. It is projected that this can happen in January.

Follow for updates: [Polkadot-Kusama Bridge ](https://forum.polkadot.network/t/polkadot-kusama-bridge/2971)

### OpenGov spending improvements

* [Fellowship salary budget ](https://github.com/polkadot-fellows/runtimes/pull/121) is now ready
* first sub-treasury introduced with [Fellowship Treasury ](https://github.com/polkadot-fellows/runtimes/pull/109)
* new `treasury.spend()` call that allows Treasury spending in any asset!
* support for milestone-based proposals!

There is still some outstanding work to update confirmation times for OpenGov, which will come a bit later.

## Coretime

* about to be deployed to Rococo, including a coretime chain, migration of leases
* this will be a bare minimum version that could be deployed to Kusama at the beginning of next year
* initial prices for coretime were discussed (see also [this discussion ](https://forum.polkadot.network/t/initial-coretime-pricing/5187)). Gav feels the starting price can be as low as 200 DOT for a month
* take note that a fixed number of cores is allocated from the relay to coretime sales. Initially, it could be 5 cores.
* asked if there should be different rental periods, Gav strongly disagreed and suggested having only a fixed period of 4 weeks.

## Ethereum bridge

* there was a call regarding that last week
* Rococo bridge should be quite possibly live this year
* which would pave the way for the Ethereum-Kusama bridge to go live in January/February

## Elastic Scaling

* Q1 next year
[/quote]

