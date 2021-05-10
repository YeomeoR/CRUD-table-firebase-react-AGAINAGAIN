import CardAdd from './components/CardAdd'
import CardUpdate from './components/CardUpdate';
import TableData from './components/TableData'

const FbCrud = () => {
    return (
        <>
            <div>
            <CardAdd />
                <CardUpdate />
            </div>
            <div>
                <TableData />
            </div>
        </>
     );
}
 
export default FbCrud;