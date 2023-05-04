import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableHead, Typography } from '@mui/material';
import { useLoaderData } from 'react-router-dom';
import Container from '@mui/material/Container';

function Horario() {

    const { sched, time } = useLoaderData();
    const cols = [
        "Segunda-Feira",
        "Terça-Feira",
        "Quarta-Feira",
        "Quinta-Feira",
        "Sexta-Feira"
    ];

    return (
        <Container sx={{marginTop: 5, marginX:"auto"}}>
            <Typography align='center' marginTop={1} sx={{fontWeight: "bold"}}>Horário</Typography>
            <TableContainer component={Paper} sx={{width: 700, marginY: 5, marginX: "auto"}}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {
                                cols.map(col => <TableCell key={col} align="center" sx={{fontWeight: "bold", border: 1 }}>{col}</TableCell>)
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        Object.keys(sched).map((_, i) => {
                            return (
                                <TableRow
                                key={i}
                                sx={{  border: 1 }}
                                >
                                {cols.map((col) => {
                                    return (
                                        <TableCell key={col} component="th" scope="column" align="center" sx={{border: 1 }}>
                                            {
                                                i < Object.keys(sched).length ? sched[`Aula${i}`][0] == col ? 
                                                (
                                                    <>
                                                    <p>{`${sched[`Aula${i}`][1]}`}</p>
                                                    <p>{`${time[i].start} - ${time[i].end}`}</p>
                                                    </>
                                                )  : '' : ''
                                            }
                                    </TableCell>
                                    )
                                })}
                                    
                                </TableRow>
                    )
                        })
                    }
                </TableBody>
            </Table>
            </TableContainer>
        </Container>
    );
    }
    
export default Horario
