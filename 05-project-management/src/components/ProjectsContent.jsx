import { useState } from "react";

export default function ProjectsContent(props){
    const [isCreatingProject, setIsCreatingProject] = useState(props.isCreatingProject);

    function activateCreateProject (){
        setIsCreatingProject (true);
    }

    if(!isCreatingProject){
        return (
            <div className="mt-24 text-center w-2/3">
              <img className="w-16 h-16 object-contain mx-auto" src="/src/assets/no-projects.png"/>
      
              <h2 className="text-xl font-bold text-stone-500 my-4">
                No project selected
              </h2>
              <p className="text-stone-400 mb-4">
                Select a project or get started with a new one
              </p>
              <p className="mt-8">
                <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
                    onClick={ activateCreateProject }>
                  Create a new project
                </button>
              </p>
            </div>
        )
    }

    return (
        <form className="w-[35rem] mt-8">
            <menu className="flex items-center justify-end gap-4 my-4">
                <button className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md">
                    Save
                </button>
            </menu>

                {/* Englobar la label y el inout en un p permire que los diferentes elementos
                    se queden con separación entre ellos (al ser una p es inline) */}
                <p className="flex flex-col gap-1 my-4">
                    <label className="text-sm font-bold uppercase text-stone-500">
                        Title
                    </label>
                    <input className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
                        type="text"
                        name="title"
                        placeholder="Title of your project"
                    />
                </p>
                <p className="flex flex-col gap-1 my-4">
                    <label className="text-sm font-bold uppercase text-stone-500">
                        Description
                    </label>
                    <textarea className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
                        name="description"
                        placeholder="Description of your project">
                    </textarea>
                </p>
                <p className="flex flex-col gap-1 my-4">
                    <label className="text-sm font-bold uppercase text-stone-500">
                        Due Date
                    </label>
                    <input className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
                        name="due_date"
                        type="date"
                    />
                </p>
        </form>

    )

    
}