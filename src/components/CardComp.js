import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CardActions from '@mui/material/CardActions';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';
import Button from '@mui/material/Button';


const CardComp = ({category, description, image, price, title}) => {
    return ( 


        <div className="card">
            <Container>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    title="Cool Card"
                    subheader = "Nice Subheader"
                />


                {/* card media goes below */}
                <CardMedia
                    component = 'img'
                    heigh = '70'
                    image = 'logo192.png'
                    alt='cool picture'
                
                />

                <CardContent>
                    <Typography variant='body2'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam facere voluptatem illo, nemo non officia labore ullam quasi ducimus maxime.
                    </Typography>

                   
                </CardContent>

                <CardActions>
                    <IconButton>
                            <FavoriteBorderIcon/>
                    </IconButton>

                    <IconButton>
                           <ShoppingCartOutlinedIcon/>
                    </IconButton>

                    <Button size='large' startIcon={<MonetizationOnRoundedIcon/>}>
                        Price
                    </Button>
                    
                </CardActions>
                
            </Card>
            </Container>
        </div>
     );
}
 
export default CardComp;