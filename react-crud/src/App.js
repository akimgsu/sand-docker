import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CreateCategory from './components/store/CreateCategory';
import Category from './components/store/Category';
import CreateItem from './components/store/CreateItem';
import EmptyPage from './components/store/EmptyPage';
import Header from './components/store/Header';
import Items from './components/store/Items';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Category />
          </Route>
          <Route path="/Items/:cate">
            <Items />
          </Route>
          <Route path="/create_item">
            <CreateItem />
          </Route>
          <Route path="/create_cate">
            <CreateCategory />
          </Route>
          <Route>
            <EmptyPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
