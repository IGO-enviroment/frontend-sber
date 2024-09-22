import { useParams } from "react-router-dom"
import { PersonList } from "../../widgets/person-list"
import { useGetRequest } from "../../shared/react-query/requests/use-get-requests"

export const Interns = () => {
    const {practicesID} = useParams()
    const {data, isLoading} = useGetRequest(practicesID)
    return <PersonList data={data ?? []} isLoading={isLoading} />
}