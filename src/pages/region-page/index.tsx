import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import Title from "antd/lib/typography/Title";

import { PageLayout } from "../../components/page-layout";
import { useRegion } from "../../hooks/useRegion";
import { STATUS } from "../../types/status";
import { RegionInfoRow } from "../../components/region-info-row";

interface RegionPageParams {
    order: string;
}

const REGION_FIELDS_TITLES: Record<string, string> = {
    order: "Порядковый номер",
    fullname: "Название департамента",
    territory: "Название региона",
    address: "Адрес",
    formname: "Форма",
    period: "Период",
    libraries: "Количество библиотек",
    buildings_repair: "Зданий восстановлено",
    buildings_disrepair: "Зданий в аварийном состоянии",
    buildings_management: "Зданий под управлением",
    libraries_computers: "Количество компьютеров",
    internet: "Подключено к сети интернет",
    computers: "Количество комьютеров",
};

export const RegionPage: React.FC = () => {
    const dispatch = useDispatch();
    const { order } = useParams<RegionPageParams>();
    const { region, requestStatus } = useRegion(order);

    useEffect(() => {
        if (!region && requestStatus === STATUS.SUCCESS) {
            dispatch(push("/notfound"));
        }
    }, [dispatch, region, requestStatus]);

    return (
        <PageLayout>
            {region && (
                <>
                    <Title>{region.fullname}</Title>
                    {Object.entries(REGION_FIELDS_TITLES).map(
                        ([key, title]) => (
                            <RegionInfoRow
                                key={key}
                                title={title}
                                text={region[key]}
                            />
                        )
                    )}
                </>
            )}
        </PageLayout>
    );
};
