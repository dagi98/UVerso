/*import abi from "./abi/abi.json" assert { type: "json" };

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
*/
/*
import abi from "./abi/abi.json" assert { type: "json" };

const connect = new Promise((resolve, reject) => {
  if (typeof window.ethereum === "undefined") {
    reject("MetaMask is not installed");
  }

  // Configura el proveedor de Web3 para utilizar el proveedor de MetaMask
  const Web3 = window.Web3;
  const web3 = new Web3(window.ethereum);

  // Reemplaza '0x360E00247d93286feAe901B27a92Be36DdBFa951' con la dirección de tu contrato
  const contractAddress = '0x360E00247d93286feAe901B27a92Be36DdBFa951';
  const contract = new web3.eth.Contract(abi, contractAddress);
  
  // Cambia 'TU_DIRECCION_DE_CUENTA' por la dirección de tu cuenta de MetaMask
  const accountAddress = '0x15fA019eD0C3b0089B5bc4dD05fdD569db2d5D17';
  
  // Conecta MetaMask a la cuenta específica
  web3.eth.accounts.wallet.add(accountAddress);

  // Obtiene la cuenta conectada en MetaMask
  const account = web3.eth.accounts.wallet[0];

  // Desbloquea manualmente la cuenta ingresando la contraseña en un prompt
  const password = prompt('Please enter your MetaMask account password:');
  web3.eth.personal.unlockAccount(account.address, password)
    .then(() => {
      // Realiza las operaciones que necesites con la cuenta desbloqueada
      web3.eth.getAccounts().then((accounts) => {
        contract.methods
          .totalSupply()
          .call({ from: accounts[0] })
          .then((data) => {
            contract.methods
              .getBuildings()
              .call({ from: accounts[0] })
              .then((buildings) => {
                resolve({ supply: data, buildings: buildings });
              });
          });
      });
    })
    .catch((error) => {
      reject(error);
    });
});
*/





export default connect;
