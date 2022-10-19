import * as React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Autocomplete, Box, Button, Checkbox, Collapse, Divider, FormControl, FormControlLabel, FormGroup, FormLabel, IconButton, Input, InputLabel, Menu, MenuItem, Modal, Paper, Radio, RadioGroup, Stack, Switch, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tabs, TextareaAutosize, TextField, Tooltip, Typography, useTheme } from '@mui/material';
import { Add, Cancel, Delete, FilterAlt, RemoveRedEye, Replay, ViewStreamOutlined } from '@mui/icons-material';
import CheckIcon from '@mui/icons-material/Check';
import CreateIcon from '@mui/icons-material/Create';
import TheLayout from '../../common/TheLayout';
import SearchIcon from '@mui/icons-material/Search';

const styles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '96%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

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

const label = { inputProps: { 'aria-label': 'Switch demo' } };
function createData(label, messagetype, message, offerfiltertype, offers, tagfiltertype, tags, singleuse, active) {
    return {
        label, messagetype, message, offerfiltertype, offers, tagfiltertype, tags, singleuse, active,
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
        ],
    };
}
function createData2(offerfiltertype, offers, offertype, message, active, actions) {
    return {
        offerfiltertype, offers, offertype, message, active, actions,
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
        ],
    };
}

const drawerWidth = 240;

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}
function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const [editOpen, setEditOpen] = React.useState(false);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const opens = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClickEdit = () => {
        setEditOpen(true)
    }
    const handleeditClose = () => {
        setEditOpen(false)
    }

    const handleCloseopen = () => setEditOpen(false);
    return (

        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell align="left" sx={{ p: 1 }}>{row.label}</TableCell>
                <TableCell align="left" sx={{ p: 1 }} disablepadding >{row.messagetype}</TableCell>
                <TableCell align="left" sx={{ p: 1 }}>{row.message}</TableCell>
                <TableCell align="left" sx={{ p: 1 }}>{row.offerfiltertype}</TableCell>
                <TableCell align="left" sx={{ p: 1 }}><button style={{ backgroundColor: '#e0e0e0', borderRadius: 20, border: 0, padding: 5, width: 105, color: '#424242' }}>{row.offers}</button></TableCell>
                <TableCell align="left" sx={{ p: 1 }}>{row.tagfiltertype}</TableCell>
                <TableCell align="left" sx={{ p: 1 }}>{row.tags}</TableCell>
                <TableCell align="left" sx={{ color: 'green' }}><CheckIcon /></TableCell>
                <TableCell align="left" sx={{ color: 'green' }}><CheckIcon /></TableCell>
                <TableCell align="left" sx={{ color: '#616161' }}>
                    <>
                        <Tooltip title="edit">
                            <CreateIcon onClick={handleClickEdit} />
                        </Tooltip>
                        <Tooltip title="delete">
                            <Delete />
                        </Tooltip>
                    </>
                </TableCell>
                {
                    editOpen ?
                        // <AutoMessageEditModal editOpens={editOpen} onHides={()=> setEditOpen(false)} handleClickEdit={handleClickEdit}/>
                        <Modal
                            open={editOpen}
                            onClose={handleeditClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={styles}>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Update Message Rule
                                </Typography>
                                <TextField fullWidth id="standard-basic" label="Standard" variant="standard" />
                                <FormControl sx={{ my: 2 }} style={{ display: "flex", flexDirection: "row", alignItems: "center" }} >
                                    <FormLabel id="demo-row-radio-buttons-group-label" sx={{ mr: 2 }} >Offers Filter</FormLabel>

                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                    >
                                        <FormControlLabel value="female" control={<Radio />} label="All" />
                                        <FormControlLabel value="male" control={<Radio />} label="Whitelist" />
                                        <FormControlLabel value="other" control={<Radio />} label="Blacklist" />
                                    </RadioGroup>
                                </FormControl>
                                <FormControl sx={{ my: 2 }} style={{ display: "flex", flexDirection: "row", alignItems: "center" }} >
                                    <FormLabel id="demo-row-radio-buttons-group-label" sx={{ mr: 2 }} >Tags Filter</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                    >
                                        <FormControlLabel value="female" control={<Radio />} label="All" />
                                        <FormControlLabel value="male" control={<Radio />} label="Whitelist" />
                                        <FormControlLabel value="other" control={<Radio />} label="Blacklist" />
                                    </RadioGroup>

                                </FormControl>
                                <div>
                                    <Switch {...label} />Active
                                </div>
                                <div>
                                    <Switch {...label} disabled defaultChecked /> Single Use(message will only trigger once per trade)
                                </div>
                                <Autocomplete
                                    // {...defaultProps}
                                    id="disable-close-on-select"
                                    disableCloseOnSelect
                                    renderInput={(params) => (
                                        <TextField {...params} label="Trader" variant="standard" />
                                    )}
                                    sx={{ mb: 2 }}
                                />
                                <TextareaAutosize
                                    aria-label="minimum height"
                                    fullWidth
                                    placeholder="Message"
                                    style={{ width: '100%', height: 100 }}

                                />
                                <Stack justifyContent='end' spacing={2} direction="row" my={2}>
                                    <Button variant="contained" color="inherit" size="small" onClick={handleCloseopen}>
                                        Cancel
                                    </Button>
                                    <Button variant="contained" color="info" size="small">
                                        Mark
                                    </Button>

                                </Stack>
                            </Box>
                        </Modal>
                        :
                        ""
                }
                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={opens}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                    <MenuItem onClick={handleClose} sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'white' }}>
                        <Typography sx={{ fontSize: 13, letterSpacing: 2 }}>SELECTED USER</Typography>
                        <Cancel sx={{ mx: 2 }} />
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                    <MenuItem onClick={handleClose}>Demo</MenuItem>
                    <MenuItem onClick={handleClose}>Demo</MenuItem>
                    <MenuItem onClick={handleClose}>Demo</MenuItem>
                    <MenuItem onClick={handleClose}>Demo</MenuItem>
                    <MenuItem onClick={handleClose}>Demo</MenuItem>
                    <MenuItem onClick={handleClose}>Demo</MenuItem>
                    <MenuItem onClick={handleClose}>Demo</MenuItem>
                    <MenuItem onClick={handleClose}>Demo</MenuItem>
                    <MenuItem onClick={handleClose}>Demo</MenuItem>
                    <MenuItem onClick={handleClose}>Demo</MenuItem>
                    <MenuItem onClick={handleClose}>Demo</MenuItem>
                    <MenuItem onClick={handleClose}>Demo</MenuItem>
                    <MenuItem onClick={handleClose}>Demo</MenuItem>
                    <MenuItem onClick={handleClose}>Demo</MenuItem>
                    <MenuItem onClick={handleClose}>Demo</MenuItem>
                    <MenuItem onClick={handleClose}>Demo</MenuItem>
                    <MenuItem onClick={handleClose}>Demo</MenuItem>
                </Menu>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                History
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Customer</TableCell>
                                        <TableCell align="right">Amount</TableCell>
                                        <TableCell align="right">Total price ($)</TableCell>
                                        <TableCell align="right">Total price ($)</TableCell>
                                        <TableCell align="right">Total price ($)</TableCell>
                                        <TableCell align="right">Total price ($)</TableCell>
                                        <TableCell align="right">Total price ($)</TableCell>
                                        <TableCell align="right">Total price ($)</TableCell>
                                        <TableCell align="right">Total price ($)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.history.map((historyRow) => (
                                        <TableRow key={historyRow.date}>
                                            <TableCell component="th" scope="row">
                                                {historyRow.date}
                                            </TableCell>
                                            <TableCell>{historyRow.customerId}</TableCell>
                                            <TableCell align="right">{historyRow.amount}</TableCell>
                                            <TableCell align="right">
                                                {Math.round(historyRow.amount * row.price * 100) / 100}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>

    );
}

