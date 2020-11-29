import React from 'react';
import { Spin } from 'antd';

import styles from './page-loader.module.css';

export const PageLoader: React.FC = () => (
    <div className={ styles.root }>
        <Spin />
    </div>
);
