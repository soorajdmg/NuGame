async function main() {
    const [signer] = await ethers.getSigners();
  
    const tokenAddress = "address:0x9aE78e0B44547cb963106C8F50aE3f0bb23b5728";
    const Token = await ethers.getContractFactory("Token");
    const token = await Token.attach(tokenAddress);
  
    const balance = await token.balanceOf(signer.address);
    console.log("Balance of signer:", balance.toString());
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  