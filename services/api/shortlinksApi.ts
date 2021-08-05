import { AxiosResponse } from "axios";

import axiosClient from "./axiosClient";

export const createShortLink = async (url: string): Promise<AxiosResponse> => {
    try {
        return await axiosClient.post(`/shorten?url=${url}`);
    } catch (error) {
        throw new Error(error);
    }
}