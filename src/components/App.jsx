// FriendListItem
import FriendList from './FriendList/FriendList';
import friendList from './FriendList/friendList.json';
// Portfolie
import Profile from './Profile/Profile';
import userData from "./Profile/userData.json";
// TransactionHistory
import  TransactionHistory  from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions.json';

import './App.css'
const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friendList} />
      <TransactionHistory items={transactions} />
    </>
  );
};


export default App;