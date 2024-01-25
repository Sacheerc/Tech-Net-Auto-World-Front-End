import InventoryImage from "./InventoryImage";
import UsedInventoryItem from "./UsedInventoryItem";


interface Inventory {
    code: string;
    name: string;
    description: string;
    quantity: number;
    price: number;
    locationCode: string;
    countryOfOrigin: string;
    brand: string;
    usedInventoryItems: UsedInventoryItem[];
    inventoryImages: InventoryImage[]
}

export default Inventory;