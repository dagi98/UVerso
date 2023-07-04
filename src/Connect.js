import abi from "./abi/abi.json" assert { type: "json" };

let web3;
let contract;

const connect = new Promise((resolve, reject) => {
  if (typeof window.ethereum == "undefined") {
    reject("MetaMask is not installed");
  }
  window.ethereum.enable().then(() => {
    web3 = new Web3(window.ethereum);
    contract = new web3.eth.Contract(abi,"0x360E00247d93286feAe901B27a92Be36DdBFa951");
    console.log(contract);
    web3.eth.getAccounts().then((accounts) => {
      contract.methods
      .totalSupply()
      .call({from: accounts[0]})
      .then((data) => {
        contract.methods
        .getBuildings()
        .call({from: accounts[0]})
        .then((buildings) => {
          resolve({supply: data, buildings: buildings});
        });
      });
    });
  }).catch((error) => {
    reject(error);
  });
});



export default connect;
