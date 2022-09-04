import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import TableContainer from '@mui/material/TableContainer';
import { SuitState } from '../../state/store/storeTypes';

const style = {
    p: 4,
    top: '50%',
    left: '50%',
    width: 400,
    boxShadow: 24,
    borderRadius: '4px',
    backgroundColor: '#fff',
    position: 'absolute' as 'absolute',
    transform: 'translate(-50%, -50%)',
};

function createTableData(
    name: string,
    spades: number,
    hearts: number,
    diamonds: number,
    clubs: number
) {
    return { name, spades, hearts, diamonds, clubs };
}

const Header = (props: {
    setNewGame: React.MouseEventHandler<HTMLButtonElement>;
    gameInProgress: boolean;
    boardPoints: SuitState;
}) => {
    const { setNewGame, gameInProgress, boardPoints } = props;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const tableRows = [
        createTableData(
            'South',
            boardPoints['SOUTH'].SPADES,
            boardPoints['SOUTH'].HEARTS,
            boardPoints['SOUTH'].DIAMONDS,
            boardPoints['SOUTH'].CLUBS
        ),
        createTableData(
            'East',
            boardPoints['EAST'].SPADES,
            boardPoints['EAST'].HEARTS,
            boardPoints['EAST'].DIAMONDS,
            boardPoints['EAST'].CLUBS
        ),
        createTableData(
            'North',
            boardPoints['NORTH'].SPADES,
            boardPoints['NORTH'].HEARTS,
            boardPoints['NORTH'].DIAMONDS,
            boardPoints['NORTH'].CLUBS
        ),
        createTableData(
            'West',
            boardPoints['WEST'].SPADES,
            boardPoints['WEST'].HEARTS,
            boardPoints['WEST'].DIAMONDS,
            boardPoints['WEST'].CLUBS
        ),
    ];

    return (
        <AppBar
            color='transparent'
            position='static'
            sx={{
                border: 0,
                padding: '0 8px',
                transition: 'all',
                boxShadow: 'none',
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}
        >
            <IconButton
                size='small'
                edge='start'
                color='inherit'
                aria-label='menu'
                sx={{ mr: 2 }}
            >
                <HomeIcon color="primary" />
            </IconButton>
            {gameInProgress && (
                <Button color='inherit' onClick={handleOpen}>
                    Check Points
                </Button>
            )}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
            >
                <Box sx={style}>
                    <TableContainer component={Paper}>
                        <Table aria-label='Points Table'>
                            <TableHead>
                                <TableRow>
                                    <TableCell padding='none' >
                                        Player
                                    </TableCell>
                                    <TableCell padding='none' align='left'>
                                        Spades
                                    </TableCell>
                                    <TableCell padding='none' align='left'>
                                        Hearts
                                    </TableCell>
                                    <TableCell padding='none' align='left'>
                                        Diamonds
                                    </TableCell>
                                    <TableCell padding='none' align='left'>
                                        Clubs
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {tableRows.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell
                                            padding='none'
                                            component='th'
                                            scope='row'
                                        >
                                            {row.name}
                                        </TableCell>
                                        <TableCell padding='none' align='left'>
                                            {row.spades}
                                        </TableCell>
                                        <TableCell padding='none' align='left'>
                                            {row.hearts}
                                        </TableCell>
                                        <TableCell padding='none' align='left'>
                                            {row.diamonds}
                                        </TableCell>
                                        <TableCell padding='none' align='left'>
                                            {row.clubs}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Modal>
            <Button color='inherit' onClick={setNewGame}>
                New Game
            </Button>
        </AppBar>
    );
};

export default Header;
