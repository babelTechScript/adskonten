export default function Hero() {
  return (
    <div className='hero min-h-screen bg-red-600'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-5xl font-bold text-white lg:text-7xl'>
            ADS Konten
          </h1>
          <div className='text-lg text-white lg:text-2xl'>
            <a
              href='https://bit.ly/instagram-adskonten'
              className='link'
              target='_blank'
            >
              Instagram
            </a>{' '}
            |
            <a
              href='https://bit.ly/tiktok-adskonten'
              className='link'
              target='_blank'
            >
              TikTok
            </a>{' '}
            |
            <a
              href='https://bit.ly/snackvideo-adskonten'
              className='link'
              target='_blank'
            >
              Snack Video
            </a>
          </div>
          <p className='pb-6 text-lg text-white'>
            Content Creator dari Pangkal Pinang, Babel, Indonesia
          </p>
          <a
            href='https://www.youtube.com/channel/UCq8tikfU-AE2GpbZF6YPQag?sub_confirmation=1'
            className='btn btn-error'
          >
            subscribe
          </a>
          {/* trakteer link */}
          {/* <a
            href='https://trakteer.id/adskonten/tip'
            target='_blank'
            className='flex justify-center pt-6'
          >
            <img
              id='wse-buttons-preview'
              src='https://cdn.trakteer.id/images/embed/trbtn-red-2.png'
              alt='Trakteer Saya'
              className='h-10'
            />
          </a> */}
        </div>
      </div>
    </div>
  );
}
