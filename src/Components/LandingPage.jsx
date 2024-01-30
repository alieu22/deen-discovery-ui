// Components/LandingPage.jsx
//import React from 'react';
import NavBar from './Navbar';
import ThoughtOfTheDay from './ThoughtOfTheDay';

// Import your images
import masjidImage from '../images/masjid.jpg';
import masjid1Image from '../images/masjid1.jpg';
import masjid2Image from '../images/masjid2.jpg';
import meccaImage from '../images/mecca.jpg';
import quran1Image from '../images/quran1.jpg';
import quran2Image from '../images/quran2.jpg';

const LandingPage = () => {
      console.log(masjidImage, masjid1Image, masjid2Image, meccaImage, quran1Image, quran2Image);

  return (
    <>
      <NavBar />
      <div className="landing-container">
        <section className="hero-section">
          <div className="hero-content">
            <h1>Welcome to Deen Discovery App</h1>
            <p>Discover knowledge and wisdom for your spiritual journey.</p>
          </div>
        </section>

        <section className="history-section">
          <h2>HISTORY</h2>
          <p>
            In or about the year 570, the child who would be named Muhammad and who would become the Prophet of one of the world great religions, Islam, was born into a family belonging to a clan of Quraysh, the ruling tribe of Mecca, a city in the Hijaz region of northwestern Arabia.
          </p>
          <img src={masjidImage} alt="Masjid" />
            <img src={masjid1Image} alt="Masjid1" />

        </section>

        <section className="mosque-section">
          <h2>MOSQUE</h2>
          <p>
            Islamic public place of prayer. The masjid jami, or “congregational mosque,” is the centre of community worship and the site of Friday prayer services.
          </p>
          <img src={meccaImage} alt="Mecca" />
        </section>

        <section className="rules-section">
          <h2>RULES FOR MOSQUES</h2>
          <p>
            When entering the mosque, a person should take off his shoes or sandals. Entering the mosque shall be done with the right foot first, while one utters blessings to Muhammad and his family.
          </p>
          {/* Add more content */}
        </section>

        <section className="events-section">
          <h2>EVENTS</h2>
          <p>Sun, 10/11/15 - 12:00 PM - Assim Al-Hakeem</p>
          <p>Sun, 10/11/15 - 12:00 PM - Yusuf Estes</p>
          {/* Add more events */}
        </section>

        <section className="contacts-section">
          <h2>CONTACTS</h2>
          <p>1 800 123 45 67</p>
          <p>4578 69th St, San Diego D04 89GR</p>
          <p>info@demolink.net</p>
        </section>

        <ThoughtOfTheDay />
      </div>
    </>
  );
};

export default LandingPage;
