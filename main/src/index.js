import ReactDom from 'react-dom';
import './stylesheets/DashboardStyles.css';
import Aside from './components/Aside.js';
import Header from './components/Header.js';
import DisplayUI from './components/displayUI.js';
import {BrowserRouter,Route} from 'react-router-dom';
import Articles from './components/articles.js';
import People from './components/people.js';
import Books from './components/books.js';
import Help from './components/help.js';
import './stylesheets/DashboardStyles.css';
import data from './components/data.js';
import SingleArticle from './components/SingleArticle.js';
// import ErrorPage from './components/error.js';


ReactDom.render(<BrowserRouter>
    <Header />
    <main className='main'>
        <Aside />
        <section className='main-ui'>
        <Route path="/Articles" exact>
            <Articles data={data} />
        </Route>
        <Route path="/People" exact>
            <People />
        </Route>
        <Route path="/Books" exact>
            <Books />
        </Route>
        <Route path="/Help" exact>
            <Help />
        </Route>
        <Route path="/" exact>
            <DisplayUI />
        </Route>
        <Route path="/Articles/:id" component={SingleArticle} />
        </section>
        {/* <Route path={} >
            <ErrorPage />
        </Route> */}
    </main>
    
</BrowserRouter>, document.getElementById(`root`));