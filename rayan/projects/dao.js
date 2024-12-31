import model from "./model.js";

export function findAllProjects() {
    return model.find();
  }

  export function createProject(project) {

    delete project._id;
    return model.create(project);
  }
  


export function deleteProject(projectId) {
  return model.deleteOne({ _id: projectId });
 }
 

  export function updateProject(projectId, projectUpdates) {

    return model.updateOne({ _id: projectId }, { $set: projectUpdates });
  }