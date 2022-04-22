import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route,useParams } from "react-router-dom";

  import ScrollToTop from './ScrollToTop';
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
  
  import ProjectPage from './components/ProjectComponents/ProjectPage';
  import ProjectPageDetail from './components/ProjectComponents/ProjectPageDetail';
  import NewsPage from './components/NewsComponents/NewsPage';

  function App() {
      return (
        <>
        <ScrollToTop>
          <Header />
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
              <Route path="/service" component={ServicePage} exact></Route>
              <Route path="/service/:id" ><ServicePageDetail /></Route>
              <Route path="/project" component={ProjectPage} exact></Route>
              <Route path="/project/:id" ><ProjectPageDetail /></Route>
              <Route path="/news" component={NewsPage}></Route>
            </Switch>
          <Footer />
          <ScrollButton />
        </ScrollToTop>
      </>
      );
    }
  export default App;