function Rows2(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const opens = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (

        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                {/* <TableCell sx={{ p: 1 }}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell> */}


                <TableCell align="left" sx={{ p: 1 }}>{row.offerfiltertype}</TableCell>
                <TableCell align="left"><button style={{ backgroundColor: '#00e5ff', borderRadius: 20, border: 0, padding: 5, width: 105, color: '#FFF' }}>{row.offers}</button></TableCell>
                <TableCell align="left" sx={{ p: 1 }}>{row.offertype}</TableCell>
                <TableCell align="left" sx={{ p: 1 }}>{row.message}</TableCell>
                <TableCell align="left" sx={{ color: 'green' }}><CheckIcon /></TableCell>
                <TableCell align="left" sx={{ color: '#616161', textAlign: 'end' }}>
                    <>
                        <Tooltip title="edit">
                            <CreateIcon />
                        </Tooltip>
                        <Tooltip title="delete">
                            <Delete />
                        </Tooltip>

                    </>
                </TableCell>
                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={opens}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                    <MenuItem onClick={handleClose} sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'white' }}>
                        <Typography sx={{ fontSize: 13, letterSpacing: 2 }}>SELECTED USER</Typography>
                        <Cancel sx={{ mx: 2 }} />
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>

                </Menu>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                History
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Customer</TableCell>
                                        <TableCell align="right">Amount</TableCell>
                                        <TableCell align="right">Total price ($)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.history.map((historyRow) => (
                                        <TableRow key={historyRow.date}>
                                            <TableCell component="th" scope="row">
                                                {historyRow.date}
                                            </TableCell>
                                            <TableCell>{historyRow.customerId}</TableCell>
                                            <TableCell align="right">{historyRow.amount}</TableCell>
                                            <TableCell align="right">
                                                {Math.round(historyRow.amount * row.price * 100) / 100}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>

    );
}
Row.propTypes = {
    row: PropTypes.shape({
        calories: PropTypes.number.isRequired,
        carbs: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        history: PropTypes.arrayOf(
            PropTypes.shape({
                amount: PropTypes.number.isRequired,
                customerId: PropTypes.string.isRequired,
                date: PropTypes.string.isRequired,
            }),
        ).isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        protein: PropTypes.number.isRequired,
    }).isRequired,
};

