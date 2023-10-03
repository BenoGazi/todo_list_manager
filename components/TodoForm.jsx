
export default function TodoForm() {

    const handleSubmit = (event) => {
        event.preventDefault()
        const userInput = new FormData(event.target)
        alert(userInput.get('todo'))
    }

    
  return (
    <div>
<form onSubmit={handleSubmit} action="POST"> 
<label style={{display:'block'}}>New Task: </label>
    <input type="text" name="todo" id="todo"/>
<button >Add Task</button>
</form>
       
    </div>
  )
}
