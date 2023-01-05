import {
    Link
} from "react-router-dom";
import '../App.css'
import React from 'react'
import new1img from '../images/news1.png'
import new2img from '../images/news2.png'
import new3img from '../images/news3.png'
import new4img from '../images/news4.png'
import new5img from '../images/news5.png'
const News = () => {
    return (
        <div className='my-5 d-flex justify-content-center'>


            <div className='row my-5' id="news-cont">
                <div className="col-md-4 my-2">
                    <div className="card">
                        <img src={new1img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">PayPal enables transfer of digital currencies to external wallets</h5>
                            <p className="card-text">The move comes after nearly two years since PayPal enabled users to buy and sell crypto on its platform.
                                After rolling out the ability to buy and sell crypto on its platform in October 2020, PayPal is finally allowing users the ability to natively transfer, send...</p>
                            <Link to="/news1" className="btn btn-primary">Read More</Link>

                        </div>
                    </div>
                </div>
                <div className="col-md-4 my-2">
                    <div className="card">
                        <img src={new2img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Italian Parliament Approves 26% Crypto-Gains Tax in 2023 Budget</h5>
                            <p className="card-text">Prime Minister Giorgia Meloni's new bill also includes an incentive for those declaring crypto for tax purposes.Crypto traders in Italy will be subject to a 26% capital-gains tax starting in 2023, according to a new budget that won parliamentary approval on Thursday. ...</p>
                            <Link to="/news2" className="btn btn-primary">Read More</Link>

                        </div>
                    </div>
                </div>
                <div className="col-md-4 my-2">
                    <div className="card">
                        <img src={new3img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Microstrategy Buys More Bitcoin — Company's Crypto Holdings Grow to 132,500 BTC</h5>
                            <p className="card-text">Microstrategy is now holding approximately 132,500 bitcoin following its most recent purchases. This year, the world’s largest cryptocurrency has emerged as “the institutional-grade digital asset,” said Microstrategy founder Michael Saylor....</p>
                            <Link to="/news3" className="btn btn-primary">Read More</Link>

                        </div>
                    </div>
                </div>
                <div className="col-md-4 my-2">
                    <div className="card">
                        <img src={new4img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Bitcoin Miners Revenue Hits $9.55 Billion in 2022</h5>
                            <p className="card-text">2022 has been a rough and tough year for investors, traders, cryptocurrency businesses, and miners in general. The prolonged bear market, exacerbated by a series of catastrophic events, posed a threat to miners.
                                Miners were dealing with a variety of issues, including defaulted loans, quarterly ...</p>
                            <Link to="/news4" className="btn btn-primary">Read More</Link>

                        </div>
                    </div>
                </div>
                <div className="col-md-4 my-2">
                    <div className="card">
                        <img src={new5img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Mango Markets Exploiter Eisenberg Arrested in Puerto Rico</h5>
                            <p className="card-text">The investor drained $110 million in cryptocurrencies from the platform.Avraham Eisenberg, the crypto investor whose “highly profitable trading strategy” drained DeFi trading platform Mango Markets of crypto worth $110 million, was arrested Monday in Puerto Rico, court documents...</p>
                            <Link to="/news5" className="btn btn-primary">Read More</Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default News