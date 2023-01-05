import React from 'react'

import news2img from "../images/news2.png"

const News2 = () => {

    return (

        <div className='d-flex justify-content-center flex-column  news-item'>
            <h2 className='my-10 text-center' style={{ marginTop: "90px", textDecoration: "underline" }}>Italian Parliament Approves 26% Crypto-Gains Tax in 2023 Budget
            </h2>


            <div className='mt-5'>
                <img src={news2img} className="card-img-top" alt="..." />
            </div>
            <p className='mt-5'>
                The move comes after nearly two years since PayPal enabled users to buy and sell crypto on its platform.
            </p>
            <p>Crypto traders in Italy will be subject to a 26% capital-gains tax starting in 2023, according to a new budget that won parliamentary approval on Thursday.
                Italian Prime Minister Giorgia Meloni's 2023 expansionary budget – which was completed in a rush before the end of the year – features 21 billion euros ($22.3 billion) in tax breaks to assist businesses and households facing the energy crisis, Reuters <a href='https://www.reuters.com/markets/europe/italys-parliament-gives-final-approval-governments-2023-budget-2022-12-29/' className='highGreen'>reported</a>.</p>
            <p>In Italy, where crypto <a href='https://www.coindesk.com/policy/2022/10/05/italy-has-a-registry-of-73-unvetted-crypto-firms/' className='highGreen'>remains largely unregulated</a>, the 387-page budget legitimizes crypto assets by defining them as "a digital representation of value or rights, which can be transferred and stored electronically, using the technology of distributed ledger or similar technology."</p>
            <p>Italy's (and most recently <a  className='highGreen' href='https://www.coindesk.com/policy/2022/10/10/portuguese-proposal-would-enact-taxes-on-crypto-transfers-capital-gains/'>Portugal's</a>) move to introduce a capital-gains tax on crypto comes ahead of the implementation of the European Union's <a href='https://www.coindesk.com/policy/2022/11/04/eu-delays-vote-on-mica-crypto-legislation-until-february/' className='highGreen'>Markets in Crypto Assets (MiCA)</a> regulation that promises a licensing frameworks and stringent operating requirements for crypto-service providers in the 27-member bloc.
                The 26% rate applies to gains from crypto trading if they exceed 2,000 euros per tax period. As an incentive for declaring crypto profits, the new bill also sets a "substitute income tax" for investors at 14% of the value of the assets held as of Jan. 1, 2023, instead of the cost at the time of purchase.
            </p>
            <p>According to the new rules, losses from crypto investments can be deducted from profits and be carried forward.</p>

            <p>Investors, however, may require some additional guidance on what qualifies as a taxable event as the document also says, "the exchange between crypto assets having same characteristics and functions," doesn't constitute a "fiscal case."</p>
        </div>




    )


}
export default News2    