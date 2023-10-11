import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendIcon from '@mui/icons-material/Send';
import image1 from '../img/image1.jpg'
import image2 from '../img/image2.jpg'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const Cards = (props) => {

    return (
        <Card sx={{ maxWidth: 400 }}>
            <Grid container spacing={2} alignContent={'center'}>
                <Grid item xs={1}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red, margin: 0 }} aria-label="recipe">
                                <CardMedia
                                    component="img"

                                    image={image2}
                                    alt="Paella dish"
                                    sx={{}}
                                />
                            </Avatar>
                        }


                    />
                </Grid>
                <Grid item xs={6} sx={{ marginLeft: '25px' }}>

                    <Typography pt={3} fontWeight={600} paddingLeftLeft={'1px'}>
                        {props?.name}
                    </Typography>

                    <Typography color="text.secondary" sx={{ fontSize: '10px' }}>
                        {props?.date}
                    </Typography>

                </Grid>
            </Grid>

            <CardContent>
                <Typography variant="body2" color="text.secondary" textAlign={'start'}>
                    {props?.text}
                </Typography>
            </CardContent>
            {props?.image ?
                <>
                    <div style={{ paddingInline: '12px' }}>
                        <CardMedia

                            component="img"
                            image={props?.image}
                            alt="Paella dish"

                        />
                    </div></> : null}



            <CardActions disableSpacing style={{ paddingInline: '12px' }}>

                <Grid container spacing={2} display={'flex'} justifyContent={'space-between'}>
                    <Grid item >
                        <Grid container display={'flex'} spacing={2}>
                            <Grid item>
                                <Grid container sx={{ color: 'red', fontSize: '11px' }}>
                                    <Grid item ><FavoriteIcon sx={{ fontSize: 15, color: 'red' }} /></Grid>
                                    <Grid item> <Typography sx={{ fontSize: 10 }}>{props?.likes} likes</Typography></Grid>

                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid container sx={{ fontSize: '11px' }}>
                                    <Grid item ><ChatBubbleOutlineIcon sx={{ fontSize: 15 }} /></Grid>
                                    <Grid item> <Typography sx={{ fontSize: 10 }}>{props?.comments}comments</Typography></Grid>

                                </Grid>
                            </Grid>
                        </Grid>


                    </Grid>
                    <Grid item>
                        <Grid container sx={{ fontSize: '11px' }}>
                            <Grid item ><SendIcon sx={{ fontSize: 15 }} /></Grid>
                            <Grid item><Typography sx={{ fontSize: 10 }}>{props?.shares} shares</Typography></Grid>

                        </Grid>

                    </Grid>
                </Grid>



            </CardActions>

        </Card>
    )
}

export default Cards