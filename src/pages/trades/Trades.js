import * as React from 'react';
import PropTypes from 'prop-types';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Menu, MenuItem, Divider, Box, Stack, Tooltip, Switch, IconButton, Modal, TextField, Autocomplete, Button, Checkbox, FormControlLabel, FormGroup, FormControl, Input, InputLabel, AppBar, Tabs, Tab, Grid } from '@mui/material';
import { Cancel, FilterAlt, PersonAdd, RemoveRedEye, Replay, Settings, TextSnippetOutlined, ViewStreamOutlined } from '@mui/icons-material';
import FolderOpenTwoToneIcon from '@mui/icons-material/FolderOpenTwoTone';
import ContentCopyTwoToneIcon from '@mui/icons-material/ContentCopyTwoTone';
import ImageTwoToneIcon from '@mui/icons-material/ImageTwoTone';
import { useTheme } from '@mui/material/styles';
import Modals from './Modals';
import TheLayout from '../../common/TheLayout';
import SearchIcon from '@mui/icons-material/Search';

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
function createData(hash, trader, blocked, daily, lifetime, iplocation, detected, joined, totlbtc, carrier, offer, payment, $, status, marked, elapsed, tags, duplicates, assigned) {
    return {
        hash, trader, blocked, daily, lifetime, iplocation, detected, joined, totlbtc, carrier, offer, payment, $, status, marked, elapsed,
        tags,
        duplicates,
        assigned,
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
                <TableCell sx={{ p: 1 }}>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell sx={{ p: 1 }} style={{ color: '#00e5ff' }} component="th" scope="row">
                    {row.hash}
                </TableCell>
                <TableCell align="right" sx={{ p: 1 }} style={{ color: '#00e5ff' }}>{row.trader}</TableCell>
                <TableCell align="right" sx={{ p: 1 }} disablepadding >{row.blocked}</TableCell>
                <TableCell align="right" sx={{ p: 1 }}>{row.daily}</TableCell>
                <TableCell align="right" sx={{ p: 1 }}>{row.lifetime}</TableCell>
                <TableCell align="right" sx={{ p: 1 }}>{row.iplocation}</TableCell>
                <TableCell align="right" sx={{ p: 1 }}>{row.detected}</TableCell>
                <TableCell align="right" sx={{ p: 1 }}>{row.joined}</TableCell>
                <TableCell align="right" sx={{ p: 1 }}>{row.totlbtc}</TableCell>
                <TableCell align="right" sx={{ p: 1 }}>{row.carrier}</TableCell>
                <TableCell align="right" sx={{ p: 1 }}>{row.offer}</TableCell>
                <TableCell align="right" sx={{ p: 1 }}>{row.payment}</TableCell>
                <TableCell align="right" sx={{ p: 1 }} style={{ color: '#4caf50' }}>{row.$}</TableCell>
                <TableCell align="right" sx={{ p: 1 }}>{row.status}</TableCell>
                <TableCell align="right" sx={{ p: 1 }}>{row.marked}</TableCell>
                <TableCell align="right" sx={{ p: 1 }}>{row.elapsed}</TableCell>
                <TableCell align="left"><button style={{ backgroundColor: '#00e5ff', borderRadius: 20, border: 0, padding: 5, width: 105, color: '#FFF' }}>{row.tags}</button></TableCell>
                <TableCell align="left">{row.duplicates}</TableCell>
                <Tooltip title="Trade grouping">


                    <TableCell
                        id="demo-positioned-button"
                        aria-controls={open ? 'demo-positioned-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        sx={{ color: 'green' }}
                        align="left">{row.assigned}
                    </TableCell>
                </Tooltip>
                <TableCell>
                    <div style={{ display: 'flex' }}>
                        <ImageTwoToneIcon />
                        <FolderOpenTwoToneIcon />
                        <ContentCopyTwoToneIcon onClick={() => setOpen(!open)} />
                    </div>
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
                    <MenuItem onClick={handleClose} sx={{ color: 'green' }}>Assign To Me</MenuItem>
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
                <TableCell sx={{ p: 0 }} colSpan={21}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        {/* <Grid container spacing={4} position='absolute'> */}
                        <Modals />

                        {/* </Grid> */}
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
                <TableCell sx={{ p: 1 }}>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell sx={{ p: 1 }} style={{ color: '#00e5ff' }} component="th" scope="row">
                    {row.hash}
                </TableCell>
                <TableCell align="left" sx={{ p: 1 }} style={{ color: '#00e5ff' }}>{row.trader}</TableCell>
                <TableCell align="left" sx={{ p: 1 }} disablepadding >{row.blocked}</TableCell>
                <TableCell align="left" sx={{ p: 1 }}>{row.daily}</TableCell>
                <TableCell align="left" sx={{ p: 1 }}>{row.lifetime}</TableCell>
                <TableCell align="left" sx={{ p: 1 }}>{row.iplocation}</TableCell>
                <TableCell align="left" sx={{ p: 1 }}>{row.detected}</TableCell>
                <TableCell align="left" sx={{ p: 1 }}>{row.joined}</TableCell>
                <TableCell align="left" sx={{ p: 1 }}>{row.totlbtc}</TableCell>
                <TableCell align="left" sx={{ p: 1 }}>{row.carrier}</TableCell>
                <TableCell align="left" sx={{ p: 1 }}>{row.offer}</TableCell>
                <TableCell align="left" sx={{ p: 1 }} style={{ color: '#00e5ff' }}>{row.payment}</TableCell>
                <TableCell align="left" sx={{ p: 1 }} style={{ color: '#4caf50' }}>{row.$}</TableCell>
                <TableCell align="left" sx={{ p: 1 }}>{row.status}</TableCell>
                <TableCell align="left" sx={{ p: 1 }}>{row.marked}</TableCell>
                <TableCell align="left" sx={{ p: 1 }}>{row.elapsed}</TableCell>
                <TableCell align="left"><button style={{ backgroundColor: '#00e5ff', borderRadius: 20, border: 0, padding: 5, width: 105, color: '#FFF' }}>{row.tags}</button></TableCell>
                <TableCell align="left">{row.duplicates}</TableCell>
                <Tooltip title="Trade grouping">


                    <TableCell
                        id="demo-positioned-button"
                        aria-controls={open ? 'demo-positioned-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        sx={{ color: 'green' }}
                        align="left">{row.assigned}
                    </TableCell>
                </Tooltip>

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
    createData('Frozen', 159, 6.0, 24, 4.0, 3.99, 5, 'gtrf', 'gef', 5, 5, 'visa gift card', '$121', 'achive', '', '10.05', 'visa gift card', '', 'jhosa'),
];

function Trades() {
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

    // sesarch menu
    const [anchorE2, setAnchorE2] = React.useState(null);
    const open = Boolean(anchorE2);
    const handleSettingClick = (event) => {
        setAnchorE2(event.currentTarget);
    };
    const handleSettingClose = () => {
        setAnchorE2(null);
    };
    // search menu over
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
                {/* <Box sx={{ bgcolor: 'background.paper', width: '100%' }} elevation={0}> */}

                <AppBar position="static" color='info' elevation={0}>
                    <Tabs
                        value={value}
                        onChange={handleChanges}
                        // indicatorColor="secondary"
                        textColor="inherit"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                    // sx={{ bgcolor: 'background.paper', width: '100%' }}
                    >
                        <Tab label="Active" {...a11yProps(0)} />
                        <Tab label="All Trades" {...a11yProps(1)} />
                    </Tabs>
                </AppBar>
            </AppBar>

            <div style={{ padding: "185px 10px 0px 10px", marginLeft: '230px' }} >
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
                                        <TextSnippetOutlined />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Refresh Data">
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
                                <Tooltip title="Setting">

                                    <IconButton color="info"
                                        id="basic-button"
                                        aria-controls={open ? 'basic-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleSettingClick}
                                    >
                                        <Settings />
                                    </IconButton>
                                </Tooltip>
                            </Box>

                            <Menu
                                id="basic-menu"
                                anchorEl={anchorE2}
                                open={open}
                                onClose={handleSettingClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                                sx={{ width: 305, maxWidth: "100%" }}
                            >
                                <div style={{
                                    width: "305px", maxWidth: "100%", padding: '10px 20px'
                                }}>

                                    <Typography variant="body1" gutterBottom>
                                        Search options
                                    </Typography>
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        sx={{ py: 1 }}
                                    >
                                        <Typography variant="body2" >Fuzzy</Typography>
                                        <Typography variant="body2">Active</Typography>

                                    </Stack>
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                    >
                                        <FormGroup >

                                            <FormControlLabel disabled color='info' size="small" control={<Switch color='info' size="small" />} label="ID" />

                                        </FormGroup>
                                        <FormGroup>
                                            <Checkbox color="info" size="small" defaultChecked />
                                        </FormGroup>

                                    </Stack>
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                    >
                                        <FormGroup >

                                            <FormControlLabel disabled color='info' size="small" control={<Switch color='info' size="small" />} label="Trade Hash" />

                                        </FormGroup>
                                        <FormGroup>

                                            <Checkbox color="info" size="small" defaultChecked />
                                        </FormGroup>

                                    </Stack>
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                    >
                                        <FormGroup >

                                            <FormControlLabel disabled control={<Switch color='info' size="small" />} label="Responder IP" />

                                        </FormGroup>
                                        <FormGroup>
                                            <Checkbox color="info" size="small" />
                                        </FormGroup>

                                    </Stack>
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                    >
                                        <FormGroup >

                                            <FormControlLabel defaultChecked control={<Switch color='info' size="small" />} label="Detected Location" />

                                        </FormGroup>
                                        <FormGroup>
                                            <Checkbox color="info" size="small" />
                                        </FormGroup>

                                    </Stack>
                                    <Divider variant="middle" sx={{ my: 2, mx: 0 }} />
                                    <Typography variant="button" gutterBottom>
                                        ENABLE PAGING OPTIONS
                                    </Typography>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} color="info" sx={{ '& .MuiSvgIcon-root': { fontSize: 20 }, '& .MuiFormControlLabel-label': { fontSize: 15 } }} label="Show Count" />
                                    </FormGroup>
                                    <Typography sx={{ color: "#ffab00" }} nowrap={true} variant="caption" display="block" gutterBottom >
                                        Warning This can impact performance significally.
                                    </Typography>
                                    <Stack disableGutters alignContent='left' justifyContent='end' spacing={2} direction="row">
                                        <Button variant="contained" color="inherit" size="small" onClick={handleSettingClose} >
                                            Cancel
                                        </Button>
                                        <Button variant="contained" color="info" size="small">
                                            Apply
                                        </Button>
                                    </Stack>



                                </div>

                                {/* </Box> */}
                            </Menu>
                        </Stack>
                        <Divider sx={{ my: 3 }} />
                        <Table aria-label="collapsible table">
                            <TableHead>
                                <TableRow>
                                    <TableCell />
                                    <TableCell sx={{ p: 1 }}>Hash</TableCell>
                                    <TableCell align="left" sx={{ p: 1 }}>Trader</TableCell>
                                    <TableCell align="left" sx={{ p: 1 }}>Blocked</TableCell>
                                    <TableCell align="left" sx={{ p: 1 }}>Daily</TableCell>
                                    <TableCell align="left" sx={{ p: 1 }}>Live Time</TableCell>
                                    <TableCell align="left" sx={{ p: 1 }}>IP Location</TableCell>
                                    <TableCell align="left" sx={{ p: 1 }}>Detected</TableCell>
                                    <TableCell align="left" sx={{ p: 1 }}>Joined</TableCell>
                                    <TableCell align="left" sx={{ p: 1 }}>Totle BTC</TableCell>
                                    <TableCell align="left" sx={{ p: 1 }}>Carrier</TableCell>
                                    <TableCell align="left" sx={{ p: 1 }}>Offer</TableCell>
                                    <TableCell align="left" sx={{ p: 1 }}>Payment Method</TableCell>
                                    <TableCell align="left" sx={{ p: 1 }}>$</TableCell>
                                    <TableCell align="left" sx={{ p: 1 }}>Status</TableCell>
                                    <TableCell align="left" sx={{ p: 1 }}>Marked</TableCell>
                                    <TableCell align="left" sx={{ p: 1 }}>Elapsed</TableCell>
                                    <TableCell align="left" sx={{ p: 1 }}>Tags</TableCell>
                                    <TableCell align="left" sx={{ p: 1 }}>Duplicates</TableCell>
                                    <TableCell align="left" sx={{ p: 1 }}>Assigned</TableCell>
                                    <TableCell />
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow sx={{ '& > *': { borderBottom: 'unset', bgcolor: "#0000000a" } }}>
                                    <TableCell sx={{ p: 1 }} colSpan={20}  >
                                        Visa Gift Card
                                    </TableCell>
                                    <TableCell>
                                        <PersonAdd />
                                    </TableCell>
                                </TableRow>
                                {rows.map((row) => (
                                    <Row key={row.name} row={row} />
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </TabPanel>


                <TabPanel value={value} index={1} dir={theme.direction} style={{ marginleft: '230px' }}>
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
                                <Tooltip title="Setting">

                                    <IconButton color="info"
                                        id="basic-button"
                                        aria-controls={open ? 'basic-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleSettingClick}
                                    >
                                        <Settings />
                                    </IconButton>
                                </Tooltip>
                            </Box>

                            <Menu
                                id="basic-menu"
                                anchorEl={anchorE2}
                                open={open}
                                onClose={handleSettingClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                                sx={{ width: 305, maxWidth: "100%" }}

                            >

                                <div style={{
                                    width: "305px", maxWidth: "100%", padding: '10px 20px'
                                }}>


                                    <Typography variant="body1" gutterBottom>
                                        Search options
                                    </Typography>
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        sx={{ py: 1 }}
                                    >
                                        <Typography variant="body2" >Fuzzy</Typography>
                                        <Typography variant="body2">Active</Typography>

                                    </Stack>
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                    >
                                        <FormGroup >

                                            <FormControlLabel disabled color='info' size="small" control={<Switch color='info' size="small" />} label="ID" />

                                        </FormGroup>
                                        <FormGroup>
                                            <Checkbox color="info" size="small" defaultChecked />
                                        </FormGroup>

                                    </Stack>
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                    >
                                        <FormGroup >

                                            <FormControlLabel disabled color='info' size="small" control={<Switch color='info' size="small" />} label="Trade Hash" />

                                        </FormGroup>
                                        <FormGroup>

                                            <Checkbox color="info" size="small" defaultChecked />
                                        </FormGroup>

                                    </Stack>
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                    >
                                        <FormGroup >

                                            <FormControlLabel disabled control={<Switch color='info' size="small" />} label="Responder IP" />
                                            {/* <Switch  defaultChecked color="info" size="small" label={"Responder "} /> */}

                                        </FormGroup>
                                        <FormGroup>
                                            <Checkbox color="info" size="small" />
                                        </FormGroup>

                                    </Stack>
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                    >
                                        <FormGroup >

                                            <FormControlLabel defaultChecked control={<Switch color='info' size="small" />} label="Detected Location" />

                                        </FormGroup>
                                        <FormGroup>
                                            <Checkbox color="info" size="small" />
                                        </FormGroup>

                                    </Stack>
                                    <Divider variant="middle" sx={{ my: 2, mx: 0 }} />
                                    <Typography variant="button" gutterBottom>
                                        ENABLE PAGING OPTIONS
                                    </Typography>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />} color="info" sx={{ '& .MuiSvgIcon-root': { fontSize: 20 }, '& .MuiFormControlLabel-label': { fontSize: 15 } }} label="Show Count" />
                                    </FormGroup>
                                    <Typography sx={{ color: "#ffab00" }} nowrap={true} variant="caption" display="block" gutterBottom >
                                        Warning This can impact performance significally.
                                    </Typography>
                                    <Stack disableGutters alignContent='left' justifyContent='end' spacing={2} direction="row">
                                        <Button variant="contained" color="inherit" size="small" onClick={handleSettingClose} >
                                            Cancel
                                        </Button>
                                        <Button variant="contained" color="info" size="small">
                                            Apply
                                        </Button>
                                    </Stack>



                                </div>

                                {/* </Box> */}
                            </Menu>

                        </Stack>
                        <Divider sx={{ my: 3 }} />
                        <Table aria-label="collapsible table">
                            <TableHead>
                                <TableRow>
                                    <TableCell />
                                    <TableCell sx={{ p: 1 }}>Hash</TableCell>
                                    <TableCell align="left" sx={{ p: 1 }}>Trader</TableCell>
                                    <TableCell align="left" sx={{ p: 1 }}>Blocked</TableCell>
                                    <TableCell align="left" sx={{ p: 1 }}>Daily</TableCell>
                                    <TableCell align="left" sx={{ p: 1 }}>LiveTime</TableCell>
                                    <TableCell align="left" sx={{ p: 1 }}>IP Location</TableCell>
                                    <TableCell align="left" sx={{ p: 1 }}>Detected</TableCell>
                                    <TableCell align="left" sx={{ p: 1 }}>Joined</TableCell>
                                    <TableCell align="left" sx={{ p: 1 }}>Totle BTC</TableCell>
                                    <TableCell align="left" sx={{ p: 1 }}>Carrier</TableCell>
                                    <TableCell align="left" sx={{ p: 1 }}>Offer</TableCell>
                                    <TableCell align="left" sx={{ p: 1 }}>Payment Method</TableCell>
                                    <TableCell align="left" sx={{ p: 1 }}>$</TableCell>
                                    <TableCell align="left" sx={{ p: 1 }}>Status</TableCell>
                                    <TableCell align="left" sx={{ p: 1 }}>Marked</TableCell>
                                    <TableCell align="left" sx={{ p: 1 }}>Elapsed</TableCell>
                                    <TableCell align="left" sx={{ p: 1 }}>Tags</TableCell>
                                    <TableCell align="left" sx={{ p: 1 }}>Duplicates</TableCell>
                                    <TableCell align="left" sx={{ p: 1 }}>Assigned</TableCell>
                                    <TableCell />
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow sx={{ '& > *': { borderBottom: 'unset', bgcolor: "#0000000a" } }}>
                                    <TableCell sx={{ p: 1 }} colSpan={20}  >
                                        Visa Gift Card
                                    </TableCell>
                                    <TableCell>
                                        <PersonAdd />
                                    </TableCell>
                                </TableRow>
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

export default Trades;