import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
 buttons: [
    {
      label: 'Start',
    },
 ],
 image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmUwKfxQSMUPr7Se1EXaRGWcKn1R1oLQGmT3XoRNdXCEME/0.png`,
 post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});


export const metadata: Metadata = {
  title: 'Blockchain Terminologies',
  description: 'A frame telling the story of crypto terms',
  openGraph: {
    title: 'Blockchain Terminologies',
    description: 'A frame telling the story of crypto terms',
    images: [
      `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmUwKfxQSMUPr7Se1EXaRGWcKn1R1oLQGmT3XoRNdXCEME/0.png`, 
    ],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  console.log('NEXT_PUBLIC_BASE_URL:', process.env.NEXT_PUBLIC_BASE_URL);
  return (
    <>
      <h1>Blockchain uses</h1>
    </>
  );
}