
import { useState } from "react";
import ProjectsContent from "./components/ProjectsContent";
import Sidebar from "./components/Sidebar";
import Project from "./components/Project";

function App() {
    const [isCreatingProject, setIsCreatingProject] = useState(false);
    //algo para mostrar el projecto si se selecciona un projecto
    //let project = {title: 'Pee', description: 'recto', date:'2001-09-11', tasks: []}
    const [selectedProject, setSelectedProject] = useState(null);
    const [projects, setProjects] = useState([]);
    
    function handleAddProject(project){
        setProjects([...projects,project]);
        setIsCreatingProject(false);
    }


return (
    <>
        <main className="h-screen my-8 flex gap-8">

            {/* Pasamos la función para cambiar el estado */}
            <Sidebar onCreateProject ={() => setIsCreatingProject(true)} projects={projects}/>
            
            {/* Si hay un proyecto seleccionado, mostrarlo. Si no, mostrar ProjectsContent */}
            {selectedProject ? (
                <Project project={selectedProject} />
            ) : (
                <ProjectsContent 
                    handleAddProject={handleAddProject}
                    isCreatingProject={isCreatingProject}
                    onCreateProject={() => setIsCreatingProject(true)}
                />
            )}
     
        </main>
    </>
);
}

export default App;
