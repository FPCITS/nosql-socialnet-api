const router = require('express').Router();

const {
    getComments,
    getCommentByID,
    addComment,
    updateComment,
    deleteComment
} = require('../../controllers/comment-controller');


router.route('/')
.get(getComments)


router.route('/:userId')
.post(addComments)


router.route('/:commentId')
.get(getCommenttByID)
.put(updateComment)
.delete(deleteComment)

module.exports = router;