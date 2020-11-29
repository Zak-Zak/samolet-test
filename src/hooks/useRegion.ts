import { useLoadRegions } from "./useLoadRegions";
import { IndexedRegionInfo } from "../types/regions";
import { STATUS } from "../types/status";

interface UseRegionReturnType {
    requestStatus: STATUS;
    region: IndexedRegionInfo | null;
}

// Хук необходим для получения информации о конкретном регионе по его order
// Список регионов загружается, если не был загружен ранее
export const useRegion = (order: string | number): UseRegionReturnType => {
    const { regions, requestStatus } = useLoadRegions();

    return {
        requestStatus,
        region:
            regions.find(
                (region) => region.order === Number.parseInt(order.toString())
            ) || null,
    };
};
