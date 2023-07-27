import axios from "axios";
import { IPost } from "../types/models";

export default class PostsService {
    static async getAll(): Promise<{ data: IPost[] }> {
        const res = await axios.get<IPost[]>(
            process.env.REACT_APP_SERVER_URI + `/posts`
        );
        return res;
    }
}
