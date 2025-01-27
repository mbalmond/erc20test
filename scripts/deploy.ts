import hre from "hardhat";

export async function main() {
    console.log('Deploying AnyFlowERC20...')

    const args = [
        '0xcc0a2aaada824c6ffb354c2e938a8ae27fe8d6a4',   // _initialOwner
        1 * 10 ** 18,   // _initialSupply
        'BalmondKuat', // _name
        'BDSM',           // _symbol
    ] as const;

    const contract = await hre.viem.deployContract("AnyFlowERC20", args);

    console.log(`Contract AnyFlowERC20 deployed to: ${contract.address}`);
}

main()
    .then(() => process.exit(0));
