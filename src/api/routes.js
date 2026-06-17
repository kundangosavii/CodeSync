import { Router } from 'express'
import { 
    analyzeController, 
    getInsightsController,
    getReadableInsightsController,
    getGraphController,
    getGraphWithNodeAndEdgeController
} from './controller.js'

const router = Router()

router.get('/analyze', analyzeController);
router.get('/insights', getInsightsController);
router.get('/readable-insights', getReadableInsightsController);
router.get('/graph', getGraphController);
router.get('/graphNodesEdges', getGraphWithNodeAndEdgeController);

export default router;