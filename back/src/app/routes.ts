import { Router } from 'express'
import UsuarioResource from './resource/usuario.resource'

const router = Router()

router.get('/usuario', UsuarioResource.index)
router.post('/usuario', UsuarioResource.create)

export default router
