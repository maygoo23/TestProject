FROM node:18
WORKDIR /app
COPY package.json tsconfig.json ./
COPY packages ./packages
COPY apps/api ./apps/api
RUN npm install --workspace packages/prisma --workspace packages/shared --workspace apps/api --include-workspace-root false
RUN npm run -w packages/shared build
RUN npm run -w apps/api build
CMD ["node", "apps/api/dist/main.js"]
