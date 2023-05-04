import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar, Typography } from '@mui/material';
import { useLoaderData } from 'react-router-dom';
import Container from '@mui/material/Container';

function createData(name, value) {
    return { name, value };
}

export default function DadosPessoais() {
    const { dados } = useLoaderData();
    const rows = [
        createData('BI', dados.T1Linha4[1].textContent),
        createData('Nasceu a', dados.T1Linha5[1].textContent),
        createData('Pai', dados.T1Linha2[1].textContent),
        createData('Mãe', dados.T1Linha3[1].textContent),
        createData('Telemóvel', dados.T2Linha2[1].textContent),
        createData('Email', dados.T2Linha3[1].textContent),
        createData('Morada', `${dados.T2Linha8[1].textContent} ${dados.T2Linha9[1].textContent} ${dados.T2Linha10[1].textContent}`),
        createData('Contribuinte', dados.T3Linha1[1].textContent),
    ];

    return (
        <Container sx={{marginTop: 5, marginX:"auto"}}>
            <Avatar alt="aluno" sx={{width: 150, height: 150, marginX:"auto"}} src={`${dados.T1Linha1[2].querySelector("img")?.src}`} />
            <Typography align='center' marginTop={5}>{`${dados.T1Linha1[1].textContent?.split('-')[1]}`}</Typography>
            <Typography align='center' marginTop={1}>{`${dados.T1Linha1[1].textContent?.split('-')[0]} ${dados.T1Linha5[2].querySelector("img")?.alt}`}</Typography>
            <TableContainer component={Paper} sx={{width: 700, marginY: 5, marginX: "auto"}}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row" sx={{fontWeight: "bold"}}>
                            {row.name}
                        </TableCell>
                        <TableCell align="left">{row.value}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            </TableContainer>
        </Container>
    );
}