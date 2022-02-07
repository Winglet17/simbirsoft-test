import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils";

function TeamMatchs() {
  const { id } = useParams();
  const [matches, setMatches] = useState([]);

  const getTeamMatches = async () => {
    const matchesData = await fetchData(`/teams/${id}/matches/`);
    setMatches(matchesData.matches);
  };

  useEffect(() => {
    getTeamMatches();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th align="left">Домашняя команда</th>
          <th align="left">Гостевая команда</th>
          <th align="left">Соревнование</th>
          <th align="left">Статус Матча</th>
        </tr>
      </thead>
      <tbody>
        {matches.map(({ homeTeam, awayTeam, competition, status }) => (
          <tr>
            <td>{homeTeam.name}</td>
            <td>{awayTeam.name}</td>
            <td>{competition.name}</td>
            <td>{status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export { TeamMatchs };
