import { Autocomplete, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ServiceRecord from "../Models/ServiceRecord";
import InventoryService from "../services/InventoryService";
import Inventory from "../Models/Inventory";
import UsedInventoryItem from "../Models/UsedInventoryItem";

const ServiceRecordForm: React.FC<{ serviceRecord: ServiceRecord | null }> = (props) => {

    const loadedServiceRecord = props.serviceRecord;
    const [selectedValue, setSelectedValue] = useState<string>('');
    const [codeList, setCodeList] = useState<string[]>([]);
    const [inventoryItem, setInventoryItem] = useState<Inventory | null>(null);
    const [usedInventoryItemList, setusedInventoryItemList] = useState<UsedInventoryItem[]>([]);
    const [inventoryItemForm, setinventoryItemForm] = useState<UsedInventoryItem | null>(null);


    const [formData, setFormData] = React.useState<ServiceRecord>(loadedServiceRecord ? loadedServiceRecord : {
        id: -1,
        checkIn: '',
        checkOut: '',
        customerName: '',
        customerNic: '',
        customerContact: '',
        status: '',
        employeeId: -1,
        vehicleNo: '',
        usedInventoryItems: [],
        jobCards: [],
    });
    const [formErrors, setFormErrors] = React.useState<Record<string, string>>(
        {}
    );

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleAutocompleteChange = (event: any, newValue: any) => {
        setSelectedValue(newValue);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await InventoryService.loadInventoryCodeList();
                setCodeList(data.inventoryCodeList);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (selectedValue) {
            const fetchData = async () => {
                try {
                    setInventoryItem(null);
                    const data = await InventoryService.loadInventoryByCode(selectedValue);
                    setInventoryItem(data.inventoryItem);
                    console.log(data.inventoryItem);
                } catch (error) {
                    console.error('Error fetching user data:', error);
                }
            };
            fetchData();
        }
    }, [selectedValue]);

    const handleSave = async () => {
        const errors: Record<string, string> = {};
        if (!formData.checkIn) {
            errors.vehicleNo = 'Checked in time is required';
        }
        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            console.log('Form data:', formData);
            const vehicle: ServiceRecord = formData;
            // const res = await VehicleService.add(vehicle);
            // console.log(res);
        }
    };

    const handleCancel = () => {
        console.log('Form canceled');
    };

    const handleAddItem = () => {
        console.log('Form canceled');
    };

    return (<Grid>
        <form>
            <Grid container spacing={4}>
                <Grid item xs={2}>
                    <TextField
                        label='Checked In'
                        name='checkedIn'
                        value={formData.checkIn}
                        onChange={handleInputChange}
                        fullWidth
                        error={Boolean(formErrors.checkedIn)}
                        helperText={formErrors.checkedIn}
                        variant='standard'
                        InputProps={{
                            readOnly: loadedServiceRecord != null,
                        }}
                    />
                </Grid>
                <Grid item xs={2}>
                    <TextField
                        label='Checked Out'
                        name='checkedOut'
                        value={formData.checkOut}
                        onChange={handleInputChange}
                        fullWidth
                        error={Boolean(formErrors.checkedOut)}
                        helperText={formErrors.checkedOut}
                        variant='standard'
                        InputProps={{
                            readOnly: loadedServiceRecord != null,
                        }}
                    />
                </Grid>
                <Grid item xs={2}>
                    <TextField
                        label='Customer Name'
                        name='customerName'
                        value={formData.customerName}
                        onChange={handleInputChange}
                        fullWidth
                        error={Boolean(formErrors.customerName)}
                        helperText={formErrors.customerName}
                        variant='standard'
                        InputProps={{
                            readOnly: loadedServiceRecord != null,
                        }}
                    />
                </Grid>
                <Grid item xs={2}>
                    <TextField
                        label='Customer Contact'
                        name='customerContact'
                        value={formData.customerContact}
                        onChange={handleInputChange}
                        fullWidth
                        error={Boolean(formErrors.customerContact)}
                        helperText={formErrors.customerContact}
                        variant='standard'
                        InputProps={{
                            readOnly: loadedServiceRecord != null,
                        }}
                    />
                </Grid>
                <Grid item xs={2}>
                    <TextField
                        label='Customer NIC'
                        name='customerNIC'
                        value={formData.customerNic}
                        onChange={handleInputChange}
                        fullWidth
                        error={Boolean(formErrors.NIC)}
                        helperText={formErrors.NIC}
                        variant='standard'
                        InputProps={{
                            readOnly: loadedServiceRecord != null,
                        }}
                    />
                </Grid>
                <Grid item xs={2}>
                    <TextField
                        label='Customer NIC'
                        name='customerNIC'
                        value={formData.customerNic}
                        onChange={handleInputChange}
                        fullWidth
                        error={Boolean(formErrors.customerNIC)}
                        helperText={formErrors.customerNIC}
                        variant='standard'
                        InputProps={{
                            readOnly: loadedServiceRecord != null,
                        }}
                    />
                </Grid>
                <Grid item xs={2}>
                    <TextField
                        label='Status'
                        name='status'
                        value={formData.status}
                        onChange={handleInputChange}
                        fullWidth
                        error={Boolean(formErrors.status)}
                        helperText={formErrors.status}
                        variant='standard'
                        InputProps={{
                            readOnly: loadedServiceRecord != null,
                        }}
                    />
                </Grid>
            </Grid>
            <br></br>
            <Grid>
                <Typography variant='h6' gutterBottom>
                    Inventory Items
                </Typography>
                <br></br>
                <Grid container direction={'row'} display={'flex'} spacing={2}>
                    <Grid item xs={2}>
                        {codeList && <Autocomplete
                            disablePortal
                            id="filter-inventory-code"
                            options={codeList}
                            sx={{ width: 'auto' }}
                            onChange={handleAutocompleteChange}
                            renderInput={(params) => <TextField {...params} label="Item Code" />}
                        />}
                    </Grid>
                    {selectedValue && inventoryItem && <Grid item xs={2}>
                        <TextField
                            label='Item Name'
                            name='itemName'
                            value={inventoryItem.name}
                            fullWidth
                            error={Boolean(formErrors.status)}
                            helperText={formErrors.status}
                            variant='standard'
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </Grid>}
                    {selectedValue && inventoryItem && <Grid item xs={2}>
                        <TextField
                            label='Quantity'
                            name='quantity'
                            value={formData.status}
                            fullWidth
                            type="number"
                            error={Boolean(formErrors.status)}
                            helperText={formErrors.status}
                            variant='standard'
                        />
                    </Grid>}
                    {selectedValue && inventoryItem && <Grid item xs={2}>
                        <TextField
                            label='Total Amount'
                            name='totalAmount'
                            value={inventoryItem.price}
                            fullWidth
                            type="number"
                            error={Boolean(formErrors.status)}
                            helperText={formErrors.status}
                            variant='standard'
                        />
                    </Grid>}
                    <Grid item justifyContent={'flex-end'}>
                        <Button variant='outlined' onClick={handleAddItem}>
                            Add
                        </Button>
                    </Grid>
                </Grid>

            </Grid>

            {/* Buttons for save and cancel */}
            <Grid
                container
                justifyContent='flex-end'
                spacing={2}
                style={{ marginTop: 10 }}
            >
                <Grid item>
                    <Button variant='outlined' onClick={handleCancel}>
                        Cancel
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        variant='contained'
                        color='primary'
                        onClick={handleSave}
                    >
                        Save
                    </Button>
                </Grid>
            </Grid>
        </form>
    </Grid>);
}

export default ServiceRecordForm