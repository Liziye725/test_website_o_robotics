import React from 'react';
import './AboutPage.css';
import logo from '../../assets/logo/logo.png';
import TeamMember1 from '../../assets/team/TeamMember_AlfOlsen.jpg';
import TeamMember2 from '../../assets/team/TeamMember_AndyHoskins.jpg';
import TeamMember3 from '../../assets/team/TeamMember_KlausLisberg.png';
import TeamMember4 from '../../assets/team/TeamMember_ZiyeLi.jpg';
// import TeamMember5 from '../../assets/team/';
// import TeamMember6 from '../../assets/team/';
// import TeamMember7 from '../../assets/team/';
// import TeamMember8 from '../../assets/team/';

export default function AboutPage() {
    return (
        <>
        <div>
            <section>
                <h1>Our Goals</h1>
                {/* <img src={logo} alt="Logo" style={{ maxWidth: '300px', maxHeight: '150px' }} /> */}
                <p>At O-Robotics, our mission is to promote a sustainable life by developing innovative outdoor cleaning robots. We believe that electric-powered machines can help reduce the carbon footprint and create a cleaner, greener environment for all.</p>
            </section>
            <section>
                <h1>Our Team</h1>
                <div className='team-members'>
                    <div className='team-member'>
                        <img src={TeamMember1} alt="Team Member 1" />
                        <h3>Alf Olsen</h3>
                        <p>CEO, with 10+ experience in technical project management</p>
                    </div>
                    <div className='team-member'>
                        <img src={TeamMember2} alt="Team Member 2" />
                        <h3>Andy Hoskins</h3>
                        <p>TBC</p>
                    </div>
                    <div className='team-member'>
                        <img src={TeamMember3} alt="Team Member 3" />
                        <h3>Klaus Lisberg</h3>
                        <p>TBC</p>
                    </div>
                    <div className='team-member'>
                        <img src={TeamMember4} alt="Team Member 4" />
                        <h3>Ziye Li</h3>
                        <p>Lead Data Scientist</p>
                    </div>
                    {/* <div className='team-member'>
                        <img src={TeamMember5} alt="Team Member 5" />
                        <h3>Ziye Li</h3>
                        <p>Lead Data Scientist</p>
                    </div>
                    <div className='team-member'>
                        <img src={TeamMember6} alt="Team Member 6" />
                        <h3>Ziye Li</h3>
                        <p>Lead Data Scientist</p>
                    </div>
                    <div className='team-member'>
                        <img src={TeamMember7} alt="Team Member 7" />
                        <h3>Ziye Li</h3>
                        <p>Lead Data Scientist</p>
                    </div>
                    <div className='team-member'>
                        <img src={TeamMember8} alt="Team Member 8" />
                        <h3>Ziye Li</h3>
                        <p>Lead Data Scientist</p>
                    </div> */}
                </div>
            </section>

            <section>
                <h1>Our Achievements</h1>
                <p>Since our founding in 2022, we have made significant strides in the outdoor cleaning robot market. Our flagship model, the O-One, has been recognized for its innovative design and eco-friendly performance, winning several industry awards and garnering positive reviews from customers.</p>
            </section>
            <section>
                <h1>Our Vision</h1>
                <p>Looking ahead, we are dedicated to expanding our product line and pushing the boundaries of what's possible in the field of outdoor robotics. By continuously innovating and collaborating with industry partners, we aim to make a lasting impact on the way people maintain their outdoor spaces, contributing to a more sustainable future for all.</p>
            </section>
        </div>
               
        
        </>
    );
}