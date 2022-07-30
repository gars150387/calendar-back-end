const { Router } = require('express')
const router = Router()


router.get('/' , ( reequire, response ) => {
    response.json({
        ok: true
    })
})

module.exports = router