import Head from 'next/head';
import About from '../components/About';
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>JB</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-primary-light">
        <Header />
        <div className="snap-y overflow-y-scroll h-[100vh]  snap-mandatory flex flex-col">
          <section className="h-[100vh] snap-start bg-green-500 flex flex-col items-end">
            <About />
          </section>
          <section className="h-[100vh] snap-start bg-red-800 flex flex-col items-end">
            <About />
          </section>
          <section className="h-[100vh] snap-start bg-blue-700 flex flex-col items-end">
            <About />
          </section>
          <section className="h-[100vh] snap-start flex flex-col items-end">
            <About />
          </section>
          <section className="h-[100vh] snap-start flex flex-col items-end">
            <About />
          </section>
        </div>
      </main>
    </div>
  );
}
