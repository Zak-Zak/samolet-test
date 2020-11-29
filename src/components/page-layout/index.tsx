import React from 'react';
import { Layout } from 'antd';

import styles from './page-layout.module.css';

export const PageLayout: React.FC = ({ children }) => (
    <Layout className={ styles.root }>
        { children }
    </Layout>
);
