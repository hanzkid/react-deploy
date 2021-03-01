
import Container from "@material-ui/core/Container";

import { Component } from "react";

import CrimeCard from './components/CrimeCard'



class App extends Component {
  
  constructor (props) {
    super(props)
    this.state = {
      crimeList : []
    }
  }

  componentDidMount () {
    fetch('https://api.fbi.gov/@wanted?pageSize=20&page=1&sort_on=modified&sort_order=desc').then((data) => console.log(data))
  }

  render() {
    return (
        <Container>
            <CrimeCard />
        </Container>
    );
  }
}

export default App;
