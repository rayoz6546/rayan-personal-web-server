import model from "./model.js";

export function findAllPapers() {
    return model.find();
  }

  export function createPaper(paper) {

    delete paper._id;
    return model.create(paper);
  }
  


export function deletePaper(paperId) {
  return model.deleteOne({ _id: paperId });
 }
 

  export function updatePaper(paperId, paperUpdates) {

    return model.updateOne({ _id: paperId }, { $set: paperUpdates });
  }