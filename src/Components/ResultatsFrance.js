import React from 'react';

//Tables
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

//Icons
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import DragHandleIcon from '@material-ui/icons/DragHandle';

//Styles
const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#353535',
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);
  
const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function ResultatsFrance({data, dataLastWeek}) {

    let j = data.allLiveFranceData.filter(element => element.code === 'FRA')[0];
    let j7 = dataLastWeek.allFranceDataByDate.filter(element => element.code === 'FRA')[0];

    return (
        <div> 
            <TableContainer component={Paper}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Intitulé</StyledTableCell>
                            <StyledTableCell align="center">Chiffres à J-7</StyledTableCell>
                            <StyledTableCell align="center">Chiffres aujourd'hui</StyledTableCell>
                            <StyledTableCell align="center">Tendance</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        <StyledTableRow>
                            <StyledTableCell component="th" scope="row">
                                Nombre de personnes guéries
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {j7.gueris}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {j.gueris}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {j.gueris === j7.gueris 
                                ? <DragHandleIcon style={{fill: "#FEC828"}} />
                                : j.gueris > j7.gueris
                                ? <ArrowUpwardIcon style={{fill: "#15C2A6"}} />
                                : <ArrowDownwardIcon style={{fill: "#CB2624"}} />
                                }
                            </StyledTableCell>
                        </StyledTableRow>

                        <StyledTableRow>
                            <StyledTableCell component="th" scope="row">
                                Nombre de personnes hospitalisées
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {j7.hospitalises}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {j.hospitalises}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {j.hospitalises === j7.hospitalises 
                                ? <DragHandleIcon style={{fill: "#FEC828"}} />
                                : j.hospitalises > j7.hospitalises
                                ? <ArrowUpwardIcon style={{fill: "#CB2624"}} />
                                : <ArrowDownwardIcon style={{fill: "#15C2A6"}} />
                                }
                            </StyledTableCell>
                        </StyledTableRow>

                        <StyledTableRow>
                            <StyledTableCell component="th" scope="row">
                                Nombre de personnes en réanimation
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {j7.reanimation}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {j.reanimation}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {j.reanimation === j7.reanimation 
                                ? <DragHandleIcon style={{fill: "#FEC828"}} />
                                : j.reanimation > j7.reanimation
                                ? <ArrowUpwardIcon style={{fill: "#CB2624"}} />
                                : <ArrowDownwardIcon style={{fill: "#15C2A6"}} />
                                }
                            </StyledTableCell>
                        </StyledTableRow>

                        <StyledTableRow>
                            <StyledTableCell component="th" scope="row">
                                Nombre de nouvelles réanimations
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {j7.nouvellesReanimations}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {j.nouvellesReanimations}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {j.nouvellesReanimations === j7.nouvellesReanimations 
                                ? <DragHandleIcon style={{fill: "#FEC828"}} />
                                : j.nouvellesReanimations > j7.nouvellesReanimations
                                ? <ArrowUpwardIcon style={{fill: "#CB2624"}} />
                                : <ArrowDownwardIcon style={{fill: "#15C2A6"}} />
                                }
                            </StyledTableCell>
                        </StyledTableRow>

                        <StyledTableRow>
                            <StyledTableCell component="th" scope="row">
                                Nombre de nouveaux décès
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {j7.deces}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {j.deces}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {j.deces === j7.deces 
                                ? <DragHandleIcon style={{fill: "#FEC828"}} />
                                : j.deces > j7.deces
                                ? <ArrowUpwardIcon style={{fill: "#CB2624"}} />
                                : <ArrowDownwardIcon style={{fill: "#15C2A6"}} />
                                }
                            </StyledTableCell>
                        </StyledTableRow>

                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default ResultatsFrance;