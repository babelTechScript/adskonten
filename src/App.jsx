import Hero from './components/Hero';
import Shorts from './components/Shorts';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Hero />

      <section className='min-h-screen bg-white py-32'>
        <div className='text-center pb-12'>
          <h1 className='text-xl font-bold text-slate-900 lg:text-2xl'>
            Youtube Shorts
          </h1>
          <a
            href='https://www.youtube.com/channel/UCq8tikfU-AE2GpbZF6YPQag'
            className='link link-info text-lg'
          >
            @adskonten
          </a>
        </div>

        <Shorts />
      </section>

      <Footer />
    </>
  );
}
