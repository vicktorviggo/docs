import * as React from 'react';
import { DataTable } from 'mantine-datatable';
import { MantineProvider, rem } from '@mantine/core';

interface DialogTabProps {
    head: any,
    rows: unknown[]
}

const theme = {

}

const Table: React.FC<DialogTabProps> = ({
    head,
    rows
}) => {
    return (
        <div style={{ zIndex: 10000 }}>
            <MantineProvider theme={{
                    fontSizes: {
                        sm: rem(16),
                    },
                    colorScheme: 'dark',
                    colors: {
                    // override dark colors here to change them for all components
                    dark: [
                    '#d5d7e0',
                    '#acaebf',
                    '#8c8fa3',
                    '#666980',
                    '#4d4f66',
                    '#292929',
                    '#292929',
                    '#111111',
                    '#0c0d21',
                    '#01010a',
                    ],
                },
                }}>
                <DataTable
                    withBorder={false}
                    fontSize="sm"
                    borderRadius="sm"
                    withColumnBorders
                    highlightOnHover
                    records={rows}
                    sx={{maxWidth: "50%",marginTop:5, zIndex: 10000, maxHeight: "25%", overflow: "auto"}}
                    columns={head}
                />
            </MantineProvider>
        </div>
    );
}

export default Table;