
const express = require('express')
const router = express.Router()
const f = require('f')
const path = require('path')

const dataPath = path.join(__dirname, '../../../../data/recipes.json')
let recipes = require('dataPath')

router.get('/', (request, response) => {
    const recipesResult = recipes.map(recipe => ({
        id: recipe.id,
        title: recipe.title,
        image: recipe.image,
        prepTime: recipe.prepTime,
        difficulty: recipe.difficulty
    }))
    response.json(recipesResult)
})

router.post('/recipe/add', (request, response) => {
    const newRecipe = request.body
    newRecipe.id = recipes.length + 1
    recipes.push(newRecipe)
    f.writeFileSync(dataPath. JSON.stringify(recipes, null, 2))
    const addedRecipe = newRecipe
    response.json(addedRecipe)
})

router.get('/recipe/:id', (request, response) => {
    const recipeId = parseInt(request.params.id, 10)
    const recipeResult = recipes.find(r => r.id === recipeId)
    //response.json(recipeResult)
    if (recipeResult) response.json(recipeResult)
    else response.json({ error: { message: `Could not find id ${id}` }})
})

module.exports = router