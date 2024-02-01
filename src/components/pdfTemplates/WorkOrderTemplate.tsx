import { Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import React from "react";
import { usePDF } from "react-to-pdf";
import { Row } from "../CustomDataGrid";
import CustomTableTemplate, { CustomTableColumn } from "./CustomTableTemplate";


const machineryWorkColumns: CustomTableColumn[] = [
    { field: 'workDescription', headerName: 'DESCRIPTION OF MACHINERY WORK', width: '40%' },
    { field: 'empName', headerName: 'EMPLOYEE NAME', width: '20%' },
    { field: 'timeGiven', headerName: 'TIME GIVEN', width: '20%' },
    { field: 'timeSpent', headerName: 'TIME SPENT', width: '20%' },
];

const laborColumns: CustomTableColumn[] = [
    { field: 'laborDescription', headerName: 'LABOR DESCRIPTION', width: '40%' },
    { field: 'empName', headerName: 'EMPLOYEE NAME', width: '20%' },
    { field: 'timeGiven', headerName: 'TIME GIVEN', width: '20%' },
    { field: 'timeSpent', headerName: 'TIME SPENT', width: '20%' },
];


interface QuotationTemplateProps {
    vehicleNumber?: string;
    jobNumber?: string;
    targetDuration?: string;
    expectedEndDate?: string;
    jobStartedDate?: string;
    jobEndedDate?: string;
    durationUsedForJob?: string;
    delayedDurationForTheSpares?: string;
    machinaryWorks?: Row[];
    labor?: Row[];
}

const WorkOrderTemplate: React.FC<QuotationTemplateProps> = ({ vehicleNumber, jobNumber, targetDuration, expectedEndDate, jobStartedDate, jobEndedDate, durationUsedForJob, delayedDurationForTheSpares, machinaryWorks, labor }) => {
    const { toPDF, targetRef } = usePDF({ filename: 'page.pdf', method: 'open' });
    return (
        <div >
            <button onClick={() => toPDF()}>Download PDF</button>
            <div ref={targetRef} style={{
                position: 'absolute',
                left: '-9999px',
            }}>
                <Paper style={{ margin: '20px', padding: '30px' }}>
                    <Typography variant='h3' align="left">Tech Net Auto World (Pvt) Ltd</Typography>
                    <Typography variant='caption' align="left" >381/B, Raddoluwa, seeduwa, Colombo, 11400	  Phone: (076) 442-2226   Fax: (011) 229-1818   E Mail; technetsrilanka@gmail.com</Typography>
                    <br></br>
                    <br />
                    <TableContainer component={Paper}>
                        <Table>
                            <TableBody>
                                {/* Row 1: VEHICLE NUMBER and JOB NUMBER */}
                                <TableRow>
                                    <TableCell><strong>VEHICLE NUMBER</strong></TableCell>
                                    <TableCell>
                                        {vehicleNumber}
                                    </TableCell>
                                    <TableCell><strong>JOB NUMBER</strong></TableCell>
                                    <TableCell>
                                        {jobNumber}
                                    </TableCell>
                                </TableRow>

                                {/* Row 2: TARGET DURATION and EXPECTED END DATE */}
                                <TableRow>
                                    <TableCell><strong>TARGET DURATION</strong></TableCell>
                                    <TableCell>
                                        {targetDuration}
                                    </TableCell>
                                    <TableCell><strong>EXPECTED END DATE</strong></TableCell>
                                    <TableCell>
                                        {expectedEndDate}
                                    </TableCell>
                                </TableRow>

                                {/* Row 3: JOB STARTED DATE and JOB ENDED DATE */}
                                <TableRow>
                                    <TableCell><strong>JOB STARTED DATE</strong></TableCell>
                                    <TableCell>
                                        {jobStartedDate}
                                    </TableCell>
                                    <TableCell><strong>JOB ENDED DATE</strong></TableCell>
                                    <TableCell>
                                        {jobEndedDate}
                                    </TableCell>
                                </TableRow>

                                {/* Row 4: DURATION USED FOR JOB DATE and DELAYED DURATION FOR THE SPARES */}
                                <TableRow>
                                    <TableCell><strong>DURATION USED FOR JOB</strong></TableCell>
                                    <TableCell>
                                        {durationUsedForJob}
                                    </TableCell>
                                    <TableCell><strong>DELAYED DURATION FOR THE SPARES</strong></TableCell>
                                    <TableCell>
                                        {delayedDurationForTheSpares}
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <hr />
                    <br />
                    <br />
                    {machinaryWorks && <CustomTableTemplate columns={machineryWorkColumns} rows={machinaryWorks}></CustomTableTemplate>}
                    <br />
                    {labor && <CustomTableTemplate columns={laborColumns} rows={labor}></CustomTableTemplate>}

                </Paper>
            </div>
        </div>
    )
}

export default WorkOrderTemplate