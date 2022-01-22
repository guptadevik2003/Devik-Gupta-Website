module.exports = ({ app, express }) => {
    express.useRoutes = async () => {

        // Import Routes
        const rootRoute = require('../routes/rootRoute')

        // Using Routes
        app.use('/', rootRoute)

    }
}
