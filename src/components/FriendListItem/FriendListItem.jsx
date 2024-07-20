import css from '../FriendList/FriendList.module.css'

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.friendListItem}>
      <img src={avatar} alt="Avatar" width="48" className={css.avatar} />
          <p className={css.name}>{name}</p>
           <p className={isOnline ? css.online : css.offline}>{isOnline}</p>
    </div>
  );
};

export default FriendListItem


