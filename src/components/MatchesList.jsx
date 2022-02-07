import { useState, useEffect } from "react";
import { fetchData } from "../utils";

function MatchesList(params) {
  const [matchesList, setMatchesList] = useState([]);

  const getMatchesList = async () => {
    const matchesListData = await fetchData("/matches");
    setMatchesList(matchesListData.matches);
  };

  useEffect(() => {
    getMatchesList();
  }, []);

  return (
    <>
      <h1>Список Матчей</h1>
      <table>
        <thead>
          <tr>
            <th align="left">Соревнование</th>
            <th align="left">Матч</th>
            <th align="left">Статус</th>
          </tr>
        </thead>
        <tbody>
          {matchesList.map(
            ({ id, homeTeam, awayTeam, competition, score, status }) => {
              const matchScore = `${score.fullTime.homeTeam}:${score.fullTime.awayTeam}`;

              return (
                <tr key={id}>
                  <td>
                    <img
                      src={competition.area.ensignUrl}
                      height={15}
                      alt={"competition area ensign"}
                    />
                    {competition.name}
                  </td>
                  {status === "SCHEDULED" ? (
                    <td>
                      {homeTeam.name} - : - {awayTeam.name}
                    </td>
                  ) : (
                    <td>
                      {homeTeam.name} {matchScore} {awayTeam.name}
                    </td>
                  )}
                  <td>{status}</td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </>
  );
}

export { MatchesList };
