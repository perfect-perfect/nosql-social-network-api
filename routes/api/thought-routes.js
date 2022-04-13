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

router
    .route('/')
    .get(getAllThoughts)
    .post(addThought);

// '/api/thoughts/:thoughtId/
router
    .route('/:id')
    .put(updateThought)
    .delete(removeThought)
    // .put(addReaction);

router
    .route('/:id/reactions')
    .put(addReaction);
// '/api/thoughts/<userId>/<thoughtId>
// router
//     .route('/:userId/:thoughtId')
//     .get(getThoughtById)
// 'api/thoughts/<userId>/<thoughtId>/<reactionId'
router
    .route(':id/:reactionId')
    .delete(removeReaction)

module.exports = router;