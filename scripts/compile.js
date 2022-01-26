const fs = require('fs-extra')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const logger = require('../lib/logger')

const project = require('../project.config')

const compile = () => Promise.resolve()
    .then(() => logger.info('Starting compiler...'))
    .then((stats) => {
        fs.copySync(
          path.resolve(project.basePath, 'static'),
          path.resolve(project.basePath, 'public')
        )
        return stats
    })
    .then((stats) => {
        if (project.verbose) {
            logger.log(stats.toString({
                colors: true,
                chunks: false,
            }))
        }
        logger.success(`Compiler finished successfully! See ./${project.outDir}.`)
    })
    .catch((err) => logger.error('Compiler encountered errors.', err))

compile()
