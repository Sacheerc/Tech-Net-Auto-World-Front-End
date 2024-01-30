import InventoryImage from "./InventoryImage";
import UsedInventoryItem from "./UsedInventoryItem";


interface Inventory {
    id: number;
    code: string;
    name: string;
    description: string;
    quantity: number;
    price: number;
    locationCode: string;
    countryOfOrigin: string;
    brand: string;
    usedInventoryItems: UsedInventoryItem[];
    usedInventoryItem?: UsedInventoryItem;
    inventoryImages: InventoryImage[]
}

export default Inventory;