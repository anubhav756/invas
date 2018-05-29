import Agent from '../models/Agent';

class AgentsController {
  static getAgent(req, res) {
    Agent.findOne({}, (err, agent) => {
      if (err) throw err;

      res.json(agent);
    });
  }
}

export default AgentsController;
