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
                        Everyone loves pizza! Create your own pizza size, choose its diameters and the number of slices that can be used to define your dream pizza.
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
                        Want to eat something hot? Create your soup and add a level of spiciness to it.
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
                        Want to eat something small and light? You can create your own sandwich that requires a number of slices of bread.
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}

export default Cards
