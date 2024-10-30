import { createProductService, findProduct, updateProduct, deleteProduct } from "../service/index.js";

export const createProductController = async (req, res, next) => {
  try {

    const result = await createProductService(req.body);

    if (result.error) {
      return res.status(409).send(result.message);
    }
    res.send(result);
  } catch (error) {
    next(error);
  }
};


export const findProductController = async (req, res, next) => {
  try {
    const id = +req.params.id
    const result = await findProduct(id);

    if (result.error) {
      return res.status(409).send(result.message);
    }
    res.send(result);
  } catch (error) {
    next(error);
  }
};


export const updateProductController = async (req, res, next) => {
  try {
    const data = req.body
    const id = req.params.id
    const result = await updateProduct(data, id);

    if (result.error) {
      return res.status(409).send(result.message);
    }
    res.send(result);
  } catch (error) {
    next(error);
  }
};


export const deleteProductController = async (req, res, next) => {
  try {
    const id = +req.params.id
    const result = await deleteProduct(id);

    if (result.error) {
      return res.status(409).send(result.message);
    }
    res.send(result);
  } catch (error) {
    next(error);
  }
};
