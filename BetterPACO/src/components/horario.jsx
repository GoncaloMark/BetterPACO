import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableHead, Typography } from '@mui/material';
import { useLoaderData } from 'react-router-dom';
import Container from '@mui/material/Container';

function populateTime(){
    const arr = [];
    const startTime = new Date();
    startTime.setHours(9, 0, 0); 
    const endTime = new Date();
    endTime.setHours(22, 30, 0); 

    while (startTime < endTime) {
        const start = startTime.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', minimumIntegerDigits: 1 }).replace(":", "h");
        startTime.setMinutes(startTime.getMinutes() + 30); 
        const end = startTime.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', minimumIntegerDigits: 1 }).replace(":", "h");
        arr.push({ start, end });
    }

    return arr;
}

function Horario() {
    const { sched, time } = useLoaderData();
    const cols = [
        "Horas",
        "Segunda-Feira",
        "Terça-Feira",
        "Quarta-Feira",
        "Quinta-Feira",
        "Sexta-Feira"
    ];

    const timeSlots = populateTime();
    const tableData = new Array(timeSlots.length).fill(null).map(() => new Array(cols.length).fill(null));
    const rowsSpanned = new Array(timeSlots.length).fill(false);

    Object.values(sched).forEach((classItem, i) => {
        const [day, cls] = classItem;
        const startRow = timeSlots.findIndex((slot) => slot.start === time[i].start);
        const endRow = timeSlots.findIndex((slot) => slot.end === time[i].end);
        const col = cols.find(el => el === day);
        const rowSpan = endRow - startRow + 1;
        const colSpan = 1;
        for (let row = startRow; row <= endRow; row++) {
            const cell = { class: cls, start: time[i].start, end: time[i].end };
            if (row === startRow) {
                cell.rowSpan = rowSpan;
                cell.colSpan = colSpan;
                tableData[row][cols.indexOf(col)] = cell;
                for (let j = 1; j < rowSpan; j++) {
                rowsSpanned[row + j] = true;
                }
            } else {
                tableData[row][cols.indexOf(col)] = { empty: true };
            }
            }
        });

    timeSlots.forEach((slot, index) => {
        for (let col = 0; col < cols.length-1; col++) {
            if (tableData[index][col+1] === null) {
                tableData[index][col+1] = { empty: true };
            }
        }
    });

    return (
        <Container sx={{ marginTop: 5, marginX: "auto" }}>
        <Typography align="center" marginTop={1} sx={{ fontWeight: "bold" }}>
            Horário
        </Typography>

                <TableContainer
            component={Paper}
            sx={{ width: 800, marginY: 5, marginX: "auto", overflow: "auto", maxHeight: 500 }}
        >
            <Table sx={{ minWidth: 650 }} stickyHeader aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {cols.map((col) => (
                            <TableCell component="th" key={col} align="center" sx={{ fontWeight: "bold", border: 1, borderColor: "lightgray" }}>
                                {col}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {timeSlots.map((slot, i) => {
                        return (
                            <TableRow key={slot.start} sx={{border: 1, borderColor: "lightgray"}}>
                                <TableCell key={`${slot.start}-time`} sx={{ width: "200px", border: 1, borderColor: "lightgray" }} align="center">
                                    {`${slot.start} - ${slot.end}`}
                                </TableCell>
                                {cols.slice(1).map((day, index) => {
                                    const cell = tableData[i][index + 1];
                                    const firstInRow = index === 0;
                                    const spannedRow = rowsSpanned[i];
                                    const renderExtraCell = spannedRow && firstInRow;
                                    const { class: cls, rowSpan: rowSpan, colSpan: colSpan } = cell || {};
                                    return (
                                        <>
                                        {renderExtraCell ? null : (<TableCell
                                            key={`${slot.start}-${day}`}
                                            rowSpan={rowSpan}
                                            colSpan={colSpan}
                                            align="center"
                                            sx={{
                                                width: "150px",
                                                backgroundColor: cell?.rowSpan || cell?.colSpan ? "lightblue" : "inherit",
                                                border: cell?.rowSpan || cell?.colSpan ? 1 : "inherit",
                                                borderColor: "lightgray"
                                            }}
                                        >
                                            {cell?.empty ? <div style={{ height: '50px' }}></div> : <div>{cls}</div>}
                                        </TableCell>)}
                                        </>
                                    );
                                })}
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>

        </Container>
    );
    }
    
export default Horario
