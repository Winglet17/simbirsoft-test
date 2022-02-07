import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NavBar } from "./Navbar";
import { PageNotFound } from "./PageNotFound";
import { CompetitionsList } from "./CompetitionsList";
import { CompetitionsListTeams } from "./CompetitionsListTeams";
import { CompetitionsListMatches } from "./CompetitionsListMatches";
import { MatchesList } from "./MatchesList";
import { TeamMatchs } from "./TeamMatches";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to="competitions" />} />
          <Route path="/" element={<NavBar />}>
            <Route path="competitions" element={<CompetitionsList />} />
            <Route
              path="competitions/:id/teams"
              element={<CompetitionsListTeams />}
            />
            <Route
              path="competitions/:id/matches"
              element={<CompetitionsListMatches />}
            />
            <Route path="teams/:id/matches" element={<TeamMatchs />} />
            <Route path="matches" element={<MatchesList />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
