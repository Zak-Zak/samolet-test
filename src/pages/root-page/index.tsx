import React, { ChangeEvent, useCallback, useMemo, useState } from "react";
import { Input } from "antd";
import Title from "antd/lib/typography/Title";

import { RegionsTable } from "../../components/regions-table";
import { PageLayout } from "../../components/page-layout";
import { useLoadRegions } from "../../hooks/useLoadRegions";

import styles from "./root-page.module.css";

export const RootPage: React.FC = () => {
    const { regions } = useLoadRegions();

    const [search, setSearch] = useState("");
    const handleSearchChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            setSearch(event.target.value);
        },
        [setSearch]
    );

    const filteredRegions = useMemo(() => {
        if (!regions?.length) {
            return [];
        }

        return regions.filter((item) =>
            item.fullname.toLowerCase().includes(search.toLowerCase())
        );
    }, [search, regions]);

    return (
        <PageLayout>
            <Title>Регионы</Title>
            <div className={styles.inputWrapper}>
                <Input
                    placeholder="Введите название департамента"
                    value={search}
                    onChange={handleSearchChange}
                />
            </div>
            <RegionsTable items={filteredRegions} />
        </PageLayout>
    );
};
