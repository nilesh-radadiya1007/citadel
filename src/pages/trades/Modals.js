import { AddSharp, ArrowDownward, AssistantPhoto, AttachFile, ChatBubbleSharp, PriorityHigh, SettingsSuggest, UnfoldLessOutlined } from '@mui/icons-material';
import { Autocomplete, Backdrop, Box, Button, Card, CardActions, CardContent, CardMedia, Checkbox, Divider, Fade, FormControl, FormControlLabel, FormGroup, Grid, IconButton, InputLabel, Modal, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextareaAutosize, TextField, Typography, List, ListDivider, ListItem, ListItemContent, ListItemButton } from '@mui/material';
import React, { useState } from 'react'
import Viewer from 'react-viewer';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
function createData(card, Date, CCV, Method, Value, VPP, Issue, Remaining, Car, Actions) {
    return { card, Date, CCV, Method, Value, VPP, Issue, Remaining, Car, Actions };
}
const rows = [
    createData('Frozen', 10, 10, 10, 10, 10, 10, 10, 10, 10),
];

const Modals = () => {
    const defaultProps = {
        getOptionLabel: (option) => option.title,
    };
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [value, setValue] = React.useState(null);

    const top100Films = [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 },
        { label: 'The Godfather: Part II', year: 1974 },
        { label: 'The Dark Knight', year: 2008 },
        { label: '12 Angry Men', year: 1957 },
        { label: "Schindler's List", year: 1993 },
        { label: 'Pulp Fiction', year: 1994 },
        {
            label: 'The Lord of the Rings: The Return of the King',
            year: 2003,
        },
        { label: 'The Good, the Bad and the Ugly', year: 1966 },
        { label: 'Fight Club', year: 1999 },
        {
            label: 'The Lord of the Rings: The Fellowship of the Ring',
            year: 2001,
        },
        {
            label: 'Star Wars: Episode V - The Empire Strikes Back',
            year: 1980,
        },
        { label: 'Forrest Gump', year: 1994 },
        { label: 'Inception', year: 2010 },
        {
            label: 'The Lord of the Rings: The Two Towers',
            year: 2002,
        },
        { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
        { label: 'Goodfellas', year: 1990 },
        { label: 'The Matrix', year: 1999 },
        { label: 'Seven Samurai', year: 1954 },
        {
            label: 'Star Wars: Episode IV - A New Hope',
            year: 1977,
        },
    ]

    const data2 = [
        {
            src: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236',
            title: 'Night view',
            description: '4.21M views',
        },
        {
            src: 'https://images.unsplash.com/photo-1527549993586-dff825b37782',
            title: 'Lake view',
            description: '4.74M views',
        },
        {
            src: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36',
            title: 'Mountain view',
            description: '3.98M views',
        },
    ];

    // image
    const [activeIndex, setActiveIndex] = useState(0);
    const [visible, setVisible] = useState(false);
    let images = [
        {
            src: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg",
            title: "image title 1"
        },
        {
            src: "https://images.unsplash.com/photo-1534628526458-a8de087b1123",
            title: "image title 2"
        },
        {
            src: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg",
            title: "image title 1"
        },
    ];


    // image over
    return (
        <>
            <Grid container disableGutter spacing={1} ml={0} mt={0} pt={2} px={2} sx={{ width: '100%', backgroundColor: '#E0E0E0' }}>
                <Grid item xs={3}  >
                    <Card style={{ padding: "10px" }} >
                        <div style={{ maxHeight: "450PX", height: "100%", overflow: "hidden", overflowY: "scroll" }} >
                            <CardContent style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: "sticky", top: "0px", width: "100%", zIndex: "99", background: "#FFF" }}>
                                <Typography style={{ letterSpacing: 3, fontSize: 12 }}>MESSAGE</Typography>
                                <CardMedia>
                                    <ArrowDownward />
                                    <UnfoldLessOutlined />
                                </CardMedia>
                            </CardContent>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: "10px" }}>
                                <Typography variant="caption" color="GrayText">9/13/2022 12:13:17 PM</Typography>
                                <Typography variant="caption" color="GrayText">Barbaque</Typography>
                            </div>

                            <CardContent style={{ backgroundColor: '#37474F', borderRadius: 11, marginBottom: "10px" }}>
                                <Typography color='white' style={{ fontSize: 14, marginBottom: "10px" }}>Please upload the photo of only the back of the packaging the card came in so I can match it to the reciept.Thanks!</Typography>
                                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'white' }}>
                                    <Typography style={{ fontSize: 11 }}>9/13/2022 12:13:17 PM</Typography>
                                    <Typography style={{ fontSize: 11 }}>Barbaque</Typography>
                                </div>
                            </CardContent>
                            <CardContent style={{ backgroundColor: '#37474F', borderRadius: 11, marginBottom: "10px" }}>
                                <Typography color='white' style={{ fontSize: 14, marginBottom: "10px" }}>Are you still there?</Typography>
                                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'white' }}>
                                    <Typography style={{ fontSize: 11 }}>9/13/2022 12:13:17 PM</Typography>
                                    <Typography style={{ fontSize: 11 }}>Barbaque</Typography>
                                </div>
                            </CardContent>
                            <CardContent style={{ backgroundColor: '#37474F', borderRadius: 11, marginBottom: "10px" }}>
                                <Typography color='white' style={{ fontSize: 14, marginBottom: "10px" }}>Please upload the photo of the FRONT of the card. Then type in the card info. Thanks!</Typography>
                                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'white' }}>
                                    <Typography style={{ fontSize: 11 }}>9/13/2022 12:13:17 PM</Typography>
                                    <Typography style={{ fontSize: 11 }}>Barbaque</Typography>
                                </div>
                            </CardContent>
                            <CardContent style={{ backgroundColor: '#37474F', borderRadius: 11, marginBottom: "10px" }}>
                                <Typography color='white' style={{ fontSize: 14, marginBottom: "10px" }}>Please upload the photo of the FRONT of the card. Then type in the card info. Thanks!</Typography>
                                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'white' }}>
                                    <Typography style={{ fontSize: 11 }}>9/13/2022 12:13:17 PM</Typography>
                                    <Typography style={{ fontSize: 11 }}>Barbaque</Typography>
                                </div>
                            </CardContent>

                            <CardContent style={{ backgroundColor: '#37474F', borderRadius: 11, marginBottom: "10px" }}>
                                <Typography color='white' style={{ fontSize: 14, marginBottom: "10px" }}>Please upload the photo of the FRONT of the card. Then type in the card info. Thanks!</Typography>
                                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'white' }}>
                                    <Typography style={{ fontSize: 11 }}>9/13/2022 12:13:17 PM</Typography>
                                    <Typography style={{ fontSize: 11 }}>Barbaque</Typography>
                                </div>
                            </CardContent>
                            <CardContent style={{ backgroundColor: '#37474F', borderRadius: 11, marginBottom: "10px" }}>
                                <Typography color='white' style={{ fontSize: 14, marginBottom: "10px" }}>Please upload the photo of the FRONT of the card. Then type in the card info. Thanks!</Typography>
                                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'white' }}>
                                    <Typography style={{ fontSize: 11 }}>9/13/2022 12:13:17 PM</Typography>
                                    <Typography style={{ fontSize: 11 }}>Barbaque</Typography>
                                </div>
                            </CardContent>
                            <CardContent style={{ backgroundColor: '#37474F', borderRadius: 11, marginBottom: "10px" }}>
                                <Typography color='white' style={{ fontSize: 14, marginBottom: "10px" }}>Please upload the photo of the FRONT of the card. Then type in the card info. Thanks!</Typography>
                                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'white' }}>
                                    <Typography style={{ fontSize: 11 }}>9/13/2022 12:13:17 PM</Typography>
                                    <Typography style={{ fontSize: 11 }}>Barbaque</Typography>
                                </div>
                            </CardContent>
                            <CardContent style={{ backgroundColor: '#37474F', borderRadius: 11, marginBottom: "10px" }}>
                                <Typography color='white' style={{ fontSize: 14, marginBottom: "10px" }}>Please upload the photo of the FRONT of the card. Then type in the card info. Thanks!</Typography>
                                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'white' }}>
                                    <Typography style={{ fontSize: 11 }}>9/13/2022 12:13:17 PM</Typography>
                                    <Typography style={{ fontSize: 11 }}>Barbaque</Typography>
                                </div>
                            </CardContent>

                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: "10px" }}>
                                <Typography variant="caption" color="GrayText" >9/13/2022 12:13:17 PM</Typography>
                                <Typography variant="caption" color="GrayText">Barbaque</Typography>
                            </div>
                            <Divider />
                        </div>

                        <CardContent style={{ my: 3 }}>
                            <Autocomplete
                                disablePortal
                                id="auto-complete"
                                autoComplete
                                options={top100Films}
                                renderInput={(params) => <TextField {...params} label="Favorite Message" />}
                            
                            />
                        </CardContent>
                        <CardContent>
                            <TextareaAutosize
                                aria-label="minimum height"
                                minRows={3}
                                style={{ width: 335, height: 100, borderRadius: 10, boxShadow: '#FFCA28' }}
                            />
                        </CardContent>
                        <CardContent>
                            <Stack alignContent='left' justifyContent='end' my={2} spacing={2} direction="row">
                                <Button variant="contained" color="inherit" size="small" onClick={handleOpen}><AddSharp />ADD IMAGE</Button>

                                <Button variant="contained" color="info" size="small"><ChatBubbleSharp />SEND</Button>
                            </Stack>
                        </CardContent>
                        <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            open={open}
                            onClose={handleClose}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                                timeout: 500,
                            }}
                        >
                            <Fade in={open}>
                                <Box sx={style}>
                                    <Typography id="transition-modal-title" variant="h6" component="h2">
                                        Upload Image
                                    </Typography>
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: 12 }}>
                                        <AttachFile />
                                        <TextField fullWidth style={{ mt: 10 }} id="standard-basic" label="Standard" variant="standard" />
                                    </div>
                                    <Divider sx={{ mt: 3 }} />
                                    <Box alignContent='left' justifyContent='end' display='flex' my={2} sx={{ gap: 2 }}>
                                        <Button style={{ backgroundColor: '#EEEEEE', color: 'black' }} onClick={handleClose}>CANCEL</Button>
                                        <Button style={{ backgroundColor: '#9E9E9E', color: 'gray' }}>UPLOAD</Button>
                                    </Box>
                                </Box>
                            </Fade>
                        </Modal>

                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", overflow: "hidden", overflowX: "scroll" }}>
                            {images.map((item, index) => {
                                return (
                                    <Card key={index.toString()} sx={{ minWidth: '100px', height: "130px", p: 0.5, mx: 1.5, curser: "pointer" }}
                                        onClick={() => {
                                            setVisible(true);
                                            setActiveIndex(index);
                                        }}
                                    >
                                        <img
                                            alt="upload-image"
                                            src={item.src}
                                            style={{ width: "100%", height: "100%", objectFit: "fill", cursor: "pointer" }}
                                        />
                                    </Card>
                                );
                            })}
                        </div>

                        <Viewer
                            visible={visible}
                            onClose={() => {
                                setVisible(false);
                            }}
                            zoomSpeed={0.2}
                            images={images}
                            activeIndex={activeIndex}
                            downloadable
                        />
                    </Card>
                </Grid>
                <Grid item xs={9}>
                    <Card style={{ padding: "10px" }} >
                        <Typography variant='h6' style={{ letterSpacing: 2 }} >RELEASE BOX</Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 4 }}>
                            <FormGroup row sx={{ px: 1 }} >
                                <FormControlLabel control={<Checkbox />} sx={{ '& .MuiSvgIcon-root': { fontSize: 22 }, '& .MuiFormControlLabel-label': { fontSize: 15 } }} label="Has Alam" />
                                <FormControlLabel control={<Checkbox />} sx={{ '& .MuiSvgIcon-root': { fontSize: 22 }, '& .MuiFormControlLabel-label': { fontSize: 15 } }} label="Unassigned Or Mine" />
                                <Button variant="contained" color="inherit" size="small" disabled sx={{ me: 4 }} >
                                    RELEASE WITH OPTION<SettingsSuggest />
                                </Button>
                                <FormControlLabel sx={{ '& .MuiSvgIcon-root': { fontSize: 22 }, '& .MuiFormControlLabel-label': { fontSize: 15 }, ml: 1 }} control={<Checkbox />} label="Hash Chargeback" />
                            </FormGroup>
                            <Stack spacing={2} direction="row">
                                <Button variant="contained" color="inherit" size="small">
                                    MARK <PriorityHigh />
                                </Button>
                                <Button variant="contained" color="error" size="small">
                                    FLAG <AssistantPhoto />
                                </Button>

                            </Stack>
                        </Box>
                        <Typography variant="overline" display="block" gutterBottom><b>Trades:</b> raj1234@gmail.com, hsgs@gmail.com, hitesh415@gmail.com</Typography>
                    </Card>
                    <Box my={4} style={{ backgroundColor: '#fff', boxShadow: '#FAFAFA', height: 60, alignItems: 'center', display: 'flex', marginBottom: 15, marginTop: 15 }}>
                        <Typography variant='h6' mx={2} style={{ alignItems: 'center', letterSpacing: 2 }}>USER TRACKING</Typography>
                    </Box>
                    <TableContainer component={Paper} >
                        <Typography variant='h6' sx={{ letterSpacing: 2, mx: 2, my: 3 }}>PAYMENTS</Typography>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Card</TableCell>
                                    <TableCell>Date</TableCell>
                                    <TableCell>CCV</TableCell>
                                    <TableCell>Method</TableCell>
                                    <TableCell>Value</TableCell>
                                    <TableCell>VPP</TableCell>
                                    <TableCell>Issue</TableCell>
                                    <TableCell>Remaining</TableCell>
                                    <TableCell>Car</TableCell>
                                    <TableCell>Actions</TableCell>
                                    <TableCell />
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        
                                        <TableCell>{row.card}</TableCell>
                                        <TableCell>{row.Date}</TableCell>
                                        <TableCell>{row.CCV}</TableCell>
                                        <TableCell>{row.Method}</TableCell>
                                        <TableCell>{row.Value}</TableCell>
                                        <TableCell>{row.VPP}</TableCell>
                                        <TableCell>{row.Issue}</TableCell>
                                        <TableCell>{row.Remaining}</TableCell>
                                        <TableCell>{row.Car}</TableCell>
                                        <TableCell>{row.Actions}</TableCell>
                                        <TableCell><Button variant='contained' color="info" size="small" ><AddSharp /></Button></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </>
    )
}
export default Modals