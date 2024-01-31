import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomDataGrid from "../../components/CustomDataGrid";
import { GridColDef, GridRowModel } from "@mui/x-data-grid";
import AddIcon from '@mui/icons-material/Add';
import QuotationItem from "../../Models/QuotationItem";
import QuotationWork from "../../Models/QuotationWork";
import CustomFooterTotalComponent from "../../components/CustomFooterTotalComponent";
import QuotationTemplate from "../../components/pdfTemplates/QuotationTemplate";
import { usePDF } from "react-to-pdf";

interface SubTotal {
    item: number;
    machinaryWork: number;
    work: number;
    total: number;
}

const quatationItemColumns: GridColDef[] = [
    { field: 'serialNo', headerName: 'S/NO', width: 20, type: 'number' },
    { field: 'item', headerName: 'ITEM', width: 600, editable: true },
    { field: 'country', headerName: 'COUNTRY', width: 100, editable: true },
    { field: 'brand', headerName: 'BRAND', width: 100, editable: true },
    { field: 'quantity', headerName: 'QTY', width: 80, type: 'number', editable: true },
    { field: 'unitPrice', headerName: 'UNIT PRICE', width: 150, editable: true },
    { field: 'amount', headerName: 'AMOUNT', width: 150, type: 'number' },
];

const quatationMachinaryWorkColumns: GridColDef[] = [
    { field: 'serialNo', headerName: 'S/NO', width: 20, type: 'number' },
    { field: 'workDescription', headerName: 'DESCRIPTION OF MACHINERY WORK', width: 1000, editable: true },
    { field: 'amount', headerName: 'AMOUNT', width: 100, editable: true, type: 'number' },
];

const quatationWorkColumns: GridColDef[] = [
    { field: 'serialNo', headerName: 'S/NO', width: 20, type: 'number' },
    { field: 'workDescription', headerName: 'DESCRIPTION OF WORK', width: 1000, editable: true },
    { field: 'amount', headerName: 'AMOUNT', width: 100, editable: true, type: 'number' },
];

