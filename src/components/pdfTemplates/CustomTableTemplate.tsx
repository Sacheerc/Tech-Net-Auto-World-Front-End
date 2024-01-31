import React from "react";
import { Row } from "../CustomDataGrid";

const tableStyle: React.CSSProperties = {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '20px',
};

const thStyle: React.CSSProperties = {
    border: '1px solid #dddddd',
    textAlign: 'left',
    padding: '8px',
    backgroundColor: '#f2f2f2',
};

const tdStyle: React.CSSProperties = {
    border: '1px solid #dddddd',
    textAlign: 'left',
    padding: '8px',
};

export interface CustomTableColumn {
    field: string;
    headerName: string;
    width: string;
}


interface CustomTableTemplate {
    columns: CustomTableColumn[];
    rows: Row[];
}


const CustomTableTemplate: React.FC<CustomTableTemplate> = ({ columns, rows }) => {
    return (<table style={tableStyle}>
        <thead>
            <tr>
                {columns.map((column) => (
                    <th key={column.field} style={{ ...thStyle, width: column.width }}>
                        {column.headerName}
                    </th>
                ))}
            </tr>
        </thead>
        <tbody>
            {rows.map((row, index) => (
                <tr key={index}>
                    {columns.map((column) => (
                        <td key={column.field} style={{ ...tdStyle, width: column.width }}>
                            {row[column.field]}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    </table>)
}

export default CustomTableTemplate;