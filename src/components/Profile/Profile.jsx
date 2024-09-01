import s from './Profile.module.css'
const Profile = ({name, tag, location, image, stats}) => {
    return (
    <div className={s.profile}>
  <div className={s.info}>
    <img
      src={image}
      alt="User avatar"
    />
    <p className={s.name}>{name}</p>
    <p>@{tag}</p>
    <p>{location}</p>
  </div>

  <ul className={s.stats}>
    <li>
      <span>Followers</span>
      <span className={s.stats_num}>{stats.followers}</span>
    </li>
    <li>
      <span>Views</span>
      <span className={s.stats_num}>{stats.views}</span>
    </li>
    <li>
      <span>Likes</span>
      <span className={s.stats_num}>{stats.likes}</span>
    </li>
  </ul>
</div>
  )
}
export default Profile