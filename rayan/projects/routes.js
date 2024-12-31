import * as dao from "./dao.js";

export default function ProjectRoutes(app) {
      
  app.get("/api/projects", async (req, res) => {
    const projects = await dao.findAllProjects();
    res.send(projects);
  });

  app.post("/api/projects", async (req, res) => {
    const project = await dao.createProject(req.body);
    res.json(project);
  }); 
 

  app.delete("/api/projects/:projectId", async (req, res) => {
    const { projectId } = req.params;
    const status = await dao.deleteProject(projectId);
    res.send(status);
  });

  app.put("/api/projects/:projectId", async (req, res) => {
    const { projectId } = req.params;
    const projectUpdates = req.body;
    const status = await dao.updateCourse(projectId, projectUpdates);
    res.send(status);
  });
}