import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchData } from "../utils";
import "./CompetitionsListTeams.css";

function CompetitionsListTeams() {
  const { id } = useParams();
  const [teamsList, setTeamsList] = useState([]);
  const [pageNotFound, setPageNotFound] = useState(false);

  const getCompetitionsList = async () => {
    try {
      const teamsListData = await fetchData(`/competitions/${id}/standings`);
      setTeamsList(teamsListData.standings[0].table);
    } catch (error) {
      setPageNotFound(true);
    }
  };

  useEffect(() => {
    getCompetitionsList();
  }, []);

  if (pageNotFound) {
    return (
      <h1>
        Извините, но список команд не найден, попробуйте{" "}
        <Link to="/competitions">другую лигу</Link>
      </h1>
    );
  }

  return (
    <>
      <h1>Cписок Команд</h1>
      <ul className="teams">
        {teamsList.map(({ team }) => (
          <li key={team.id} className="team">
            <img src={team.crestUrl} alt="team crestUrl" height={25} />
            {team.name}{" "}
            <Link to={`/teams/${team.id}/matches/`}>расписание матчей</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export { CompetitionsListTeams };
