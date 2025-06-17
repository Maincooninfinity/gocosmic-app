
import { useRouter } from 'next/router';

export default function Result() {
  const router = useRouter();
  const { zodiac, mood } = router.query;

  return (
    <div style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', padding: '2rem' }}>
      <h2>Your Transmission</h2>
      <p><strong>Zodiac:</strong> {zodiac}</p>
      <p><strong>Mood:</strong> {mood}</p>
      <p><strong>Planet:</strong> Neptune</p>
      <p><strong>Symbol:</strong> Silent Falcon</p>
      <p><strong>Code:</strong> NEP-07-FALCON</p>
      <p><strong>Message:</strong> You were not made for noise. Move in silence. Speak through your presence.</p>
      <p><strong>Style Guidance:</strong> Neptune Cloak Hoodie – for those who glide unseen.</p>
    </div>
  );
}
