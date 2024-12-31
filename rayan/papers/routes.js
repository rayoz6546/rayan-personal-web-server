import * as dao from "./dao.js";

export default function PaperRoutes(app) {
      
  app.get("/api/papers", async (req, res) => {
    const papers = await dao.findAllPapers();
    res.send(papers);
  });

  app.post("/api/papers", async (req, res) => {
    const paper = await dao.createPaper(req.body);
    res.json(paper);
  }); 
 

  app.delete("/api/papers/:paperId", async (req, res) => {
    const { paperId } = req.params;
    const status = await dao.deletePaper(paperId);
    res.send(status);
  });

  app.put("/api/papers/:paperId", async (req, res) => {
    const { paperId } = req.params;
    const paperUpdates = req.body;
    const status = await dao.updatePaper(paperId, paperUpdates);
    res.send(status);
  });
}