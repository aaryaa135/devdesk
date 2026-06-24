function ProfileCard({ profile }) {

  return (
    <div>

      <img
        src={profile.avatar_url}
        alt="avatar"
        width="120"
      />

      <h2>{profile.name}</h2>

      <p>
        @{profile.username}
      </p>

    </div>
  );

}

export default ProfileCard;