import postModel from "../../models/postModel.js";

export const getPost = async (req, res) => {
  try {
    const postMessages = await postModel.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const createPost = async (req, res) => {
  try {
    const newPost = new postModel(req.body);
    const savedNews = await newPost.save();
    const postMessages = await postModel.find();
    res.status(201).json(postMessages);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
