import React, { useEffect, useState } from 'react';
import { Autocomplete, Button, Grid, TextField, Typography } from '@mui/material';
import Inventory from '../Models/Inventory';
import InventoryService from '../services/InventoryService';

interface InventoryItemFormProps {
    index?: number;
    codeList: string[];
    selectedInventoryItem?: Inventory;
    handleAddItem?: (inventoryItem: Inventory) => void;
    deleteUsedInventoryItem?: (index: number) => void;
}


const UsedInventoryItemForm: React.FC<InventoryItemFormProps> = ({
    index,
    codeList,
    selectedInventoryItem,
    handleAddItem,
    deleteUsedInventoryItem,
}) => {

    const [selectedValue, setSelectedValue] = useState<string>(selectedInventoryItem ? selectedInventoryItem.code : '');
    const [inventoryItem, setInventoryItem] = useState<Inventory | null>(selectedInventoryItem ? selectedInventoryItem : null);
    const handleAutocompleteChange = (event: any, newValue: any) => {
        setSelectedValue(newValue);
    };

    useEffect(() => {
        if (selectedValue && !selectedInventoryItem) {
            const fetchData = async () => {
                try {
                    setInventoryItem(null);
                    const data = await InventoryService.loadInventoryByCode(selectedValue);
                    const inventoryItem: Inventory = data.inventoryItem;
                    inventoryItem.usedInventoryItem = { inventoryId: inventoryItem.id, itemPrice: inventoryItem.price, quantity: 1, serviceRecordId: -1, totalPrice: inventoryItem.price }
                    setInventoryItem(data.inventoryItem);
                } catch (error) {
                    console.error('Error fetching user data:', error);
                }
            };
            fetchData();
        }
    }, [selectedValue]);

    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newQuantity = Number(e.target.value);
        setInventoryItem((prevInventoryItem) => ({
            ...prevInventoryItem!,
            usedInventoryItem: {
                ...prevInventoryItem!.usedInventoryItem!,
                quantity: newQuantity,
                totalPrice: newQuantity * prevInventoryItem!.usedInventoryItem!.itemPrice,
            },
        }));
    };

    const handleItemPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newItemPrice = Number(e.target.value);
        setInventoryItem((prevInventoryItem) => ({
            ...prevInventoryItem!,
            usedInventoryItem: {
                ...prevInventoryItem!.usedInventoryItem!,
                itemPrice: newItemPrice,
                totalPrice: prevInventoryItem!.usedInventoryItem!.quantity * newItemPrice,
            },
        }));
    };

    return (
        <Grid>
            <br></br>
            <Grid container direction={'row'} display={'flex'} spacing={2}>
                <Grid item xs={2}>
                    {codeList && !selectedInventoryItem && (
                        <Autocomplete
                            disablePortal
                            id="filter-inventory-code"
                            options={codeList}
                            sx={{ width: 'auto' }}
                            onChange={handleAutocompleteChange}
                            renderInput={(params) => <TextField {...params} label="Item Code" />}
                        />
                    )}
                    {selectedInventoryItem && <TextField
                        label='Code'
                        name='code'
                        value={inventoryItem?.code}
                        fullWidth
                        variant='standard'
                        disabled={selectedInventoryItem != null}
                        InputProps={{
                            readOnly: true,
                        }}
                    />}
                </Grid>
                {selectedValue && inventoryItem && (
                    <>
                        <Grid item xs={2}>
                            <TextField
                                label='Item Name'
                                name='itemName'
                                value={inventoryItem.name}
                                fullWidth
                                variant='standard'
                                disabled={selectedInventoryItem != null}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <TextField
                                label='Quantity'
                                name='quantity'
                                value={inventoryItem.usedInventoryItem!.quantity}
                                onChange={handleQuantityChange}
                                fullWidth
                                type="number"
                                variant='standard'
                                disabled={selectedInventoryItem != null}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <TextField
                                label='Amount'
                                name='amount'
                                value={inventoryItem.usedInventoryItem!.itemPrice}
                                onChange={handleItemPriceChange}
                                fullWidth
                                type="number"
                                variant='standard'
                                disabled={selectedInventoryItem != null}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <TextField
                                label='Total Amount'
                                name='totalAmount'
                                value={inventoryItem.usedInventoryItem!.totalPrice}
                                fullWidth
                                type="number"
                                variant='standard'
                                InputProps={{
                                    readOnly: true,
                                }}
                                disabled={selectedInventoryItem != null}
                            />
                        </Grid>
                    </>
                )}
                <Grid item justifyContent={'flex-end'}>
                    {handleAddItem && <Button variant='outlined' disabled={!inventoryItem} onClick={() => handleAddItem(inventoryItem!)}>
                        Add
                    </Button>}
                    {deleteUsedInventoryItem && <Button variant='outlined' onClick={() => deleteUsedInventoryItem(index!)}>
                        delete
                    </Button>}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default UsedInventoryItemForm;