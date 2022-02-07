import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils";

function CompetitionsListMatches() {
  const { id } = useParams();
  const [matches, setMatches] = useState([]);

  const getCompetitionMatches = async () => {
    const matchesData = await fetchData(`/competitions/${id}/matches`);
    setMatches(matchesData.matches);
  };

  useEffect(() => {
    getCompetitionMatches();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th align="left">Домашняя команда</th>
          <th align="left">Гостевая команда</th>
          <th align="left">Статус Матча</th>
        </tr>
      </thead>
      <tbody>
        {matches.map(({ homeTeam, awayTeam, status }) => (
          <tr>
            <td>{homeTeam.name}</td>
            <td>{awayTeam.name}</td>
            <td>{status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export { CompetitionsListMatches };
