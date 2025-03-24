
import { useState } from "react";
import ProjectsContent from "./components/ProjectsContent";
import Sidebar from "./components/Sidebar";

function App() {
    const [isCreatingProject, setIsCreatingProject] = useState(false);

return (
    <>
        <main className="h-screen my-8 flex gap-8">
            <Sidebar />
            <ProjectsContent isCreatingProject={isCreatingProject}/>
        </main>
    </>
);
}

export default App;
