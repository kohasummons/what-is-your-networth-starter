'use client';
import { useState } from 'react';

export default function Home() {
  const [walletAddress, setWalletAddress] = useState('');
  const [walletBalance, setWalletBalance] = useState('$0');
  const [isLoading, setIsLoading] = useState(false);

  // Currency formatter
  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const handleInputChange = (event) => {
    setWalletAddress(event.target.value);
  };

  const handleFetchWalletBalance = async () => {
    setIsLoading(true);
    if (walletAddress == '') {
      setIsLoading(false);
      return;
    }
    await getNetworthWithMoralis();
    setIsLoading(false);
  };

  // TODO: fetch wallet networth with moralis api
  const getNetworthWithMoralis = async () => {
    console.log('Hello ⚡');
  };

  return (
    <main className='relative min-h-[95vh] max-w-screen flex items-center justify-between p-24'>
      <div className='absolute bg-[#1f1f1f] px-6 py-2 top-8 left-1/2 -translate-x-1/2 flex items-center space-x-2'>
        <div className=''>What is your networth?</div>
      </div>
      <div className='mx-auto flex place-items-center'>
        <h1 className='text-9xl tracking-tighter '>{walletBalance}</h1>
      </div>
      <div className=' absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-between'>
        <div className='flex items-center space-x-2'>
          <div className='relative bg-[#1F1F1F] border-[#1a1a1a] rounded-md'>
            <input
              type='text'
              name='E0A'
              value={walletAddress}
              onChange={handleInputChange}
              placeholder='Enter wallet address'
              className='block p-3 text-sm appearance-none focus:outline-none bg-transparent w-96 focus-within:bg-transparent active:bg-transparent focus:bg-transparent'
            />
          </div>
          <button
            onClick={() => handleFetchWalletBalance()}
            className='bg-[#1f1f1f] rounded-md border border-[#1a1a1a] text-[#b1b1b1] px-4 py-3 flex items-center gap-2'
          >
            <p>Check Net Worth</p>
            {isLoading && (
              <span className=''>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                >
                  <path
                    fill='#888888'
                    d='M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z'
                    opacity='.5'
                  />
                  <path
                    fill='#888888'
                    d='M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z'
                  >
                    <animateTransform
                      attributeName='transform'
                      dur='1s'
                      from='0 12 12'
                      repeatCount='indefinite'
                      to='360 12 12'
                      type='rotate'
                    />
                  </path>
                </svg>
              </span>
            )}
          </button>
        </div>
      </div>
    </main>
  );
}
