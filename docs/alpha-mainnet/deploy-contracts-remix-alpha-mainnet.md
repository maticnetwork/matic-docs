# How to deploy a contract on Matic Network [via Remix]

### Pre-requisite
You will need to have Metamask installed on your browser. You will need to be logged in to Metamask.

Next, you will need to configure Matic alpha-mainnet RPC on Metamask. You can use the following link to understand how you can configure Matic alpha-mainnet RPC on metamask.

https://docs.matic.network/alpha-mainnet/conf-alpha-mainnet-metamask/

Once you have configured Matic alpha-mainnet on metamask, this guide will take you through deploying a sample contract on Matic alpha-mainnet.

### Deploying Contracts

We will use Remix for this tutorial. However, it is possible to deploy contracts on Matic by using tools such as Truffle and others. Go to https://remix.ethereum.org/

![Arch](images/contracts/ballot-code.png)

You will see we are already logged in on metamask and Matic alpha-mainnet is already configured

![Arch](images/contracts/metamask-address.png)

Next, we go ahead and add the code for a sample contract. You can copy the code from below

```js
pragma solidity >=0.4.22 <0.6.0;
contract Ballot {

    struct Voter {
        uint weight;
        bool voted;
        uint8 vote;
        address delegate;
    }
    struct Proposal {
        uint voteCount;
    }

    address chairperson;
    mapping(address => Voter) voters;
    Proposal[] proposals;

    /// Create a new ballot with $(_numProposals) different proposals.
    constructor(uint8 _numProposals) public {
        chairperson = msg.sender;
        voters[chairperson].weight = 1;
        proposals.length = _numProposals;
    }

    /// Give $(toVoter) the right to vote on this ballot.
    /// May only be called by $(chairperson).
    function giveRightToVote(address toVoter) public {
        if (msg.sender != chairperson || voters[toVoter].voted) return;
        voters[toVoter].weight = 1;
    }

    /// Delegate your vote to the voter $(to).
    function delegate(address to) public {
        Voter storage sender = voters[msg.sender]; // assigns reference
        if (sender.voted) return;
        while (voters[to].delegate != address(0) && voters[to].delegate != msg.sender)
            to = voters[to].delegate;
        if (to == msg.sender) return;
        sender.voted = true;
        sender.delegate = to;
        Voter storage delegateTo = voters[to];
        if (delegateTo.voted)
            proposals[delegateTo.vote].voteCount += sender.weight;
        else
            delegateTo.weight += sender.weight;
    }

    /// Give a single vote to proposal $(toProposal).
    function vote(uint8 toProposal) public {
        Voter storage sender = voters[msg.sender];
        if (sender.voted || toProposal >= proposals.length) return;
        sender.voted = true;
        sender.vote = toProposal;
        proposals[toProposal].voteCount += sender.weight;
    }

    function winningProposal() public view returns (uint8 _winningProposal) {
        uint256 winningVoteCount = 0;
        for (uint8 prop = 0; prop < proposals.length; prop++)
            if (proposals[prop].voteCount > winningVoteCount) {
                winningVoteCount = proposals[prop].voteCount;
                _winningProposal = prop;
            }
    }
}
```

The sample code we’ve chosen is a Ballot system where there are going to be Proposals, Voters, and Chairpersons.

Once you’ve added the code snippet you are now ready to go ahead and run a test on the contract to see if everything works as intended. 

We will deploy the contract by clicking on the Deploy button, i.e. specifically mentioning the number of proposals in a particular ballot.

We will add the number of proposals as 1 and click on Deploy. You will receive a popup from Metamask to confirm the transaction.

However, you may receive an alert telling you that you have, “insufficient funds” because you don’t have ETH in your account on Matic alpha-mainnet. You could use [Matic's faucet](https://faucet.matic.network) to get some Matic ETH in your account.

*Note that the ETH gained from the faucet can only be used for gas fees.*

Once you have Matic ETH in your account, you can then confirm the transaction.

![Arch](images/contracts/confirm-transaction.png)

The moment you click on Confirm, you’ll see how fast the contracts get deployed on Matic alpha-mainnet. If this were on Ethereum, it would usually take time to complete and have the contracts deployed. You will have the contract available in the “Deployed Contracts” list in the tab on the right-hand side.

![Arch](images/contracts/deployed-contract.png)

Now, you’ll see the list of functions within the contract displayed below. This sample contract contains primarily 4 functions:

* `delegate`
* `giveRightToVote`
* `vote`
* `winningProposal`

### Testing the contract

We will now call a function by adding parameters to the `vote` function and checking the output for it.

Add a value of 1 in the vote field and click on `vote`. What will happen now is, you will receive another pop-up from Metamask asking you to confirm the transaction. Once you confirm the transaction, the vote will be submitted.

And voila! That’s it. You have tested the contract now and everything works like a charm.

This is how easy is it to Deploy and work with contracts on Matic Network.

Cheers!
