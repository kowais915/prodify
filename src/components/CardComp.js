import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Container from '@mui/material/Container';


const CardComp = () => {
    return ( 


        <div className="card">
            <Container>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    title="Cool Card"
                    subheader = "Nice Subheader"
                />

            </Card>
            </Container>
        </div>
     );
}
 
export default CardComp;