const rows = [
    createData('Feedback', 'Feedback Positive goog', 'Great tradel', 'all', 'visa gift card', 'all', 'all'),
];
const row2 = [
    createData2('all', 'visa gift card', 'Great tradel', 'all'),
];


export default function AutoMessage() {
    const [filteropen, setFilterOpen] = React.useState(false);
    const [search, setsearch] = React.useState("");
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleFilterOpen = () => setFilterOpen(true);
    const handleFilterClose = () => setFilterOpen(false);
    let input = React.useRef(null);
    let timer = React.useRef(null);

    function handleChange(e) {
        clearTimeout(timer.current);
        timer.current = setTimeout(() => setsearch(e), 300);
    }
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setsearch(event);
        input.current.value = 0;
    };

    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChanges = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <TheLayout />
            <AppBar
                position="fixed"
                color='info'
                sx={{
                    width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`,
                    padding: 1, top: "64px"

                }}
                elevation={0}
            >
                <Typography variant="h6" noWrap component="div">
                    Paxful Trades
                </Typography>
                <AppBar position="static" color='info' elevation={0}>
                    <Tabs
                        value={value}
                        onChange={handleChanges}
                        textColor="inherit"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                    >
                        <Tab label="auto messageing rules" {...a11yProps(0)} />
                        <Tab label="favorite messages" {...a11yProps(1)} />
                    </Tabs>
                </AppBar>
            </AppBar>

            <div style={{ padding: "185px 7px 0px", marginLeft: '235px' }} >

                <TabPanel value={value} index={0} dir={theme.direction}>
                    <TableContainer component={Paper}>
                        <Stack direction={{ xs: 'row', md: 'row' }} sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                            <Box
                                sx={{
                                    borderColor: '#fff',
                                    width: '50%',
                                    position: 'relative'
                                }}
                            >
                                <SearchIcon sx={{ position: 'absolute', top: '14px', right: '19px', color: 'gray' }} />
                                <TextField fullWidth id="fullWidth" placeholder='Search...' />
                            </Box>
                            <Box letterSpacing={2}>
                                <Tooltip title="Trade Trade grouping">
                                    <IconButton>
                                        <Add />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Reload">
                                    <IconButton>
                                        <Replay />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Filter">
                                    <IconButton onClick={handleFilterOpen}>
                                        <FilterAlt />
                                    </IconButton>
                                </Tooltip>
                                <Modal
                                    open={filteropen}
                                    onClose={handleFilterClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                    sx={{
                                        '&	.MuiBox-root': {
                                            borderRadius: "5px",
                                            border: "0px",
                                        },
                                    }}
                                >
                                    <Box sx={style} style={{ padding: 0 }} >
                                        <Typography id="modal-modal-title" variant="h5" fontWeight={500} component="h2" sx={{ p: 2 }}>
                                            Filters
                                        </Typography>
                                        <Box style={{ height: "450px", overflow: "hidden", overflowY: "auto", }} sx={{ p: 2 }}>
                                            <Autocomplete
                                                // {...defaultProps}
                                                id="disable-close-on-select"
                                                disableCloseOnSelect
                                                renderInput={(params) => (
                                                    <TextField {...params} label="Offer Type" variant="standard" />
                                                )}
                                                sx={{ mb: 1 }}
                                            />
                                            <Autocomplete
                                                // {...defaultProps}
                                                id="disable-close-on-select"
                                                disableCloseOnSelect
                                                renderInput={(params) => (
                                                    <TextField {...params} label="Payment Method" variant="standard" />
                                                )}
                                                sx={{ mb: 1 }}
                                            />
                                            <Autocomplete
                                                // {...defaultProps}
                                                id="disable-close-on-select"
                                                disableCloseOnSelect
                                                renderInput={(params) => (
                                                    <TextField {...params} label="Crypto" variant="standard" />
                                                )}
                                                sx={{ mb: 1 }}
                                            />
                                            <Autocomplete
                                                id="disable-close-on-select"
                                                disableCloseOnSelect
                                                renderInput={(params) => (
                                                    <TextField {...params} label="Currency" variant="standard" />
                                                )}
                                                sx={{ mb: 1 }}
                                            />
                                            <Autocomplete
                                                id="disable-close-on-select"
                                                disableCloseOnSelect
                                                renderInput={(params) => (
                                                    <TextField {...params} label="Trade Status" variant="standard" />
                                                )}
                                                sx={{ mb: 1 }}
                                            />
                                            <Autocomplete
                                                id="disable-close-on-select"
                                                disableCloseOnSelect
                                                renderInput={(params) => (
                                                    <TextField {...params} label="Assigned To " variant="standard" />
                                                )}
                                                sx={{ mb: 1 }}
                                            />
                                            <FormControl fullWidth variant="standard" sx={{ mb: 1 }}>
                                                <InputLabel htmlFor="standard-adornment-amount">Form Date</InputLabel>
                                                <Input id="standard-adornment-amount" />
                                            </FormControl>
                                            <FormControl fullWidth variant="standard" sx={{ mb: 1 }}>
                                                <InputLabel htmlFor="standard-adornment-amount">To Date</InputLabel>
                                                <Input id="standard-adornment-amount" />
                                            </FormControl>
                                            <Autocomplete
                                                // {...defaultProps}
                                                id="disable-close-on-select"
                                                disableCloseOnSelect
                                                renderInput={(params) => (
                                                    <TextField {...params} label="Trader" variant="standard" />
                                                )}
                                                sx={{ mb: 1 }}
                                            />
                                            <FormGroup my={1} sx={{ mb: 1 }}>
                                                <FormControlLabel control={<Checkbox color='info' size='small' />} label="Has Alam" />
                                                <FormControlLabel control={<Checkbox color='info' size='small' />} label="Unassigned Or Mine" />
                                                <FormControlLabel control={<Checkbox color='info' size='small' />} label="Hash Chargeback" />
                                            </FormGroup>
                                            <Autocomplete
                                                // {...defaultProps}
                                                id="disable-close-on-select"
                                                disableCloseOnSelect
                                                renderInput={(params) => (
                                                    <TextField {...params} label="Chargeback Status" variant="standard" />
                                                )}
                                                sx={{ mb: 1 }}
                                            />

                                        </Box>
                                        <Stack alignContent='left' justifyContent='end' my={2} px={2} spacing={2} direction="row">
                                            <Button variant="contained" color="inherit" size="small" onClick={handleFilterClose} >
                                                Cancel
                                            </Button>
                                            <Button variant="contained" color="info" size="small">
                                                Apply Filters
                                            </Button>
                                        </Stack>

                                    </Box>
                                </Modal>
                                <Tooltip title="Reload">
                                    <IconButton>
                                        <ViewStreamOutlined />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Reload">
                                    <IconButton>
                                        <RemoveRedEye />
                                    </IconButton>
                                </Tooltip>
                            </Box>

                        </Stack>
                        <Divider sx={{ my: 3 }} />
                        <Table aria-label="collapsible table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left" sx={{ p: 1 }} >Label</TableCell>
                                    <TableCell align="left" sx={{ p: 1 }}>Message Type</TableCell>
                                    <TableCell align="left" sx={{ p: 1 }}>Message</TableCell>
                                    <TableCell align="left" sx={{ p: 1 }}>Offer Filter Type</TableCell>
                                    <TableCell align="left" sx={{ p: 1 }}>Offers</TableCell>
                                    <TableCell align="left" sx={{ p: 1 }}>Tag Filter Type</TableCell>
                                    <TableCell align="left" sx={{ p: 1 }}>Tag</TableCell>
                                    <TableCell align="left" sx={{ p: 1 }}>Active</TableCell>
                                    <TableCell align="left" sx={{ p: 1 }}>Single Use</TableCell>
                                    <TableCell align="left" sx={{ p: 1 }}>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <Row key={row.name} row={row} />
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </TabPanel>


                <TabPanel value={value} index={1} dir={theme.direction}>
                    <TableContainer component={Paper}>
                        <Stack direction={{ xs: 'row', md: 'row' }} sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                            <Box
                                sx={{
                                    borderColor: '#fff',
                                    width: '50%',
                                    position: 'relative'
                                }}
                            >
                                <SearchIcon sx={{ position: 'absolute', top: '14px', right: '19px', color: 'gray' }} />
                                <TextField fullWidth id="fullWidth" placeholder='Search...' />
                            </Box>
                            <Box letterSpacing={2}>
                                <Tooltip title="Trade Trade grouping">
                                    <IconButton>
                                        <Add />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Reload">
                                    <IconButton>
                                        <Replay />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Filter">
                                    <IconButton onClick={handleFilterOpen}>
                                        <FilterAlt />
                                    </IconButton>
                                </Tooltip>
                                <Modal
                                    open={filteropen}
                                    onClose={handleFilterClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                    sx={{
                                        '&	.MuiBox-root': {
                                            borderRadius: "5px",
                                            border: "0px",
                                        },
                                    }}
                                >
                                    <Box sx={style} style={{ padding: 0 }} >
                                        <Typography id="modal-modal-title" variant="h5" fontWeight={500} component="h2" sx={{ p: 2 }}>
                                            Filters
                                        </Typography>
                                        <Box style={{ height: "450px", overflow: "hidden", overflowY: "auto", }} sx={{ p: 2 }}>
                                            <Autocomplete
                                                // {...defaultProps}
                                                id="disable-close-on-select"
                                                disableCloseOnSelect
                                                renderInput={(params) => (
                                                    <TextField {...params} label="Offer Type" variant="standard" />
                                                )}
                                                sx={{ mb: 1 }}
                                            />
                                            <Autocomplete
                                                // {...defaultProps}
                                                id="disable-close-on-select"
                                                disableCloseOnSelect
                                                renderInput={(params) => (
                                                    <TextField {...params} label="Payment Method" variant="standard" />
                                                )}
                                                sx={{ mb: 1 }}
                                            />
                                            <Autocomplete
                                                // {...defaultProps}
                                                id="disable-close-on-select"
                                                disableCloseOnSelect
                                                renderInput={(params) => (
                                                    <TextField {...params} label="Crypto" variant="standard" />
                                                )}
                                                sx={{ mb: 1 }}
                                            />
                                            <Autocomplete
                                                id="disable-close-on-select"
                                                disableCloseOnSelect
                                                renderInput={(params) => (
                                                    <TextField {...params} label="Currency" variant="standard" />
                                                )}
                                                sx={{ mb: 1 }}
                                            />
                                            <Autocomplete
                                                id="disable-close-on-select"
                                                disableCloseOnSelect
                                                renderInput={(params) => (
                                                    <TextField {...params} label="Trade Status" variant="standard" />
                                                )}
                                                sx={{ mb: 1 }}
                                            />
                                            <Autocomplete
                                                id="disable-close-on-select"
                                                disableCloseOnSelect
                                                renderInput={(params) => (
                                                    <TextField {...params} label="Assigned To " variant="standard" />
                                                )}
                                                sx={{ mb: 1 }}
                                            />
                                            <FormControl fullWidth variant="standard" sx={{ mb: 1 }}>
                                                <InputLabel htmlFor="standard-adornment-amount">Form Date</InputLabel>
                                                <Input id="standard-adornment-amount" />
                                            </FormControl>
                                            <FormControl fullWidth variant="standard" sx={{ mb: 1 }}>
                                                <InputLabel htmlFor="standard-adornment-amount">To Date</InputLabel>
                                                <Input id="standard-adornment-amount" />
                                            </FormControl>
                                            <Autocomplete
                                                // {...defaultProps}
                                                id="disable-close-on-select"
                                                disableCloseOnSelect
                                                renderInput={(params) => (
                                                    <TextField {...params} label="Trader" variant="standard" />
                                                )}
                                                sx={{ mb: 1 }}
                                            />
                                            <FormGroup my={1} sx={{ mb: 1 }}>
                                                <FormControlLabel control={<Checkbox color='info' size='small' />} label="Has Alam" />
                                                <FormControlLabel control={<Checkbox color='info' size='small' />} label="Unassigned Or Mine" />
                                                <FormControlLabel control={<Checkbox color='info' size='small' />} label="Hash Chargeback" />
                                            </FormGroup>
                                            <Autocomplete
                                                // {...defaultProps}
                                                id="disable-close-on-select"
                                                disableCloseOnSelect
                                                renderInput={(params) => (
                                                    <TextField {...params} label="Chargeback Status" variant="standard" />
                                                )}
                                                sx={{ mb: 1 }}
                                            />

                                        </Box>
                                        <Stack alignContent='left' justifyContent='end' my={2} px={2} spacing={2} direction="row">
                                            <Button variant="contained" color="inherit" size="small" onClick={handleFilterClose} >
                                                Cancel
                                            </Button>
                                            <Button variant="contained" color="info" size="small">
                                                Apply Filters
                                            </Button>
                                        </Stack>

                                    </Box>
                                </Modal>
                                <Tooltip title="Reload">
                                    <IconButton>
                                        <ViewStreamOutlined />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Reload">
                                    <IconButton>
                                        <RemoveRedEye />
                                    </IconButton>
                                </Tooltip>
                            </Box>

                        </Stack>
                        <Divider sx={{ my: 3 }} />
                        <Table aria-label="collapsible table">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ p: 1 }}>Offer Filter Type</TableCell>
                                    <TableCell align="left" sx={{ p: 1 }}>Offer</TableCell>
                                    <TableCell align="left" sx={{ p: 1 }}>Offer Type</TableCell>
                                    <TableCell align="left" sx={{ p: 1 }}>Message</TableCell>
                                    <TableCell align="left" sx={{ p: 1 }}>Active</TableCell>
                                    <TableCell align="left" sx={{ p: 1, textAlign: 'end' }}>Actions</TableCell>
                                    {/* <TableCell /> */}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <Rows2 key={row.name} row={row} />
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </TabPanel>
            </div>
        </>
    );
}
