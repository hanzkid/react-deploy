import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from "@material-ui/core/Typography";

import { Component } from "react";

import CharacterCard from './components/CharacterCard'



class App extends Component {
  
  constructor (props) {
    super(props)
    this.state = {
      characters : []
    }
  }

  componentDidMount () {
    fetch('https://rickandmortyapi.com/api/character')
      .then((resp) => resp.json())
      .then((data) => 
        this.setState({
          characters: data.results
        })
      )
  }

  render() {
    return (
      <Container>
        <Grid container spacing={3}>
            <Grid item xs={12}>
            <Typography variant="h2" color="textSecondary" component="p">
              Rick and morty character
            </Typography>
            </Grid>
            {this.state.characters.map((character) => {
              return <Grid item xs={4}><CharacterCard character={character} key={character.id}/></Grid>
            })}
        </Grid>
      </Container>
    );
  }
}

export default App;
