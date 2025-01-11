import { useParams } from "react-router-dom"
import { PersonList } from "../../widgets/person-list"
import { useGetRequest, useGetRequest2 } from "../../shared/react-query/requests/use-get-requests"

export const Interns = () => {
    const {practicesID} = useParams()
    const {data, isLoading} = useGetRequest2(practicesID)
    return <PersonList data={data ?? []} isLoading={isLoading} />
}