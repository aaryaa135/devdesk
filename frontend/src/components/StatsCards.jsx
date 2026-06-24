function StatsCards({ stats, profile }) {

  return (
    <div>

      <h3>
        Followers: {profile.followers}
      </h3>

      <h3>
        Following: {profile.following}
      </h3>

      <h3>
        Repositories: {stats.total_repositories}
      </h3>

      <h3>
        Top Language: {stats.top_language}
      </h3>

    </div>
  );

}

export default StatsCards;