const Quotation: React.FC = () => {

    const [quotationItemList, setQuotationItemList] = useState<QuotationItem[]>([]);
    const [quotationMachinaryWorkList, setQuotationMachinaryWorkList] = useState<QuotationWork[]>([]);
    const [quotationWorkList, setQuotationWorkList] = useState<QuotationWork[]>([]);
    const [subTotal, setSubTotal] = useState<SubTotal>({ item: 0, machinaryWork: 0, work: 0, total: 0 })
    const [woDiscount, setWoDiscount] = useState<number>(0)
    const [labourDiscount, setLabourDiscount] = useState<number>(0)

    const [formDataCustomer, setFormDataCustomer] = useState({
        name: '',
        phone: '',
        validFor: '',
    });

    const [formDataVehicle, setFormDataVehicle] = useState({
        make: '',
        model: '',
        color: '',
        vehNo: '',
        jobNo: '',
    });

    const addQuotationItem = () => {
        setQuotationItemList((prevItem) => [...prevItem, {
            id: prevItem.length + 1,
            serialNo: prevItem.length + 1,
            item: '',
            country: '',
            brand: '',
            quantity: 1,
            unitPrice: 0,
            amount: 0
        }])
    }

    const addQuotationMachinaryWork = () => {
        setQuotationMachinaryWorkList((prevItem) => [...prevItem, {
            id: prevItem.length + 1,
            serialNo: prevItem.length + 1,
            workDescription: '',
            amount: 0
        }])
    }

    const addQuotationWork = () => {
        setQuotationWorkList((prevItem) => [...prevItem, {
            id: prevItem.length + 1,
            serialNo: prevItem.length + 1,
            workDescription: '',
            amount: 0
        }])
    }

    const updateQuotationItemRow = (newRow: GridRowModel) => {
        newRow.amount = newRow.unitPrice * newRow.quantity;
        setQuotationItemList((prevItems) =>
            prevItems.map((item) => (item.id === newRow.id ? { ...item, ...newRow } : item))
        );
    };

    const updateQuotationMachinaryWorkRow = (newRow: GridRowModel) => {
        console.log(newRow)
        setQuotationMachinaryWorkList((prevItems) =>
            prevItems.map((item) => (item.id === newRow.id ? { ...item, ...newRow } : item))
        );
    };

    const updateQuotationWorkRow = (newRow: GridRowModel) => {
        setQuotationWorkList((prevItems) =>
            prevItems.map((item) => (item.id === newRow.id ? { ...item, ...newRow } : item))
        );
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormDataCustomer({
            ...formDataCustomer,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form data submitted:', formDataCustomer);
    };

    useEffect(() => {
        const updateQuotationItemSubTotal = async () => {
            const item = quotationItemList.reduce((total, item) => total + item.amount, 0);
            setSubTotal((prevTotal) => ({ ...prevTotal, item }));
        };
        updateQuotationItemSubTotal();
    }, [quotationItemList]);

    useEffect(() => {
        const updateQuotationMachinaryWorkSubTotal = async () => {
            const machinaryWork = quotationMachinaryWorkList.reduce((total, item) => total + item.amount, 0);
            setSubTotal((prevTotal) => ({ ...prevTotal, machinaryWork }));
        };
        updateQuotationMachinaryWorkSubTotal();
    }, [quotationMachinaryWorkList]);

    useEffect(() => {
        const updateQuotationWorkSubTotal = async () => {
            const work = quotationWorkList.reduce((total, item) => total + item.amount, 0);
            setSubTotal((prevTotal) => ({ ...prevTotal, work }));
        };
        updateQuotationWorkSubTotal();
    }, [quotationWorkList]);


    return (
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
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Name"
                                        name="name"
                                        value={formDataCustomer.name}
                                        onChange={handleChange}
                                        variant="outlined"
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Phone"
                                        name="phone"
                                        value={formDataCustomer.phone}
                                        onChange={handleChange}
                                        variant="outlined"
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Valid for"
                                        name="validFor"
                                        value={formDataCustomer.validFor}
                                        onChange={handleChange}
                                        variant="outlined"
                                        size="small"
                                    />
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
                <Grid container item sm={6}>
                    <Grid item sm={3}>
                        <Typography variant="body1"><strong>Vehicle Info:</strong></Typography>
                    </Grid>
                    <Grid item sm={7}>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Make"
                                        name="make"
                                        value={formDataVehicle.make}
                                        onChange={handleChange}
                                        variant="outlined"
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Model"
                                        name="model"
                                        value={formDataVehicle.model}
                                        onChange={handleChange}
                                        variant="outlined"
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Color"
                                        name="color"
                                        value={formDataVehicle.color}
                                        onChange={handleChange}
                                        variant="outlined"
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Veh No"
                                        name="vehNo"
                                        value={formDataVehicle.vehNo}
                                        onChange={handleChange}
                                        variant="outlined"
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Job No"
                                        name="jobNo"
                                        value={formDataVehicle.jobNo}
                                        onChange={handleChange}
                                        variant="outlined"
                                        size="small"
                                    />
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </Grid>
            <br />
            <hr />
            <br />
            <Grid item xs={12} display={'flex'} justifyContent={'flex-start'}>
                <Button
                    variant='outlined'
                    endIcon={<AddIcon />}
                    onClick={addQuotationItem}
                >
                    Add Item
                </Button>
            </Grid>
            <br></br>
            <CustomDataGrid columns={quatationItemColumns} data={quotationItemList} id="id" updateRow={updateQuotationItemRow} customFooter={CustomFooterTotalComponent} customFooterPros={{ total: subTotal.item }}></CustomDataGrid>
            <br />
            <br />
            <Grid item xs={12} display={'flex'} justifyContent={'flex-start'}>
                <Button
                    variant='outlined'
                    endIcon={<AddIcon />}
                    onClick={addQuotationMachinaryWork}
                >
                    Add Machinary Work
                </Button>
            </Grid>
            <br></br>
            <CustomDataGrid columns={quatationMachinaryWorkColumns} data={quotationMachinaryWorkList} id="id" updateRow={updateQuotationMachinaryWorkRow} customFooter={CustomFooterTotalComponent} customFooterPros={{ total: subTotal.machinaryWork }}></CustomDataGrid>
            <br />
            <br />
            <Grid item xs={12} display={'flex'} justifyContent={'flex-start'}>
                <Button
                    variant='outlined'
                    endIcon={<AddIcon />}
                    onClick={addQuotationWork}
                >
                    Add Work
                </Button>
            </Grid>
            <br></br>
            <CustomDataGrid columns={quatationWorkColumns} data={quotationWorkList} id="id" updateRow={updateQuotationWorkRow} customFooter={CustomFooterTotalComponent} customFooterPros={{ total: subTotal.work }}></CustomDataGrid>
            <Grid item xs={12} display={'flex'} justifyContent={'flex-end'} marginTop={3}>
                <QuotationTemplate name='Sachintha Rathnayake'
                    phone='0719247080'
                    validFor='2 Months'
                    make='Toyota'
                    model='Auqa'
                    color='Pure White'
                    vehNo='CAQ-6219'
                    jobNo='123456'
                    quoteItems={quotationItemList}
                    machinaryWorks={quotationMachinaryWorkList}
                    works={quotationWorkList}
                />
                <Box sx={{ padding: "10px", width: 230 }}>
                    <Typography variant="body1"><strong>DISCOUNTS:</strong></Typography>
                    <TextField
                        sx={{ width: 200, marginTop: 3 }}
                        label="Total W/O Discount"
                        name="woDiscount"
                        value={woDiscount}
                        onChange={(e) => setWoDiscount(Number(e.target.value))}
                        variant="outlined"
                        size="small"
                    />
                    <TextField
                        sx={{ width: 200, marginTop: 3 }}
                        label="Labour Discount"
                        name="labourDiscount"
                        value={labourDiscount}
                        onChange={(e) => setLabourDiscount(Number(e.target.value))}
                        variant="outlined"
                        size="small"
                    />
                </Box>
                <Box sx={{ padding: "10px", width: 210, backgroundColor: '#ffd485' }} textAlign={'right'}>
                    <Typography variant="body2"><strong>TOTAL PARTS : Rs.</strong></Typography>
                    <Typography variant="body2"><strong>TOTAL MACHINE WORK : Rs.</strong></Typography>
                    <Typography variant="body2"><strong>TOTAL SERVICES : Rs.</strong></Typography>
                    <Typography variant="body2"><strong>TOTAL W/O DISCOUNT : Rs.</strong></Typography>
                    <Typography variant="body2"><strong>LABOUR DISCOUNT : Rs.</strong></Typography>
                    <hr />
                    <Typography variant="body2"><strong>ESTIMATED TOTAL : Rs.</strong></Typography>
                </Box>
                <Box sx={{ padding: "10px", width: 100, backgroundColor: '#ffd485' }} textAlign={'right'}>
                    <Typography variant="body2"><strong>{subTotal.item.toFixed(2)}</strong></Typography>
                    <Typography variant="body2"><strong>{subTotal.machinaryWork.toFixed(2)}</strong></Typography>
                    <Typography variant="body2"><strong>{subTotal.work.toFixed(2)}</strong></Typography>
                    <Typography variant="body2"><strong>{woDiscount.toFixed(2)}</strong></Typography>
                    <Typography variant="body2"><strong>{labourDiscount.toFixed(2)}</strong></Typography>
                    <hr />
                    <Typography variant="body2"><strong>{(subTotal.item + subTotal.machinaryWork + subTotal.work - labourDiscount - woDiscount).toFixed(2)}</strong></Typography>
                </Box>
            </Grid>
        </Paper>
    );

}

export default Quotation;