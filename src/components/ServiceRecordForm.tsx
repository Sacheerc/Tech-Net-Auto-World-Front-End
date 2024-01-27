import { Autocomplete, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ServiceRecord from "../Models/ServiceRecord";
import InventoryService from "../services/InventoryService";
import Inventory from "../Models/Inventory";
import UsedInventoryItem from "../Models/UsedInventoryItem";
import UsedInventoryItemForm from "./UsedInventoryItemForm";

const ServiceRecordForm: React.FC<{ serviceRecord: ServiceRecord | null }> = (props) => {

    const loadedServiceRecord = props.serviceRecord;

    const [codeList, setCodeList] = useState<string[]>([]);
    const [inventoryItemList, setInventoryItemList] = useState<Inventory[]>([]);


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


    const handleSave = async () => {
        console.log(inventoryItemList)
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

    const handleAddItem = (inventoryItem: Inventory) => {
        setInventoryItemList(inventoryItemList => [...inventoryItemList, inventoryItem!])
    };

    const deleteUsedInventoryItem = (index: number) => {
        setInventoryItemList((prevInventoryItemList) => {
            // Ensure index is within valid range
            if (index < 0 || index >= prevInventoryItemList.length) {
                console.error('Invalid index for deletion');
                return prevInventoryItemList;
            }

            // Create a new array excluding the item at the specified index
            const updatedInventoryItemList = [
                ...prevInventoryItemList.slice(0, index),
                ...prevInventoryItemList.slice(index + 1),
            ];

            return updatedInventoryItemList;
        });
    }

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
            <br />
            <Typography variant='h6' gutterBottom>
                Inventory Items
            </Typography>
            <br></br>
            <UsedInventoryItemForm
                codeList={codeList}
                handleAddItem={handleAddItem}
            />
            <br />
            {inventoryItemList.length > 0 && (
                <div>
                    {inventoryItemList.map((inventoryItem, index) => (
                        <UsedInventoryItemForm
                            key={index}
                            index={index}
                            codeList={codeList}
                            selectedInventoryItem={inventoryItem}
                            deleteUsedInventoryItem={deleteUsedInventoryItem}
                        />
                    ))}
                </div>)}

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