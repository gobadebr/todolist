import React,{useState} from 'react'

import EditTask from "./EditTask"
function Card({taskData,index,deleteTask,updateListArray}) {

    const [modal, setModal] = useState(false);

    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (taskData) => {
        updateListArray(taskData, index)
    }

    const handleDelete = () => {
        deleteTask(index);
    }
    
    return (
        <div className = "card-wrapper mr-5">
            <div className = "card-top" style={{"background-color": colors[index%5].primaryColor}}></div>
            <div className = "task-holder">
                <span className = "card-header titleheading" style={{"background-color": colors[index%5].secondaryColor, "border-radius": "10px"}}>{taskData.Name}</span>
                <p className = "card-header1 descheading mt-3">{taskData.Description}</p>

                <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
                    <i className = "far fa-edit mr-3" style={{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {() => setModal(true)}>&nbsp;&nbsp;&nbsp;</i>
                    <i className="fas fa-trash-alt" style = {{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {handleDelete}></i>
                </div>
            </div>
            <EditTask modal = {modal} toggle = {toggle} updateTask = {updateTask} taskData = {taskData}/>
        </div>
    )
}

export default Card
