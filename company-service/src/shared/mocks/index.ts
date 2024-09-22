import { getAllPractices, getPracticeById} from "./getAllPractices";
import { getAllRequests } from "./requests";
import { postSignUp } from "./sign-up";

export const getMocks = () => [
    getAllPractices(),
    postSignUp(),
    getPracticeById(),
    getAllRequests()
];
