import {run} from '../../index.js'

const analyzeController = (req, res) => {
    try {
        run();
        res.status(200).json({ message: 'Code analysis completed successfully.' });
    } catch (error) {
        console.error('Error during code analysis:', error);
        res.status(500).json({ message: 'An error occurred during code analysis.' });
    }
}

const getInsightsController = (req, res) => {
    cosole.log("Getting insights...")
}

export { analyzeController, getInsightsController }