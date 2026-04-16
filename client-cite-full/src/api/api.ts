import axios from "axios";

export async function getData<T>(url: string) {
    const result = await axios.get<T>(`${url}`, {
        headers : {
            "Accept-Language" : "en"
        }
    });
    return result;
} 