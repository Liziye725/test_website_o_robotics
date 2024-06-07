import { Link } from 'react-router-dom'
import overview1 from '../../assets/home/FullAssembly3.png'
import overview2 from '../../assets/home/FullAssembly4.png'

import scenarioWeed from '../../assets/home/scenario-weed-big.png'
import scenarioGarbage from '../../assets/home/scenario-garbage-big.jpg'
import scenarioSnow from '../../assets/home/scenario-snow-big.png'

import './HomePage.css';

export default function HomePage() {
    return (
        <>
            <section>
                <div className='home-pictures'>
                    <div className='home-picture'>
                        <img src={overview1} alt="Overview 1" />
                        {/* <p>
                        Scheme of our robot
                    </p> */}
                    </div>
                    <div className='home-picture'>
                        <img src={overview2} alt="Overview 2" />
                        {/* <p>
                        It can work in different scenarios
                    </p> */}
                    </div>
                </div>
            </section>
            <section>
                <div className='intro-product'>
                    <p>It can work in different scenarios</p>
                </div>
            </section>
            <section>
                <div className='product-view'>
                    <div className='scenario-picture'>
                        <Link to={'/product/weedcleaning'} className='home-scenario'>
                            <img src={scenarioWeed} alt="Scenario 1" style={{ maxWidth: '1000px' }} />
                            <p>
                                Weed your yard
                            </p>
                        </Link>
                    </div>
                    <div className='scenario-picture'>
                        <Link to={'/product/garbagecleaning'} className='home-scenario'>
                            <img src={scenarioGarbage} alt="Scenario 2" style={{ maxWidth: '1000px' }} />
                            <p>
                                Clean your garden
                            </p>
                        </Link>
                    </div>
                    <div className='scenario-picture'>
                        <Link to={'/product/snowcleaning'} className='home-scenario'>
                            <img src={scenarioSnow} alt="Scenario 3" style={{ maxWidth: '1000px' }} />
                            <p>
                                Remove the snow
                            </p>
                        </Link>
                    </div>

                </div>
            </section>
        </>
    )
}