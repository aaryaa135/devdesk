function LanguageList({ languages }) {

  return (
    <div>

      <h2>Languages</h2>

      {
        Object.entries(languages).map(
          ([name, count]) => (

            <p key={name}>
              {name} : {count}
            </p>

          )
        )
      }

    </div>
  );

}

export default LanguageList;