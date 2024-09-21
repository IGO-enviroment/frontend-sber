import { getAllPractices, getPracticeById} from "./getAllPractices";
import { postSignUp } from "./sign-up";

export const getMocks = () => [
    getAllPractices(),
    postSignUp(),
    getPracticeById()
];
