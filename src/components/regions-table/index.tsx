import React, { useMemo } from 'react';
import { Table } from 'antd';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

import { RegionInfo } from '../../types/regions';

import styles from './regions-table.module.css';

interface RegionsTableProps {
    items: RegionInfo[];
}

const REGIONS_TABLE_COLUMNS = [
    {
        title: 'Название департамента',
        dataIndex: 'fullname',
        key: 'fullname',
    },
    {
        title: 'Количество библиотек',
        dataIndex: 'libraries',
        key: 'libraries',
        sorter: (item1: RegionInfo, item2: RegionInfo) => item1.libraries - item2.libraries,
    },
];

export const RegionsTable: React.FC<RegionsTableProps> = ({ items }) => {
    const dispatch = useDispatch();
    const onRow = useMemo(() => {
        return (record: RegionInfo) => ({
            onClick: () => {
                dispatch(push(`/${record.order}`));
            }
        })
    }, [dispatch]);

    return (
        <Table
            className={ styles.root }
            columns={ REGIONS_TABLE_COLUMNS }
            dataSource={ items }
            pagination={ false }
            onRow={ onRow }
            rowKey="order"
        />
    )
};
