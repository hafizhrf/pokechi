import CardMUI from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMediaMUI from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'

interface Props {
  pokemon: Pokemon
}

const Card = styled(CardMUI)`
  height: 100%;
`

const CardMedia = styled(CardMediaMUI)`
  padding: 24px;
`
const CardMediaImg = styled.img`
  height: 360px;
  width: 100%;
  object-fit: contain;
`

const PokemonCard = ({ pokemon: { image, name, types } }: Props): React.ReactElement => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia>
          <CardMediaImg src={image} alt={name} />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {/* Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica */}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>{types.map((type) => `${type} `)}</CardActions>
    </Card>
  )
}

export default PokemonCard
