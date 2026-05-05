export const getMessages = (req, res) => res.json({ message: "getMessages", channelId: req.params.channelId });
export const sendMessage = (req, res) => res.json({ message: "sendMessage" });
export const editMessage = (req, res) => res.json({ message: "editMessage" });
export const deleteMessage = (req, res) => res.json({ message: "deleteMessage" });
export const toggleReaction = (req, res) => res.json({ message: "toggleReaction" });
export const getThreadReplies = (req, res) => res.json({ message: "getThreadReplies" });
export const postThreadReply = (req, res) => res.json({ message: "postThreadReply" });