import React, { useEffect, useState } from "react";
import AddIcon from '@mui/icons-material/Add';

import { useNavigate } from "react-router";
import { Autocomplete, Button, Grid, TextField, Typography } from "@mui/material";
import VehicleService from "../../services/VehicleService";
import VehicleDetailsForm from "./VehicleDetailsForm";
import Vehicle from "../../Models/Vehicle";



const ServiceRecordsManagement: React.FC = () => {
    const [selectedValue, setSelectedValue] = useState<string>('');
    const [noList, setNoList] = useState<string[]>([]);
    const [vehicleData, setVehicleData] = useState<Vehicle | null>(null);

    const navigate = useNavigate();

    const handleAutocompleteChange = (event: any, newValue: any) => {
        setSelectedValue(newValue);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await VehicleService.loadVehicleNoList();
                setNoList(data.vehicleNoList);
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
                    setVehicleData(null)
                    const data = await VehicleService.loadVehicleByVehicleNo(selectedValue);
                    setVehicleData(data.vehicle)
                } catch (error) {
                    console.error('Error fetching user data:', error);
                }
            };
            fetchData();
        }
    }, [selectedValue]);


    return (
        <Grid container spacing={3} style={{ marginTop: 20 }}>
            <Grid item container direction={'row'}>
                <Grid item xs={12}>
                    <Typography variant='h6' gutterBottom>
                        Vehicle Management
                    </Typography>
                </Grid>
                <Grid item xs={6} display={'flex'} justifyContent={'flex-end'}>
                    {noList && <Autocomplete
                        disablePortal
                        id="filter-vehicle-no"
                        options={noList}
                        sx={{ width: 300 }}
                        onChange={handleAutocompleteChange}
                        renderInput={(params) => <TextField {...params} label="Vehicle No" />}
                    />}
                </Grid>
                <Grid item xs={6} display={'flex'} justifyContent={'flex-end'}>
                    <Button
                        variant='outlined'
                        endIcon={<AddIcon />}
                        onClick={() => navigate('/vehiclemanagement/add')}
                    >
                        Add Vehicle
                    </Button>
                </Grid>
                {selectedValue && vehicleData && <VehicleDetailsForm vehicle={vehicleData} />}
            </Grid>
        </Grid>)
}


export default ServiceRecordsManagement;