import trees from "../data/trees";

export const getAllTrees = (req,res) => {
    res.json(trees)
}

export const getTreesById = (req,res) => {
    const id = req.params.id
    if(id < 0 || id >= trees.length){
        return res.json({message: 'Trees not found!'})
    }
    res.json(trees[id])
}

export const createTrees = (req,res) => {
    const {name, category, price} = req.body
    
}

export const deleteTrees = (req,res) => {
    const id = req.params.id
    if(id < 0 ||id >= trees.length){
        return res.json({message: 'Trees not found!'})
    }
    trees.splice(id, 1)
    res.json({message:'Trees has been deleted succesfully!'})
}