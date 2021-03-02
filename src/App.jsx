import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from "@material-ui/core/Typography";
import useFetch from './hooks/useFetch'
import CharacterCard from './components/CharacterCard'
import { Pagination } from '@material-ui/lab';
import { useState } from 'react'
import banner from './assets/img/banner.jpeg'; // Tell webpack this JS file uses this image

function App(){
  const [page,setPage] = useState(1)
  const [endpoint, setEndpoint] = useState('/character/?page=' + page);
  const [characters, info, error] = useFetch(endpoint);

  function changePage(event,value) {
    setPage(value)
    setEndpoint('/character/?page=' + page)
  }
  return (
    <Container>
      <Grid container spacing={3}>
          <Grid item xs={12}>
          <img fluid src={banner} />
          <Typography variant="h2" color="textSecondary" component="p">
            Rick and morty character
          </Typography>
          </Grid>
          {characters.map((character) => {
            return <Grid key={character.id} item xs={3}><CharacterCard character={character} key={character.id}/></Grid>
          })}
          <Grid container item xs={12} justify="center">
            <Pagination count={info.pages} page={page} onChange={changePage}/>
          </Grid>
      </Grid>
    </Container>
  );
}

export default App;
