import { useGetAllPractices } from "../../shared/react-query/practices/use-get-all-practices"

export const Practices = () => {
 const {data, isLoading} = useGetAllPractices()
 console.log(data)
    return <></>
}