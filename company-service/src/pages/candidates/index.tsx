import { useParams } from "react-router-dom"
import { PersonList } from "../../widgets/person-list"
import { useGetRequest } from "../../shared/react-query/requests/use-get-requests"

export const Candidates = () => {
    const {practicesID} = useParams()
    const {data, isLoading} = useGetRequest(practicesID)

    console.log(data)
    return <PersonList data={data ?? []} isLoading={isLoading}/>
}