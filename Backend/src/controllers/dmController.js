export const getDMConversations = (req, res) => res.json({ message: "getDMConversations" });
export const startDM = (req, res) => res.json({ message: "startDM" });
export const getDMMessages = (req, res) => res.json({ message: "getDMMessages", dmId: req.params.dmId });
export const sendDMMessage = (req, res) => res.json({ message: "sendDMMessage" });