import React from 'react';
import axios from 'axios';
import Inventory from '../Models/Inventory';

const api = axios.create({
    baseURL: 'http://localhost:8080',
});

const getAll = async () => {
    try {
        const response = await api.get(`/inventory/all`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const loadInventoryCodeList = async () => {
    try {
        const response = await api.get(`/inventory/inventory-code-list`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const loadInventoryByCode = async (code: string) => {
    try {
        const response = await api.get(`/inventory/${code}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const add = async (inventory: Inventory) => {
    try {
        const response = await api.post(`/inventory/add`, inventory);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const deleteByCode = async (code: string | number) => {
    try {
        const response = await api.delete(`/inventory/${code}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const InventoryService = { getAll, add, deleteByCode, loadInventoryCodeList, loadInventoryByCode };

export default InventoryService;