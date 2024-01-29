import { Button, Grid, Paper, TextField, Typography, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import React, { useState } from "react";
import CustomDataGrid from "../../components/CustomDataGrid";
import { GridColDef } from "@mui/x-data-grid";
import AddIcon from '@mui/icons-material/Add';
import Labor from "../../Models/Labor";
import MachineryWork from "../../Models/MachineryWork";


const machineryWorkItemColumns: GridColDef[] = [
    { field: 'serialNo', headerName: 'DESCRIPTION OF MACHINERY WORK', width: 600, editable: true },
    { field: 'item', headerName: 'EMPLOYEE NAME', width: 200, editable: true },
    { field: 'country', headerName: 'TIME GIVEN', width: 200, editable: true },
    { field: 'brand', headerName: 'TIME SPENT', width: 200, editable: true },
];

const laborColumns: GridColDef[] = [
    { field: 'serialNo', headerName: 'LABOR DESCRIPTION', width: 600, editable: true },
    { field: 'item', headerName: 'EMPLOYEE NAME', width: 200, editable: true },
    { field: 'country', headerName: 'TIME GIVEN', width: 200, editable: true },
    { field: 'brand', headerName: 'TIME SPENT', width: 200, editable: true },
];

const WorkOrder: React.FC = () => {

    const [machineryWorkItemList, setMachineryWorkList] = useState<MachineryWork[]>([]);
    const [laborList, setLaborList] = useState<Labor[]>([]);

    const [formDataWorkOrder, setFormDataWorkOrder] = useState({
        vehicleNumber: '',
        jobNumber: '',
        targetDuration: '',
        expectedEndDate: '',
        jobStartedDate: '',
        jobEndedDate: '',
        durationUsedForJob: '',
        delayedDurationForTheSpares: ''
    });

    const addMachineryWork = () => {
        setMachineryWorkList((prevItem) => [...prevItem, {
            id: prevItem.length + 1,
            description: '',
            employeeName: '',
            timeGiven: '',
            timeSpent: ''
        }])
    }

    const addLabor = () => {
        setLaborList((prevItem) => [...prevItem, {
            id: prevItem.length + 1,
            description: '',
            employeeName: '',
            timeGiven: '',
            timeSpent: ''
        }])
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormDataWorkOrder({
            ...formDataWorkOrder,
            [e.target.name]: e.target.value,
        });
    };

    return (
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
                                <TextField
                                    fullWidth
                                    label="Vehicle Number"
                                    name="vehicleNumber"
                                    value={formDataWorkOrder.vehicleNumber}
                                    onChange={handleChange}
                                    variant="outlined"
                                    size="small"
                                />
                            </TableCell>
                            <TableCell><strong>JOB NUMBER</strong></TableCell>
                            <TableCell>
                                <TextField
                                    fullWidth
                                    label="Job Number"
                                    name="jobNumber"
                                    value={formDataWorkOrder.jobNumber}
                                    onChange={handleChange}
                                    variant="outlined"
                                    size="small"
                                />
                            </TableCell>
                        </TableRow>

                        {/* Row 2: TARGET DURATION and EXPECTED END DATE */}
                        <TableRow>
                            <TableCell><strong>TARGET DURATION</strong></TableCell>
                            <TableCell>
                                <TextField
                                    fullWidth
                                    label="Target Duration"
                                    name="targetDuration"
                                    value={formDataWorkOrder.targetDuration}
                                    onChange={handleChange}
                                    variant="outlined"
                                    size="small"
                                />
                            </TableCell>
                            <TableCell><strong>EXPECTED END DATE</strong></TableCell>
                            <TableCell>
                                <TextField
                                    fullWidth
                                    label="Expected End Date"
                                    name="expectedEndDate"
                                    value={formDataWorkOrder.expectedEndDate}
                                    onChange={handleChange}
                                    variant="outlined"
                                    size="small"
                                />
                            </TableCell>
                        </TableRow>

                        {/* Row 3: JOB STARTED DATE and JOB ENDED DATE */}
                        <TableRow>
                            <TableCell><strong>JOB STARTED DATE</strong></TableCell>
                            <TableCell>
                                <TextField
                                    fullWidth
                                    label="Job Started Date"
                                    name="jobStartedDate"
                                    value={formDataWorkOrder.jobStartedDate}
                                    onChange={handleChange}
                                    variant="outlined"
                                    size="small"
                                />
                            </TableCell>
                            <TableCell><strong>JOB ENDED DATE</strong></TableCell>
                            <TableCell>
                                <TextField
                                    fullWidth
                                    label="Job Ended Date"
                                    name="jobEndedDate"
                                    value={formDataWorkOrder.jobEndedDate}
                                    onChange={handleChange}
                                    variant="outlined"
                                    size="small"
                                />
                            </TableCell>
                        </TableRow>

                        {/* Row 4: DURATION USED FOR JOB DATE and DELAYED DURATION FOR THE SPARES */}
                        <TableRow>
                            <TableCell><strong>DURATION USED FOR JOB</strong></TableCell>
                            <TableCell>
                                <TextField
                                    fullWidth
                                    label="Duration Used For Job"
                                    name="durationUsedForJob"
                                    value={formDataWorkOrder.durationUsedForJob}
                                    onChange={handleChange}
                                    variant="outlined"
                                    size="small"
                                />
                            </TableCell>
                            <TableCell><strong>DELAYED DURATION FOR THE SPARES</strong></TableCell>
                            <TableCell>
                                <TextField
                                    fullWidth
                                    label="Delayed Duration For The Spares"
                                    name="delayedDurationForTheSpares"
                                    value={formDataWorkOrder.delayedDurationForTheSpares}
                                    onChange={handleChange}
                                    variant="outlined"
                                    size="small"
                                />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <br />
            <hr />
            <br />
            <Grid item xs={12} display={'flex'} justifyContent={'flex-start'}>
                <Button
                    variant='outlined'
                    endIcon={<AddIcon />}
                    onClick={addMachineryWork}
                >
                    Add Machinery Work
                </Button>
            </Grid>
            <br></br>
            <CustomDataGrid columns={machineryWorkItemColumns} data={machineryWorkItemList} id="id" ></CustomDataGrid>
            <br />
            <br />
            <Grid item xs={12} display={'flex'} justifyContent={'flex-start'}>
                <Button
                    variant='outlined'
                    endIcon={<AddIcon />}
                    onClick={addLabor}
                >
                    Add Labor
                </Button>
            </Grid>
            <br></br>
            <CustomDataGrid columns={laborColumns} data={laborList} id="id" ></CustomDataGrid>
            <br />
            <br />
        </Paper>
    );

}

export default WorkOrder;