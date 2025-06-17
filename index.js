
export default function Home() {
  return (
    <div style={{ backgroundColor: 'black', color: 'white', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1>Welcome to GO COSMIC™</h1>
      <p>The signal is calling you.</p>
      <a href="/scan" style={{ marginTop: '20px', color: '#00ffff' }}>Open the Portal →</a>
    </div>
  );
}
