import { DeploymentInterface } from '../interfaces/DeploymentInterface';

interface DeploymentListItemProps {
    item: DeploymentInterface,
    onDelete: Function
}

const DeploymentListItem = ({ item, onDelete }: DeploymentListItemProps) => {
    return (
        <div className="development-container">
           <div><label>Deployment Name: </label> {item.name}</div> 
           <div><label>Deployment Url: </label> {item.url}</div> 
           <div><label>Deployment Deployed At: </label> {item.deployedAt}</div> 
           <div><label>Deployment Version: </label> {item.versions[0]}</div> 
           <div>
               <button className="delete-button" onClick={()=>onDelete(item.id)}>Delete</button>
           </div>
        </div>
    )
}

export default DeploymentListItem;