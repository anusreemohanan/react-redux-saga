import logo from './logo.svg';
import './App.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import { UserList } from './components/UserList';
import { UserPosts } from './components/UserPosts';
import { UserComments } from './components/userComments';
import { AddUser } from './components/addUser';
//import ListUsers from './components/ListUsers';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <AddUser />
        <UserList/>
        <UserPosts />
        {/* <ListUsers/> */}
        <UserComments />

      </div>
    </Provider>
  );
}

export default App;
