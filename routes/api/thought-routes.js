const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    addThought,
    removeThought,
    updateThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

// '/api/thoughts/'
router
    .route('/')
    .get(getAllThoughts)
    .post(addThought);

// '/api/thoughts/:thoughtId/'
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(removeThought)

// '/api/thoughts/:thoughtId/reactions/'
router
    .route('/:thoughtId/reactions')
    .put(addReaction)

// '/api/thoughts/:thoughtId/reactions/:reactionId'
router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction)

module.exports = router;