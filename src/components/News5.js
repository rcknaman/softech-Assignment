import React from 'react'


import news5img from "../images/news5.png"
const News5 = () => {

    return (
        <div className='d-flex justify-content-center flex-column  news-item'>
            <h2 className='my-10 text-center' style={{ marginTop: "90px", textDecoration: "underline" }}>Microstrategy Buys More Bitcoin — Company's Crypto Holdings Grow to 132,500 BTC
            </h2>


            <div className='mt-5'>
                <img src={news5img} className="card-img-top" alt="..." />
            </div>
            

            <h5 className='my-3'>Mango Markets Exploiter Eisenberg Arrested in Puerto Rico</h5>
            <p>The investor drained $110 million in cryptocurrencies from the platform.</p>
            <p>Avraham Eisenberg, the crypto investor whose <a href='https://www.coindesk.com/markets/2022/11/22/mango-exploiter-gets-liquidated-after-roiling-aave-using-20m-of-borrowed-curve-tokens/' className='highGreen'>“highly profitable trading strategy”</a> drained DeFi trading platform Mango Markets of crypto worth $110 million, was           arrested Monday in Puerto Rico, court documents said.
</p>
            <p>The self-described game theorist admitted his role in draining Mango Markets’ treasury shortly after the incident in mid-October, and may now be the first U.S. resident to face charges for his role in manipulating a <a href='https://www.coindesk.com/learn/what-is-defi/' className='highGreen'>decentralized-finance</a> trading platform.</p>
            <p>Eisenberg faces charges of commodities fraud and commodities manipulation, according to a <a href='https://storage.courtlistener.com/recap/gov.uscourts.nysd.591629/gov.uscourts.nysd.591629.1.0.pdf' className='highGreen'>filing unsealed Tuesday</a>. The charges could see punishments ranging from fines to prison time.</p>
            <p>A deposition signed by FBI Special Agent Brandon Racz alleges Eisenberg “willfully and knowingly” manipulated the sale of a commodity – namely futures contracts on Mango Markets.</p>
            <p>“Eisenberg engaged in a scheme involving the intentional and artificial manipulation of the price of perpetual futures contracts on a cryptocurrency exchange called Mango Markets, and other manipulative and deceptive devices and contrivances.”</p>
        </div>



    )

}
export default News5