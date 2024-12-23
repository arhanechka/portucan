import collage from './collage.jpg';
import './App.css';
import HeaderMenu from './HeaderMenu';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Main from './components/Main';
import Immigration from './components/Immigration';
import Visas from './components/Visas';
import logo from './logo.png'
import Contacts from './components/Contacts';
import Links from './components/Links';
import JobSeeker from './components/visas/JobSeeker';
import Addresses from './components/visas/Addresses';
import PassiveIncome from './components/visas/PassiveIncome';
import Nif from './components/portugal/Nif';
import Freelancer from './components/visas/Freelancer'
import Nhr from './components/portugal/Nhr';
import ChildResidency from './components/visas/ChildResidency';
import FamilyMember from './components/visas/FamilyMember';
import WorkContract from './components/visas/WorkContract';
import Entrepreneur from './components/visas/Enterprener';
import StudyVisa from './components/visas/StudyVisa';
import LanguageVisa from './components/visas/LanguageVisa';
import MovingChecklist from './components/canada/Steps';
import Cra from './components/canada/Cra';
import Election217 from './components/canada/Election217';
import Property from './components/canada/Property';
import MovingToPortugal from './components/canada/Moving';
import MovingGuide from './components/canada/MovingGuide';
import Banks from './components/visas/Banks';
import CadBanks from './components/canada/CadBanks';
import PortuBanks from './components/portugal/PortuBanks';
import PortProperty from './components/portugal/PortProperty';
import Documents from './components/documents/Documents';


function App() {
  return (
    <Router>
      <div className="App">
      <img src={logo} className='App-logo' alt="logo" />
        <HeaderMenu />
        <Link to="/">
          <img src={collage} className="App-image" alt="logo" />
        </Link>
        <div className="App-main">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/portucan" element={<Main />} />
            <Route path="/immigration" element={<Immigration />} />
            <Route path="/immigration/visas" element={<Visas />} />
            <Route path="/immigration/documents" element={<Documents />} />
            {/* <Route path="/steps-in-canada" element={<StepsInCanada />} /> */}
          {/* <Route path="/steps-in-portugal" element={<StepsInPortugal />} />
          <Route path="/our-service" element={<OurService />} />
          <Route path="/about" element={<About />} /> */}
          <Route path="/contacts" element={<Contacts />} /> 
          <Route path="/links" element={<Links />} /> 
          <Route path="/visas/lookForJob" element={<JobSeeker />} /> 
          <Route path="/immigration/addresses" element={<Addresses />} /> 
          <Route path="/immigration/bank" element={<Banks />} /> 

          <Route path="/visas/hasPassiveIncome" element={<PassiveIncome />} /> 
          <Route path="/visas/isFreelancer" element={<Freelancer />} /> 
          <Route path="/visas/hasChild" element={<ChildResidency />} /> 
          <Route path="/visas/hasFamilyMember" element={<FamilyMember />} /> 
          <Route path="/visas/hasWorkContract" element={<WorkContract />} /> 
          <Route path="/visas/hasBusiness" element={<Entrepreneur />} /> 
          <Route path="/visas/willingToStudy" element={<StudyVisa />} /> 
          <Route path="/visas/willingToLearnLanguage" element={<LanguageVisa />} /> 
           
          <Route path="/steps-in-canada/ircc" element={<MovingChecklist />} />
          <Route path="/steps-in-canada/taxes" element={<Cra />} />
          <Route path="/steps-in-canada/Election217" element={<Election217 />} />
          <Route path="/steps-in-canada/property" element={<Property />} />
          <Route path="/steps-in-canada/moving" element={<MovingToPortugal />} />
          <Route path="/steps-in-canada/movingGuide" element={<MovingGuide />} />
          <Route path="/steps-in-canada/banks" element={<CadBanks />} />
          
          
          
          <Route path="/steps-in-portugal/nif" element={<Nif />} />
          <Route path="/steps-in-portugal/nhr" element={<Nhr />} />
          <Route path="/steps-in-portugal/bank" element={<PortuBanks />} />
          <Route path="/steps-in-portugal/property" element={<PortProperty />} />


          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
