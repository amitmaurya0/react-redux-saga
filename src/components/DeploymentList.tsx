import { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { DeploymentInterface } from '../interfaces/DeploymentInterface';
import { get_deployments } from '../actions/DeploymentAction';
import DeploymentListItem from './DeploymentListItem';
import { deleteDeployment } from '../api/deployments';

const DeploymentList = () => {
    const allDeployments: any = useSelector(state => state, shallowEqual);
    const dispatch = useDispatch();

    const onDelete = async (id: string) => {
        const resp = await deleteDeployment(id);
        if(resp.status){
            dispatch(get_deployments());
            alert(resp.msg);
        } else {
            alert(resp.msg);
        }
    }
    
    useEffect(() => {
        dispatch(get_deployments());
    }, [])

    return (
        <div>
            {
                allDeployments.deployments.loading && <div className="loading-msg">Loading...</div>
            }
            
            {
                allDeployments.deployments.deployments 
                    && allDeployments.deployments.deployments.map((item:DeploymentInterface)=> <DeploymentListItem onDelete={onDelete} key={item.id} item={item} />) 
            }
           
        </div>
    )
}

export default DeploymentList;