import React from "react";
import { Col, Row } from "antd";
import Text from "antd/lib/typography/Text";

import styles from "./region-info-row.module.css";

interface RegionInfoRowProps {
    title: string;
    text: string | number;
}

export const RegionInfoRow: React.FC<RegionInfoRowProps> = ({
    title,
    text,
}) => (
    <Row className={styles.root} gutter={[24, 0]}>
        <Col span={6}>
            <Text strong>{title}:</Text>
        </Col>
        <Col span={18}>
            <Text>{text}</Text>
        </Col>
    </Row>
);
