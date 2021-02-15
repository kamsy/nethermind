import React, { Children } from "react";
import "./style/App.scss";
import Checkmark from "./svg/Checkmark";
import ArrowRight from "./svg/ArrowRight";
import GreenArrow from "./svg/GreenArrow";

const Button = ({ hasIcon, title, icon }) => (
    <button
        type="button"
        className={`button d-flx al-i-c ${
            hasIcon ? "j-c-sb white-bg" : "j-c-c"
        }`}>
        <span>{title}</span>
        {icon ? icon : null}
    </button>
);

function App() {
    const stockIdeas = [
        "Select your stocker",
        "Write your analysis",
        "Allocate virtual dollars to your idea"
    ];
    const priceListArr = [
        { label: "Current Price", amt: "13.98M" },
        { label: "Target Price", amt: "13.98M" },
        { label: "Market Cap", amt: "10.75B" }
    ];
    const longPosArr = [
        { label: "Expected Returns", amt: "20.84%" },
        { label: "Inception Price", amt: "$1.20" },
        { label: "Target Price", amt: "$1.20" }
    ];
    return (
        <div className="App">
            <div className="container">
                <section className="section-1 d-flx j-c-sb al-i-fs">
                    <div className="stock-ideas-cont br-10 d-flx-c j-c-sb">
                        <h2>Submit your stock idea in three simple steps</h2>
                        <div className="_bot-cont d-flx flx-w j-c-sb al-i-fe">
                            <ul>
                                {Children.toArray(
                                    stockIdeas.map(idea => (
                                        <li className="d-flx al-i-c">
                                            <Checkmark />
                                            <span className="txt">{idea}</span>
                                        </li>
                                    ))
                                )}
                            </ul>
                            <Button
                                hasIcon
                                title="Submit a stock idea"
                                icon={<ArrowRight />}
                            />
                        </div>
                    </div>
                    <div className="guidelines-cont br-10 d-flx-c j-c-sb">
                        <h2>Need some Inspiration of Stock ideas?</h2>
                        <div className="d-flx j-c-c btn-cont">
                            <Button
                                hasIcon
                                title="Watch our Guidelines"
                                icon={<ArrowRight />}
                            />
                        </div>
                    </div>
                </section>
                <section className="section-2">
                    <div className="hdr-cont d-flx">
                        <h2>Trade Feed</h2>
                        <h2>Virtually Co-Invest in the best ideas (405)</h2>
                    </div>
                    <div className="bdy-cont br-10">
                        <div className="_top br-10 d-flx j-c-sb flx-w">
                            <div className="_left">
                                <h3 className="cap-me">Delta plus group</h3>
                                <span className="sm-txt cap-me">dlta.pa</span>
                                <div className="labels-cont flx-w d-flx">
                                    <span className="cap-me label">
                                        australia
                                    </span>
                                    <span className="cap-me label">
                                        materials
                                    </span>
                                </div>
                                <ul className="price-list">
                                    {Children.toArray(
                                        priceListArr.map(({ label, amt }) => (
                                            <li className="d-flx al-i-c flx-w j-c-sb">
                                                <span>{label}</span>
                                                <span>{amt}</span>
                                            </li>
                                        ))
                                    )}
                                </ul>
                            </div>
                            <div className="_right">
                                <div className="lng-pos br-10 d-flx al-i-c">
                                    <GreenArrow />
                                    <span className="cap-me">
                                        long position
                                    </span>
                                </div>
                                <ul className="breakdown">
                                    {Children.toArray(
                                        longPosArr.map(({ label, amt }) => (
                                            <li className="d-flx-c al-i-fe">
                                                <span className="label">
                                                    {label}
                                                </span>
                                                <span className="amt">
                                                    {amt}
                                                </span>
                                            </li>
                                        ))
                                    )}
                                </ul>
                            </div>
                        </div>

                        <div className="_mid d-flx flx-w">
                            <div className="_col">
                                <span className="_label">attachements</span>
                                <span className="_txt">Not specified</span>
                            </div>
                            <div className="_col">
                                <span className="_label">time frame</span>
                                <span className="_txt">6 months to 1 year</span>
                            </div>
                            <div className="_col">
                                <span className="_label">conviction level</span>
                                <span className="indicator cap-me">high</span>
                            </div>
                            <div className="_col">
                                <span className="_label">catalyst</span>
                                <span className="_txt">Not specified</span>
                            </div>
                        </div>

                        <div className="_bot br-10 d-flx-c">
                            <span className="summary-hdr cap-me">
                                executive summary
                            </span>
                            <span className="summary-bdy">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nullam volutpat aliquam quam a
                                fringilla. Cras eu ligula eget arcu tempor
                                convallis. Nullam mattis tristique ipsum, nec
                                tincidunt metus ultricies in. Proin suscipit
                                neque maximus, vestibulum sapien non,
                                pellentesque dolor. Suspendisse eleifend urna
                                vel diam placerat venenatis non eget ex. In
                                purus quam, volutpat non dolor eget, auctor
                                fringilla libero. Nullam tempor finibus felis
                                quis hendrerit. Vivamus nec mi vel velit
                                fermentum pellentesque in quis ex. Vestibulum at
                                mattis urna, sed varius urna. Morbi eu enim et
                                mauris lacinia cursus. Duis convallis tortor sit
                                amet enim dignissim accumsan. Donec interdum
                                volutpat venenatis. Nulla facilisi.
                            </span>
                        </div>

                        <div className="_footer d-flx al-i-c j-c-sb">
                            <div className="left-cont">
                                <span>Idea submitted</span>
                                <span className="port-txt">10.10.10</span>
                            </div>
                            <div className="mid-cont">
                                <Button
                                    title={"co-invest in this idea".toUpperCase()}
                                />
                            </div>
                            <div className="right-cont">
                                <span>Live Trade</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;
