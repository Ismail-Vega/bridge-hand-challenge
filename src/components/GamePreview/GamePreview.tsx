import React from 'react';
import List from '@mui/material/List';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Skeleton from '@mui/material/Skeleton';
import Container from '@mui/material/Container';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export const LoadingComponent = () => {
    return (
        <Container
            maxWidth='sm'
            sx={{
                display: 'flex',
                minHeight: '80vh',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Stack spacing={4}
                alignItems='center'
                justifyContent='center'
            >
                <Skeleton variant='rounded' width={210} height={24} />
                <Skeleton variant='rounded' width={210} height={12} />
                <Skeleton variant='rounded' width={210} height={60} />
                <Skeleton variant='rounded' width={210} height={12} />
                <Skeleton variant='text' sx={{ fontSize: '1rem', width: '210px' }} />
                <Skeleton variant='rounded' width={100} height={40} />
            </Stack>
        </Container>
    );
};

const GamePreview = (props: {
    startGame: React.MouseEventHandler<HTMLButtonElement>;
    status: string;
}) => {
    const { status, startGame } = props;

    if (status === 'error') return <Container
        maxWidth='sm'
        sx={{
            display: 'flex',
            minHeight: '80vh',
            alignItems: 'center',
            justifyContent: 'center',
        }}
    >
        <Stack spacing={4}>
            <Alert severity="error">There was an error trying to retrieve deck's cards!</Alert>
        </Stack>
    </Container>

    if (status === 'loading') return <LoadingComponent />;

    return (
        <React.Fragment>
            <Container maxWidth='sm' sx={{
                display: 'flex',
                maxHeight: '80vh',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Stack spacing={{ xs: 0, sm: 2, md: 3 }} justifyContent='center' alignItems='center'
                    sx={{ marginTop: '16px' }}
                >
                    <h2>Bridge hand challenge</h2>
                    <h3>Game Play</h3>

                    <List dense
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <ListItem disablePadding>
                            <ListItemText primary='A hand may have 13 cards, spread across four suits.' />
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText primary='The four suits are hearts, spades, clubs, and diamonds.' />
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText primary='Players will be identified by cardinal points(N, E, S, W).' />
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText primary='The royal cards and aces are worth points during bidding' />
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemText primary='A hand may have 13 cards, spread across four suits.' />
                        </ListItem>
                    </List>

                    <h3>Win Condition</h3>
                    <span>The couple with the highest score wins!</span>
                    <Button variant='contained' onClick={startGame}>
                        Start Game
                    </Button>
                </Stack>
            </Container>
        </React.Fragment>
    );
};

export default GamePreview;
