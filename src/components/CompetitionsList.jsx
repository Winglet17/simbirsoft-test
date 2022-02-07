import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchData } from "../utils";

function CompetitionsList() {
  const [competitionsList, setCompetitionsList] = useState([]);

  const getCompetitionsList = async () => {
    const competitionsListData = await fetchData("/competitions");
    setCompetitionsList(competitionsListData.competitions);
  };

  useEffect(() => {
    getCompetitionsList();
  }, []);

  return (
    <>
      <h1>Cписок Соревнований</h1>
      <ul>
        {competitionsList.map(({ id, name }) => (
          <li key={id}>
            {name} <Link to={`${id}/teams`}>список команд</Link>{" "}
            <Link to={`${id}/matches`}>расписание лиги</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export { CompetitionsList };
