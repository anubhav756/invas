import Agent from '../models/Agent';

export default class AgentController {
  static getAgent(req, res) {
    Agent.findOne({}, (err, agent) => {
      if (err) throw err;

      res.json(agent);
    });
  }
}
