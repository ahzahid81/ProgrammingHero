// export default function ToDo({task, isDone}){
//     // props.task = "zahid";
//     return (
//         <li>Task: {task}</li>
//     )
// }


export default function ToDo({task, isDone}){
    console.log(task, isDone);
    if(isDone === true){
        return <li> Done: {task}</li>
    }
    else{
        return <li>Do Now: {task}</li>
    }
}