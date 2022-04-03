import ReactDom from 'react-dom';
import './stylesheets/DashboardStyles.css';
import Aside from './components/Aside.js';
import Header from './components/Header.js';
import DisplayUI from './components/displayUI.js';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
// import Articles from './components/articles.js';
import EnhancedArticles from './components/articles.js'
import People from './components/people.js';
import EnhanceBooks from './components/books.js';
import Help from './components/help.js';
import './stylesheets/DashboardStyles.css';
import userContext from './components/userContext';
import data from './components/data.js';
import SingleArticle from './components/SingleArticle.js';
import ErrorPage from './components/error.js';

console.log(userContext);
ReactDom.render(<BrowserRouter>
    <userContext.Provider value={data} >
    <Header />
    <main className='main'>
        <Aside />
        <section className='main-ui'>
            <Switch>
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
        <Route path="*" >
            <ErrorPage />
        </Route>
        </Switch>
        </section>
    </main>
    </userContext.Provider>
</BrowserRouter>, document.getElementById(`root`));