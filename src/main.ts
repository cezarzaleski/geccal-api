import * as dotenv from 'dotenv'

dotenv.config()

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const chooseFramework = async () => {
  return import('./shared/infra/http/nestjs/index').then(async (framework) => framework.nestApp())
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const startServer = async () => {
  const app = await chooseFramework()
  const port = process.env.PORT
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  await app.listen(port, () => console.log(`server running at: http://localhost:${port}/api`))
}

void startServer().then(() => console.info('start'))
