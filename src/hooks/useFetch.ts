import { useState } from "react";

export const useFetch = (
    callback: () => void
): [() => void, boolean, null | string | Error] => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<null | string | Error>(null);

    const fetching = async () => {
        setIsLoading(true);
        try {
            await callback();
        } catch (e) {
            if (typeof e === "string" || e instanceof Error) {
                setError(e);
            }
        }
        setIsLoading(false);
    };

    return [fetching, isLoading, error];
};
