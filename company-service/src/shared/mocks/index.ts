import { getAllPractices, getPracticeById} from "./getAllPractices";
import { getAllRequests, getAllRequests2 } from "./requests";
import { postSignUp } from "./sign-up";

export const getMocks = () => [
    getAllPractices(),
    postSignUp(),
    getPracticeById(),
    getAllRequests(),
    getAllRequests2()
];
