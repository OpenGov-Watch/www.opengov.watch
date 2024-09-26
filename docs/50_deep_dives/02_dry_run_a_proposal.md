# Simulate OpenGov Referenda in Chopsticks

This is a simplified explanation of how you can dry run your OpenGov referendum. This helps you avoid situations where a misconfigured proposal leads to failed execution.

It is based on Bryan Chen's explainer [here](https://hackmd.io/@xlc/H11BX5BLa).

Watch a video version of this guide [here](https://youtu.be/K6xccd1jJLw).

## Overview
What we will do is
1. create the extrinsic we typically submit as preimage to OpenGov and 
2. use its call data to execute with elevated permissions in a local copy of the chain.

In our example, we burn the Treasury (account `13UVJyLnbVp9RBZYFwFGyDvVd1y27Tt8tkntv6Q7JVPhFsTB`) by setting the balance to 0.


## Run your local simulation

1. Open the Developer portal - https://polkadot.js.org/apps/
2. Open the chain selector on the top left and switch to the chain of your choice
3. Open the chain selector again and select "Fork Locally"

![image](/img/dry_run_a_proposal/upload_a8300c140b13328d7fe64326411b6cc7.png)

You now have a forked version of the chain state in your browser. (It might take a minute to load)

In the "Network"->"Explorer" menu  can notice that the chain has "halted" and no further blocks are produced.

![image](/img/dry_run_a_proposal/upload_0d72625e2db28edfb08cebf7458a38ae.png)

You can now play around with your simulated chain.

## Create call data from extrinsic
At "Developer"->"Extrinsics" we configure the call:

We will call `balances.forceSetBalance` of the Treasury account `13UVJyLnbVp9RBZYFwFGyDvVd1y27Tt8tkntv6Q7JVPhFsTB` with a free balance of `0`.

![image](/img/dry_run_a_proposal/upload_ca2dc3d7b2d0ae6fd00d7dda381de32b.png)

We don't need to submit, we just need to copy the *encoded call **data***


## Execute the call data
Visit "Developer"->"Javascript" and paste replace the code in the textbox with this:

```
const number = (await api.rpc.chain.getHeader()).number.toNumber()
await api.rpc('dev_setStorage', {
 scheduler: {
   agenda: [
     [
       [number + 1], [
         {
           call: {
             Inline: '0x0508006d6f646c70792f7472737279000000000000000000000000000000000000000000'
           },
           origin: {
             origins: 'SmallSpender'
           }
         }
       ]
     ]
   ]
 }
})
await api.rpc('dev_newBlock')
```

At the place that says `Inline` insert your call data.

Change the `origin` to the appropriate name. You can find the Polkadot-specific ones [here](https://github.com/polkadot-fellows/runtimes/blob/main/relay/polkadot/src/governance/origins.rs).

Hit the "Play" button in the code box.

If the execution is successful, you see no error in the box to the right.

Check the block explorer events to see what happened and if it matches your expectations.

It will take some time (~30 seconds) for the first block to execute, so wait a bit on the explorer screen before getting nervous.

![image](/img/dry_run_a_proposal/upload_0dc33720aefe8d8d4f0ea4407f90c70d.png)

## Submit the real ref

You can now put the call data in a preimage and are ready to go.