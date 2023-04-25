import Head from 'next/head';
import About from '../components/About';
import Contact from '../components/Contact';
import Header from '../components/Header';
import HeaderMobile from '../components/HeaderMobile';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

export default function Home() {
  return (
    <div>
      <Head>
        <title>JB</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <Header />
        <div className="md:snap-y md:overflow-y-scroll h-[100vh] md:snap-mandatory flex flex-col">
          <section
            className="lg:hidden h-[100vh] md:snap-start  flex flex-col items-end bg-cover bg-bottom bg-no-repeat "
            style={{
              backgroundImage: `url('https://res.cloudinary.com/dbmw0xoar/image/upload/v1682440774/JB/headerBG_eu8ody.jpg')`,
            }}
          >
            <HeaderMobile />
          </section>
          <section
            className="h-[100vh] md:snap-start  flex flex-col items-end bg-cover bg-bottom bg-no-repeat "
            style={{
              backgroundImage: `url('https://res.cloudinary.com/dbmw0xoar/image/upload/v1682246740/JB/aboutBG_ew9y7u.jpg')`,
            }}
          >
            <About />
          </section>
          <section
            className="h-[100vh] md:snap-start   flex flex-col items-end bg-cover bg-bottom bg-no-repeat"
            style={{
              backgroundImage: `url('https://res.cloudinary.com/dbmw0xoar/image/upload/v1682247708/JB/skillsBG_jopn5m.jpg')`,
            }}
          >
            <Skills />
          </section>
          <section
            className="h-[100vh] md:snap-start   flex flex-col items-end bg-cover bg-bottom bg-no-repeat"
            style={{
              backgroundImage: `url('https://res.cloudinary.com/dbmw0xoar/image/upload/v1682248050/JB/projectsBG_qnxmhn.jpg')`,
            }}
          >
            <Projects />
          </section>
          <section
            className="h-[100vh] md:snap-start   flex flex-col items-end bg-cover bg-bottom bg-no-repeat"
            style={{
              backgroundImage: `url('https://res.cloudinary.com/dbmw0xoar/image/upload/v1682248152/JB/contactBG_xbuv7i.jpg')`,
            }}
          >
            <Contact />
          </section>
        </div>
      </main>
    </div>
  );
}
