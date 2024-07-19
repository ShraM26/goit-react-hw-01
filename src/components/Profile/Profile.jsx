import css from './Profile.module.css'

const Profile = ({ name, tag, location, image, stats: { followers, views, likes }, }) => {

  return (
    <div className={css.profile}>
      <div className={css.infoBox}>
        <img className={css.avatar} src={image} alt='foto' />
        <p className={css.userName}>{name}</p>
        <p className={css.userInfo}>@{tag}</p>
        <p className={css.userInfo}>{location}</p>
      </div>

      <ul className={css.numberBox}>
        <li className={css.number}>
          <span className={css.userNumberText}>Followers</span>
          <span className={css.userNumber}>{followers}</span>
        </li>
        <li className={css.numberCnt}>
          <span className={css.userNumberText}>Views</span>
          <span className={css.userNumber}>{views}</span>
        </li>
        <li className={css.number}>
          <span className={css.userNumberText}>Likes</span>
          <span className={css.userNumber}>{likes}</span>
        </li>
      </ul>
    </div>)
}

export default Profile;