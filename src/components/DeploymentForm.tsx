import { useState } from "react";
import { useDispatch } from "react-redux";
import { get_deployments } from "../actions/DeploymentAction";
import { saveDepoyment } from "../api/deployments";
import InputField from './InputField';

function validateUrl(value: string) {
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
  }

const DeploymentForm = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState<string>('');
    const [version, setVersion] = useState<string>('');
    const [url, setUrl] = useState<string>('');
    const [saving, setSaving] = useState<boolean>(false);
    const [status, setStatus] = useState<boolean>(false);
    const [msg, setMsg] = useState<string>('');
    const saveData = async () => {
        setMsg('');
        if(name == ''){
            setStatus(false);
            setMsg('Please select deployment.');
            return;
        }
        const regex = `^([1-9]\d*|0)(\.(([1-9]\d*)|0)){2}$`;
        const found = version.match(regex);
        if(version=='' || found == null){
            setStatus(false);
            setMsg('Please enter a deployment version.');
            return;
        }
        if(url != '') {
           const isValidUrl = validateUrl(url);
           if(!isValidUrl)
           {
            setStatus(false);
            setMsg('Please enter a valid url.');
            return;
           }
        }

        setSaving(true);
        const data = { name, version, url }
        const resp = await saveDepoyment(data);
        if(resp.status){
            setStatus(true);
            setMsg(resp.msg);
            dispatch(get_deployments());
        } else {
            setMsg(resp.msg);
            setStatus(false);
        }
        setSaving(false);
        setName('')
        setVersion('')
        setUrl('')
        setTimeout(()=>{
            setMsg('');
        }, 3000)
    }

    return (
        <div className="form-container">
            {
                msg != '' &&(status ? <div className="success-msg">{msg}</div> :<div className="error-msg">{msg}</div>)
            }
             <div className="row">
                <div className="col-25">
                <label>Deployment Name</label>
                </div>
                <div className="col-75">
                <select id="country" name="country" onChange={e=>setName(e.currentTarget.value)}>
                    <option value="">Please select one deployment</option>
                    <option value="Deployment 1">Deployment 1</option>
                    <option value="Deployment 2">Deployment 2</option>
                    <option value="Deployment 3">Deployment 3</option>
                </select>
                </div>
            </div>
            <InputField name="Deployment Version" placeholder="Please enter version..." label="Version" defualtValue={version} onChange={e=>setVersion(e.currentTarget.value)} />
            <InputField name="Deployment Url" placeholder="Please enter url..." label="Url" defualtValue={url} onChange={e=>setUrl(e.currentTarget.value)} />

            <div className="row">
                <button onClick={saveData}>{saving ? 'Please wait...' : 'Submit'}</button>
            </div>
        </div>
    )
}

export default DeploymentForm;