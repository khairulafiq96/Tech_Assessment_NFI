# NFI Technical Test (Frontend)

As per the requirements listed, users are able to
- Connect to the wallet with multiple chain selection
- Display the address
- Change the chain and display the chain of the connected wallet

# How to run the app
Install the dependencies
> npm i

Start the app
> npm start

# Security concerns
- As the web app implements the web3modal library, the projectId is required from https://cloud.walletconnect.com/.
- To ensure the ease of running the app, the keys are stored in the code repo. 
- The key will be deleted within 2 weeks of the job application submission.
- As Ropsten & Rinkerby are depecrated, Goerli & Sepolia chain are available.

# Notable libraries
- web3modal
- wagmi
- tailwindcss