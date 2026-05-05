export const uploadFile = (req, res) => res.json({ message: "uploadFile" });
export const getFileById = (req, res) => res.json({ message: "getFileById", fileId: req.params.fileId });
export const deleteFile = (req, res) => res.json({ message: "deleteFile" });