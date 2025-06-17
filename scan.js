
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Scan() {
  const [zodiac, setZodiac] = useState('');
  const [mood, setMood] = useState('');
  const router = useRouter();

  const handleSubmit = () => {
    router.push(`/result?zodiac=${zodiac}&mood=${mood}`);
  };

  return (
    <div style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', padding: '2rem' }}>
      <h2>Scan Yourself</h2>
      <p>Select your zodiac sign and your mood today.</p>
      <select onChange={(e) => setZodiac(e.target.value)} value={zodiac}>
        <option value="">Select Zodiac</option>
        <option value="Aries">Aries</option>
        <option value="Taurus">Taurus</option>
        <option value="Gemini">Gemini</option>
        <option value="Cancer">Cancer</option>
        <option value="Leo">Leo</option>
        <option value="Virgo">Virgo</option>
        <option value="Libra">Libra</option>
        <option value="Scorpio">Scorpio</option>
        <option value="Sagittarius">Sagittarius</option>
        <option value="Capricorn">Capricorn</option>
        <option value="Aquarius">Aquarius</option>
        <option value="Pisces">Pisces</option>
      </select>
      <br /><br />
      <input type="text" placeholder="Enter your mood..." onChange={(e) => setMood(e.target.value)} />
      <br /><br />
      <button onClick={handleSubmit} style={{ padding: '10px 20px', backgroundColor: '#00ffff', color: 'black', border: 'none' }}>Receive My Symbol</button>
    </div>
  );
}
