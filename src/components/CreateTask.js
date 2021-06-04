import React,{useState} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function CreateTask({modal,toggle,save}) {
    const [taskName,setTaskName] = useState('');
    const [description,setDescription] = useState('');

    const handleChange = (e)=>{
        const {name,value} = e.target;

        if (name === "taskName"){
            setTaskName(value)
        }
        else{
            setDescription(value)
        }
    }

    const handleSave = (e)=>{
        let taskObj={}
        taskObj["Name"] = taskName;
        taskObj["Description"] = description;
        save(taskObj)
    }
    return (
        <div>
            
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Create Task</ModalHeader>
                <ModalBody>
                    <form>
                        <div className="form-group">
                            <label>Task Name</label>
                            <input className="form-control" type="text"  value={taskName}  onChange={handleChange} name="taskName"/>
                        </div><br/>
                        <div className="form-group">
                        <label>Description</label>
                            <textarea className="form-control" rows="5" value={description} onChange={handleChange} name="description" ></textarea>
                        </div>

                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleSave}>Create</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default CreateTask;
