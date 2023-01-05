import React from 'react'
import news1img from "../images/news1.png"
const News1 = () => {

    return (
        <div className='d-flex justify-content-center flex-column  news-item'>
            <h2 className='my-10 text-center' style={{ marginTop: "90px" ,textDecoration:"underline"}}>PayPal enables transfer of digital currencies to external wallets</h2>

            
                <div className='mt-5'>
                    <img src={news1img} className="card-img-top" alt="..." />
                </div>
                <p className='mt-5'>
                The move comes after nearly two years since PayPal enabled users to buy and sell crypto on its platform.
                </p>
            <p>

                After rolling out the ability to buy and sell crypto on its platform in October 2020, PayPal is finally allowing users the ability to natively transfer, send and receive digital assets between PayPal and other wallets and exchanges. As of Tuesday, the feature is available to select U.S. users, with the feature expanding to all eligible U.S. users in the coming weeks. The first batch of supported coins consists of Bitcoin</p>
                <p>
                <b>BTC</b> <a href='https://cointelegraph.com/bitcoin-price' className='highGreen'>$16,704</a>, Ether  <b>ETH</b> <a href='https://cointelegraph.com/ethereum-price' className='highGreen'>$1,217</a>, Bitcoin Cash<b> BCH</b> <a href='https://cointelegraph.com/bitcoin-cash-price-index' className='highGreen'>$100</a>, and Litecoin <b>LTC</b> <a href='https://cointelegraph.com/ltc-price-index' className='highGreen'>$74.58.</a></p>
                <p>In addition, customers who transfer their crypto onto PayPal can spend it via Checkout at millions of merchant terminals. The company has been granted a full Bitlicense by the New York Department of Financial Services for the conduct.</p>
                <p>Users would simply need to log in to their accounts and enter the crypto section of the application to start transferring coins. Users are generally required to complete a one-time ID verification before the procedure.</p>
                <p>Crypto transfers to recipients outside of PayPal would incur a network fee based on their respective blockchains, but transfers between PayPal users will not incur such fees. To protect users' privacy, the firm generates a new recipient address for each transaction into one's PayPal account. PayPal will also not charge fees for incoming transfers,</p>
                <p>The company is also working to integrate other forms of cryptocurrency services, such as central bank digital currencies, to boost its digital footprint. It is also exploring the possibility of launching its own stablecoin, dubbed "PayPal Coin." The discovery came after a developer found evidence of such a stablecoin within the source code of the company's iPhone app.</p>



        </div>



    )

}
export default News1