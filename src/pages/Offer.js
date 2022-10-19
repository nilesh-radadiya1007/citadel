import * as React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Autocomplete, Box, Button, Checkbox, Collapse, Divider, FormControl, FormControlLabel, FormGroup, IconButton, Input, InputLabel, Modal, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TextField, Tooltip, Typography } from '@mui/material';
import { FilterAlt, RemoveRedEye, Replay, TextSnippetOutlined, ViewStreamOutlined } from '@mui/icons-material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardControlKeyIcon from '@mui/icons-material/KeyboardControlKey';
import CheckIcon from '@mui/icons-material/Check';
import CreateIcon from '@mui/icons-material/Create';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import CollectionsIcon from '@mui/icons-material/Collections';
import TheLayout from '../common/TheLayout';
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

const drawerWidth = 240;

function createData(hash, payment, currency, crypto, offer, active, marggin, cost, costfree, min, max, trusted, actives) {
    return {
        hash, payment, currency, crypto, offer, active, marggin, cost, costfree, min, max, trusted, actives,
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
        ],
    };
}

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const [assignOpen, setassignOpen] = React.useState(false);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const opens = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [selected, setSelected] = React.useState([])

    const handleCheckboxClick = (event, id) => {
        event.stopPropagation();
        console.log("checkbox select");
        const { selected } = this.state;
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1)
            );
        }
    }
    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell
                    align="left" sx={{ p: 1 }}
                >
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardControlKeyIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell
                    align="left" sx={{ p: 1 }}
                >
                    <Checkbox
                        className="selectCheckbox"
                        checked=""
                    />
                </TableCell>
                <TableCell style={{ color: '#00e5ff' }} component="th" scope="row">{row.hash}</TableCell>
                <TableCell sx={{ p: 1 }}>{row.payment}</TableCell>
                <TableCell sx={{ p: 1 }}>{row.currency}</TableCell>
                <TableCell sx={{ p: 1 }}>{row.crypto}</TableCell>
                <TableCell sx={{ p: 1 }}>{row.offer}</TableCell>
                <TableCell sx={{ p: 1, color: 'green' }} ><CheckIcon /></TableCell>
                <TableCell sx={{ p: 1 }}>{row.marggin}</TableCell>
                <TableCell sx={{ p: 1 }}>{row.cost}</TableCell>
                <TableCell sx={{ p: 1 }}>{row.costfree}</TableCell>
                <TableCell sx={{ p: 1 }}>{row.min}</TableCell>
                <TableCell sx={{ p: 1 }}>{row.max}</TableCell>
                <TableCell sx={{ p: 1, color: 'green' }}><CheckIcon /></TableCell>
                <TableCell sx={{ p: 1 }}>{<><CreateIcon /><DisabledByDefaultIcon sx={{ color: 'red' }} /></>}</TableCell>

            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={20}>
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

const rows = [
    createData('Frozen', 159, 6.0, 24, 4.0, 3.99, 5, 'gtrf', 'gef', 5, 5,),
];

export default function Offer() {
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

                    Offer
                </Typography>
            </AppBar>

            <div style={{ padding: "145px 37px 0px", marginLeft: '235px' }} >

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
                            <Tooltip title="">
                                <IconButton sx={{ color: 'green' }}>
                                    <LibraryAddIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="">
                                <IconButton sx={{ color: 'red' }}>
                                    <CollectionsIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Trade Trade grouping">
                                <IconButton>
                                    <TextSnippetOutlined />
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
                                            id="disable-close-on-select"
                                            disableCloseOnSelect
                                            renderInput={(params) => (
                                                <TextField {...params} label="Offer Type" variant="standard" />
                                            )}
                                            sx={{ mb: 1 }}
                                        />
                                        <Autocomplete
                                            id="disable-close-on-select"
                                            disableCloseOnSelect
                                            renderInput={(params) => (
                                                <TextField {...params} label="Payment Method" variant="standard" />
                                            )}
                                            sx={{ mb: 1 }}
                                        />
                                        <Autocomplete
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
                                <TableCell />

                                <TableCell
                                    align="left" sx={{ p: 1 }}
                                >
                                    <Checkbox
                                        className="selectCheckbox"
                                        checked=""
                                    />
                                </TableCell>
                                <TableCell>Offer Hash</TableCell>
                                <TableCell align="left" sx={{ p: 1 }}>Payment Method</TableCell>
                                <TableCell align="left" sx={{ p: 1 }}>Currency</TableCell>
                                <TableCell align="left" sx={{ p: 1 }}>Crypto</TableCell>
                                <TableCell align="left" sx={{ p: 1 }}>Offer Type</TableCell>
                                <TableCell align="left" sx={{ p: 1 }}>Active</TableCell>
                                <TableCell align="left" sx={{ p: 1 }}>Marggin</TableCell>
                                <TableCell align="left" sx={{ p: 1 }}>Cost Per $</TableCell>
                                <TableCell align="left" sx={{ p: 1 }}>Cost Per $ w/Free</TableCell>
                                <TableCell align="left" sx={{ p: 1 }}>min</TableCell>
                                <TableCell align="left" sx={{ p: 1 }}>max</TableCell>
                                <TableCell align="left" sx={{ p: 1 }}>Trusted only</TableCell>
                                <TableCell align="left" sx={{ p: 1 }}>Actives</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <Row key={row.name} row={row} />
                            ))}
                        </TableBody>
                    </Table>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={rows.length}
                    />
                </TableContainer>
            </div>
        </>
    );
}
