import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

function CharacterCard({character}) {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={character.name}
          height="220"
          image={character.image}
          title={character.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {character.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {character.status}, {character.species},{" "}
            {character.origin.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small">
          Add To Fav
        </Button>
        <Button size="small">
          Detail
        </Button>
      </CardActions>
    </Card>
  )
}

export default CharacterCard;
