import { Link } from 'react-router-dom'
import overview1 from '../../assets/home/FullAssembly3.png'
import overview2 from '../../assets/home/FullAssembly4.png'

export default function HomePage() {
    return (
        <>
        <section>
            <div className='home-pictures'>
                <div className='home-picture'>
                    <img src={overview1} alt="Overview 1" style={{ maxWidth: '1000px'}} />
                    <p>
                        Scheme of our robot
                    </p>
                </div>
                <div className='home-picture'>
                    <img src={overview2} alt="Overview 2"  style={{ maxWidth: '1000px'}} />
                    <p>
                        Scheme of our robot
                    </p>
                </div>
            </div>

        </section>
        </>
    )
}