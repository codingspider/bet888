import Header from './components/Header'
import HeroBanner from './components/HeroBanner'
import PartnerBar from './components/PartnerBar'
import HotGames from './components/HotGames'
import BrandAmbassador from './components/BrandAmbassador'
import SportsMatches from './components/SportsMatches'
import ReferFriends from './components/ReferFriends'
import MobileApp from './components/MobileApp'
import Footer from './components/Footer'

function App() {
  return (
    <div style={{ minHeight: '100vh', bg: '#1a1a1a' }}>
      <Header />
      <HeroBanner />
      <PartnerBar />
      <HotGames />
      <BrandAmbassador />
      <SportsMatches />
      <ReferFriends />
      <MobileApp />
      <Footer />
    </div>
  )
}

export default App
