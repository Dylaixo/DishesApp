import { CardContent, Typography, CardMedia, Card } from '@mui/material';

//Defining urls to images in cards
const pizza = "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-sliced-into-six-slices_141793-2157.jpg"
const soup = "https://media.istockphoto.com/id/494154858/photo/hot-homemade-corn-chowder.jpg?s=612x612&w=0&k=20&c=NuwffkneEU9yGgu_SnSZd45wPB_MeJO5YBGfg70x-L0="
const sandwich = "https://media.istockphoto.com/id/1397193477/photo/club-sandwich-made-with-bacon-ham-turkey-cheese-lettuce-and-tomato.jpg?b=1&s=170667a&w=0&k=20&c=Sz2aFQ_oQeho9s435e37D88Svv0uHwewqB9ZVaDiUg4="
const dishes = [pizza, soup, sandwich]

function Cards() {
    return (
        <>
            <Card sx={{ maxWidth: 500 }}>
                <CardMedia
                    component="img"
                    height='300'
                    image={dishes[0]}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ maxWidth: 500 }}>
                <CardMedia
                    component="img"
                    height='300'
                    image={dishes[1]}
                    alt="Paella dish"
                />
                <CardContent >
                    <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                    </Typography>
                </CardContent>
            </Card>
            <Card sx={{ maxWidth: 500 }}>
                <CardMedia
                    component="img"
                    height='300'
                    image={dishes[2]}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}

export default Cards