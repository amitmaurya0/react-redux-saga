
interface actionInterface {
    type: string,
    payload: any
}

export const DeploymentReducer = (state = { deployments: [], loading: true, status: false }, action: actionInterface)  => {
    
    switch (action.type) {
        case 'GET_DEPLOYMENTS':
            console.log("action.type", action.type);
            return state={
                            ...state, 
                            loading: true
                        };
        break;
        case 'ALL_DEPLOYMENTS': 
            return state={
                ...state,
                deployments: action.payload.data,
                loading: false,
                status: action.payload.status
            };
        break;
        default:
            return state;
    }
};


