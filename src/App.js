import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

  import Header from './components/Header';
  import Slide from './components/Slide';
  import Aboutus from './components/Aboutus';
  import Service from './components/Service';
  import Skill from './components/Skill';
  import Project from './components/Project';
  import Counter from './components/Counter';
  import Teammember from './components/Teammember';
  import Activites from './components/Activites';
  import News from './components/News';
  import Footer from './components/Footer';

  import About from './components/AboutComponents/About';
  import ServicePage from './components/ServiceComponents/ServicePage';
  import ServicePageDetail from './components/ServiceComponents/ServicePageDetail';
  import ScrollButton from './components/LayoutComponents/ScrollButton';
  import Firedata from './Firedata';


  function App() {
      return (
        <>
        {/* <Header />
          <Route index path="/" exact>
            <Slide />
            <Aboutus />
            <Service />
            <Skill />
            <Project />
            <Counter />
            <Teammember />
            <Activites />
            <News />
          </Route>
          <Switch>
            <Route path="/about" component={About}></Route>
            <Route path="/service" component={ServicePage}></Route>
            <Route path="/servicedetail" component={ServicePageDetail}></Route>
          </Switch>
        <Footer /> */}
        <ScrollButton />
        <Firedata />
      </>
      );
    }
  export default App;
