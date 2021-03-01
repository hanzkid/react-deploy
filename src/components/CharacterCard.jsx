import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import {Component} from "react";

class CharacterCard extends Component {

  render() {
    return (
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="{this.props.character.name}"
            height="220"
            image={this.props.character.image}
            title="{this.props.character.name}"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.character.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {this.props.character.status}, {this.props.character.species}, {this.props.character.origin.name}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default CharacterCard;
