import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home.js'
import ButtonAppBar from './Components/SearchBar'
import ContactUs from './Pages/ContactUs';
import PublicGrievancesOfficer from './Pages/PublicGrievancesOfficer';
import EssentialContactList from './Pages/EssentialContactList';
import EssentialList1 from './Pages/EssentialList1';
import EssentialList2 from './Pages/EssentialList2';
import EssentialList3 from './Pages/EssentialList3';
import EssentialList4 from './Pages/EssentialList4';
import EssentialList5 from './Pages/EssentialList5';
import ContactUsButton from './Components/Goahomepage/ContactUsButton';
import SimpleAccordion from './Components/Goahomepage/LangDropdown';
import AppFooter from './Components/Goahomepage/Footer';

function App() {
  return (
    <div className="App">
      {/* Header (Navigation Bar) */}
      <header className="App-header">
     <ContactUsButton/>
     <SimpleAccordion/>
      <ButtonAppBar/>
      </header>
      
      {/* Router - Pages */}
          <Switch>
            <Route path={process.env.PUBLIC_URL + '/'} exact > <Home/> </Route>
            <Route path={process.env.PUBLIC_URL + '/home'} > <Home/> </Route>
            <Route path={process.env.PUBLIC_URL + '/ContactUs'}  > <ContactUs/> </Route>
            <Route path={process.env.PUBLIC_URL + '/PublicGrievancesOfficer'}  > <PublicGrievancesOfficer/> </Route>
            <Route path={process.env.PUBLIC_URL + '/EssentialContactList'}  > <EssentialContactList/> </Route>
            <Route path={process.env.PUBLIC_URL + '/EssentialList1'}  > <EssentialList1/> </Route>
            <Route path={process.env.PUBLIC_URL + '/EssentialList2'}  > <EssentialList2/> </Route>
            <Route path={process.env.PUBLIC_URL + '/EssentialList3'}  > <EssentialList3/> </Route>
            <Route path={process.env.PUBLIC_URL + '/EssentialList4'}  > <EssentialList4/> </Route>
            <Route path={process.env.PUBLIC_URL + '/EssentialList5'}  > <EssentialList5/> </Route>
            
          </Switch>

      <AppFooter/>
    </div>
  );
  }

export default App;
