import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { usePDF } from "react-to-pdf";
import CustomDataGrid, { Row } from "../CustomDataGrid";
import { GridColDef } from "@mui/x-data-grid";
import CustomFooterTotalComponent from "../CustomFooterTotalComponent";
import CustomTableTemplate, { CustomTableColumn } from "./CustomTableTemplate";

interface SubTotal {
    item: number;
    machinaryWork: number;
    work: number;
    total: number;
}


const quotationMachinaryWorkColumns: CustomTableColumn[] = [
    { field: 'serialNo', headerName: 'S/NO', width: '5%' },
    { field: 'workDescription', headerName: 'DESCRIPTION OF MACHINERY WORK', width: '75%' },
    { field: 'amount', headerName: 'AMOUNT', width: '20%' },
];

const quotationWorkColumns: CustomTableColumn[] = [
    { field: 'serialNo', headerName: 'S/NO', width: '5%' },
    { field: 'workDescription', headerName: 'DESCRIPTION OF WORK', width: '75%' },
    { field: 'amount', headerName: 'AMOUNT', width: '20%' },
];

const quotationItemColumns: CustomTableColumn[] = [
    { field: 'serialNo', headerName: 'S/NO', width: '5%' },
    { field: 'item', headerName: 'ITEM', width: '50%' },
    { field: 'country', headerName: 'COUNTRY', width: '10%' },
    { field: 'brand', headerName: 'BRAND', width: '10%' },
    { field: 'quantity', headerName: 'QTY', width: '5%' },
    { field: 'unitPrice', headerName: 'UNIT PRICE', width: '10%' },
    { field: 'amount', headerName: 'AMOUNT', width: '10%' },
];


interface QuotationTemplateProps {
    name?: string;
    phone?: string;
    validFor?: string;
    make?: string;
    model?: string;
    color?: string;
    vehNo?: string;
    jobNo?: string;
    quoteItems?: Row[];
    machinaryWorks?: Row[];
    works?: Row[];
}

const QuotationTemplate: React.FC<QuotationTemplateProps> = ({ name, phone, validFor, make, model, color, vehNo, jobNo, quoteItems, machinaryWorks, works }) => {
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
                    <Grid container style={{ backgroundColor: '#ffd485', padding: '5px', marginTop: '20px' }}>
                        <Grid item sm={6}>
                            <Typography variant="h6">Quotation #</Typography>
                        </Grid>
                        <Grid item sm={6}>
                            <Typography variant="h6" align="right">Date: 2024-01-27</Typography>
                        </Grid>
                    </Grid>
                    <br />
                    <Grid container spacing={2} style={{ padding: '5px' }}>
                        <Grid container item sm={6}>
                            <Grid item sm={3}>
                                <Typography variant="body1"><strong>Customer & OtherInfo:</strong></Typography>
                            </Grid>
                            <Grid item sm={7}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Typography variant="body1"><strong>Name:</strong> {name}</Typography>
                                        <Typography variant="body1"><strong>Phone:</strong> {phone}</Typography>
                                        <Typography variant="body1"><strong>Valid for:</strong>{validFor}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container item sm={6}>
                            <Grid item sm={3}>
                                <Typography variant="body1"><strong>Vehicle Info:</strong></Typography>
                            </Grid>
                            <Grid item sm={7}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Typography variant="body1"><strong>Make:</strong> {make}</Typography>
                                        <Typography variant="body1"><strong>Model:</strong> {model}</Typography>
                                        <Typography variant="body1"><strong>Color: </strong>{color}</Typography>
                                        <Typography variant="body1"><strong>Veh No:</strong> {vehNo}</Typography>
                                        <Typography variant="body1"><strong>Job No:</strong> {jobNo}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <hr />
                    <br />
                    {quoteItems && <CustomTableTemplate columns={quotationItemColumns} rows={quoteItems}></CustomTableTemplate>}
                    <br />
                    {machinaryWorks && <CustomTableTemplate columns={quotationMachinaryWorkColumns} rows={machinaryWorks}></CustomTableTemplate>}
                    <br />
                    {works && <CustomTableTemplate columns={quotationWorkColumns} rows={works}></CustomTableTemplate>}

                </Paper>
            </div>
        </div>
    )
}

export default QuotationTemplate