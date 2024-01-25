import React from 'react';
import axios from 'axios';
import Vehicle from '../Models/Vehicle';

const api = axios.create({
  baseURL: 'http://localhost:8080',
});

const getAll = async () => {
  try {
    const response = await api.get(`/vehicle/all`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const loadVehicleNoList = async () => {
  try {
    const response = await api.get(`/vehicle/vehicle-no-list`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const loadVehicleByVehicleNo = async (vehicleNo: string) => {
  try {
    const response = await api.get(`/vehicle/${vehicleNo}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const add = async (vehicle: Vehicle) => {
  try {
    const response = await api.post(`/vehicle/add`, vehicle);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const deleteById = async (id: string) => {
  try {
    const response = await api.delete(`/vehicle/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const VehicleService = { getAll, add, deleteById, loadVehicleNoList, loadVehicleByVehicleNo };

export default VehicleService;
