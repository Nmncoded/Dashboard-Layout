import ReactDom from 'react-dom';
import './stylesheets/DashboardStyles.css';
import Aside from './components/Aside.js';
import Header from './components/Header.js';
import DisplayUI from './components/displayUI.js';
import {BrowserRouter,Route} from 'react-router-dom';
// import Articles from './components/articles.js';
import EnhancedArticles from './components/articles.js'
import People from './components/people.js';
import EnhanceBooks from './components/books.js';
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
            {/* <Articles data={data} /> */}
            <EnhancedArticles />
        </Route>
        <Route path="/People" exact>
            <People />
        </Route>
        <Route path="/Books" exact>
            <EnhanceBooks />
        </Route>
        <Route path="/Help" exact>
            <Help />
        </Route>
        <Route path="/" exact>
            <DisplayUI />
        </Route>
        <Route path="/Articles/:id" component={SingleArticle} />
        {/* <Route  component={ErrorPage} /> */}
        </section>
    </main>
    
</BrowserRouter>, document.getElementById(`root`));