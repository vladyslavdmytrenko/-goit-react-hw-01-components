import { FriendList } from './FriendList';
import { Profile } from './Profile';
import { Statistics } from './Statistics';

import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import transactions from './transactions.json';
import { TransactionHistory } from './TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        gap: '50px',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};
