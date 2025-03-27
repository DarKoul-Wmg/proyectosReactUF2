export default function Project ({project}) {

    return (
        <div className="w-[35rem] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
                    <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
                        Delete
                    </button>   
                </div>
                
                <p className="mb-4 text-stone-400">{project.date}</p>
                <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
            </header>
            <section>
                <h2>Tasks</h2>
                <p className="flex flex-col gap-1 my-4">
                    <label class="text-sm font-bold uppercase text-stone-500"></label>
                    <input class="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" type="text"></input>
                </p>
                <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
                    Add Task
                </button>
                <p>This project does not have any task</p>
                <ul></ul>

            </section>
        
        
        </div>
    )
}